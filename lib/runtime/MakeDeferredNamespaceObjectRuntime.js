/*
	MIT License http://www.opensource.org/licenses/mit-license.php
*/

"use strict";

const RuntimeGlobals = require("../RuntimeGlobals");
const Template = require("../Template");
const HelperRuntimeModule = require("./HelperRuntimeModule");

/**
 * @param {"default-only" | "default-with-named" | "dynamic" | "namespace"} exportsType exports type
 * @returns {string} mode
 */
function getMakeDeferredNamespaceModeFromExportsType(exportsType) {
	if (exportsType === "namespace") return `/* ${exportsType} */ 0`;
	if (exportsType === "default-only") return `/* ${exportsType} */ 1`;
	if (exportsType === "default-with-named") return `/* ${exportsType} */ 2`;
	if (exportsType === "dynamic") return `/* ${exportsType} */ 3`;
}
/**
 * @param {import("../ModuleTemplate").RuntimeTemplate} runtimeTemplate runtimeTemplate
 * @param {string} moduleId moduleId
 * @returns {string} function
 */
function getOptimizedDeferredModule(runtimeTemplate, moduleId) {
	return Template.asString([
		"{",
		Template.indent([
			"get a() {",
			Template.indent([
				`${runtimeTemplate.supportsConst() ? "const" : "var"} exports = ${
					RuntimeGlobals.require
				}(${moduleId});`,
				`Object.defineProperty(this, "a", { value: exports });`,
				`return exports;`
			]),
			"}"
		]),
		"}"
	]);
}
/**
 * @param {import("../ModuleTemplate").RuntimeTemplate} runtimeTemplate runtimeTemplate
 * @param {string} moduleId moduleId
 * @returns {string} function
 */
function getProxyDeferredModule(runtimeTemplate, moduleId, hasAsyncDeps) {
	const requireSync = hasAsyncDeps
		// Evaluating this module will return a promise, but given that we know that all its dependencies
		// have already been evalauted we can use __webpack_handle_async_dependencies__ to synchronously
		// get its result.
		? `__webpack_handle_async_dependencies__([${RuntimeGlobals.require}(${moduleId})])[0]`
		: `${RuntimeGlobals.require}(${moduleId})`;

	function evaluationTrap(name, args) {
		return `${name}: ${runtimeTemplate.returningFunction(`Reflect.${name}(${requireSync}, ${args})`, `_, ${args}`)},`;
	}

	return Template.asString([
		`new Proxy(${hasAsyncDeps ? "{ f: true }" : "{}"}, {`,
		Template.indent([
			evaluationTrap("getOwnPropertyDescriptor", "k"),
			hasAsyncDeps ? `get: ${runtimeTemplate.basicFunction("t, k", [
				"if (t.f) { t.f = false; return undefined }",
				`return Reflect.get(${requireSync}, k);`,
			])},` : evaluationTrap("get", "k"),
			evaluationTrap("set", "k, v"),
			evaluationTrap("has", "k"),
			evaluationTrap("deleteProperty", "k"),
			evaluationTrap("ownKeys", "k"),
			evaluationTrap("defineProperty", "k, d"),
			`getPrototypeOf: ${runtimeTemplate.returningFunction("null")},`,
			`setPrototypeOf: ${runtimeTemplate.returningFunction("p === null", "_, p")},`,
			`isExtensible: ${runtimeTemplate.returningFunction("false")},`,
			`preventExtensions: ${runtimeTemplate.returningFunction("true")}`,
		]),
		"})",
	]);
}
const strictModuleCache = [
	"if (cachedModule && cachedModule.error === undefined) {",
	Template.indent([
		"var exports = cachedModule.exports;",
		"if (mode == 0) return exports;",
		`if (mode == 1) return ${RuntimeGlobals.createFakeNamespaceObject}(exports);`,
		`if (mode == 2) return ${RuntimeGlobals.createFakeNamespaceObject}(exports, 2);`,
		`if (mode == 3) return ${RuntimeGlobals.createFakeNamespaceObject}(exports, 6);` // 2 | 4
	]),
	"}"
];
const nonStrictModuleCache = [
	"// optimization not applied when output.strictModuleErrorHandling is off"
];

class MakeDeferredNamespaceObjectRuntimeModule extends HelperRuntimeModule {
	constructor() {
		super("make deferred namespace object");
	}

	/**
	 * @returns {string | null} runtime code
	 */
	generate() {
		const { runtimeTemplate } = this.compilation;
		const fn = RuntimeGlobals.makeDeferredNamespaceObject;
		const strictError =
			this.compilation.options.output.strictModuleErrorHandling;
		return `${fn} = ${runtimeTemplate.basicFunction("moduleId, mode", [
			"// mode: 0 => namespace (esm)",
			"// mode: 1 => default-only (esm strict cjs)",
			"// mode: 2 => default-with-named (esm-cjs compat)",
			"// mode: 3 => dynamic (if exports has __esModule, then esm, otherwise default-with-named)",
			"",
			"var cachedModule = __webpack_module_cache__[moduleId];",
			...(strictError ? strictModuleCache : nonStrictModuleCache),
			"",
			"if (mode == 1) {",
			Template.indent([
				"var ns = Object.create(null);",
				`${RuntimeGlobals.makeNamespaceObject}(ns);`,
				`${RuntimeGlobals.definePropertyGetters}(ns, {`,
				Template.indent([
					'"default": ' +
						runtimeTemplate.basicFunction("", [
							`var exports = ${RuntimeGlobals.require}(moduleId);`,
							`${RuntimeGlobals.definePropertyGetters}(ns, {`,
							Template.indent([
								'"default": ' + runtimeTemplate.returningFunction("exports")
							]),
							"});",
							"return exports;"
						])
				]),
				"});",
				"return ns"
			]),
			"}",
			"",
			"var init = " +
				runtimeTemplate.basicFunction("", [
					`ns = ${RuntimeGlobals.require}(moduleId);`,
					"init = undefined;",
					"if (mode == 3) {",
					Template.indent(["if (ns.__esModule) mode = 0;", "else mode = 2;"]),
					"}",
					"if (!!mode) return;",
					"delete handler.defineProperty;",
					"delete handler.deleteProperty;",
					"delete handler.set;",
					"delete handler.get;",
					"delete handler.has;",
					"delete handler.ownKeys;",
					"delete handler.getOwnPropertyDescriptor;"
				]),
			"",
			`var ns = ${
				strictError ? "" : "cachedModule && cachedModule.exports || "
			}__webpack_module_deferred_exports__[moduleId] || (__webpack_module_deferred_exports__[moduleId] = Object.create(null));`,

			"var handler = {",
			Template.indent([
				"__proto__: null,",
				`get: ${runtimeTemplate.basicFunction("target, name", [
					'if (name === "__esModule") return true;',
					'if (name === Symbol.toStringTag) return "Module";',
					"if (init) init();",
					`if (mode == 2 && name == "default" && !${RuntimeGlobals.hasOwnProperty}(ns, name)) { `,
					Template.indent("return ns;"),
					"}",
					`return Reflect.get(ns, name);`
				])},`,
				`has: ${runtimeTemplate.basicFunction("target, name", [
					'if (name === "__esModule") return true;',
					"if (name === Symbol.toStringTag) return true;",
					"if (init) init();",
					`return Reflect.has(ns, name);`
				])},`,
				`ownKeys: ${runtimeTemplate.basicFunction("", [
					"if (init) init();",
					"return Reflect.ownKeys(ns);"
				])},`,
				`getOwnPropertyDescriptor: ${runtimeTemplate.basicFunction(
					"target, name",
					[
						'if (name === "__esModule") return { value: true, configurable: !!mode };',
						'if (name === Symbol.toStringTag) return { value: "Module", configurable: !!mode };',
						"if (init) init();",
						"var desc = Reflect.getOwnPropertyDescriptor(ns, name);",
						`if (mode == 2 && name == "default" && !desc) {`,
						Template.indent("desc = { value: ns, configurable: true };"),
						"}",
						"return desc;"
					]
				)},`,
				`defineProperty: ${runtimeTemplate.basicFunction("target, name", [
					"if (init) init();",
					"return Reflect.defineProperty(ns, name);"
				])},`,
				`deleteProperty: ${runtimeTemplate.returningFunction("false")},`,
				`set: ${runtimeTemplate.returningFunction("false")},`
			]),
			"}",
			"return new Proxy(ns, handler);"
		])}`;
	}
}

module.exports = MakeDeferredNamespaceObjectRuntimeModule;
module.exports.getMakeDeferredNamespaceModeFromExportsType =
	getMakeDeferredNamespaceModeFromExportsType;
module.exports.getOptimizedDeferredModule = getOptimizedDeferredModule;
module.exports.getProxyDeferredModule = getProxyDeferredModule;
