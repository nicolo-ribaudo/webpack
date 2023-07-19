/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* deferred harmony import */ var _full_sync_js__WEBPACK_IMPORTED_MODULE_0__ = {
	a: new Proxy({}, {
		getOwnPropertyDescriptor: (_, k) => (Reflect.getOwnPropertyDescriptor(__webpack_require__(2), k)),
		get: (_, k) => (Reflect.get(__webpack_require__(2), k)),
		set: (_, k, v) => (Reflect.set(__webpack_require__(2), k, v)),
		has: (_, k) => (Reflect.has(__webpack_require__(2), k)),
		deleteProperty: (_, k) => (Reflect.deleteProperty(__webpack_require__(2), k)),
		ownKeys: (_, k) => (Reflect.ownKeys(__webpack_require__(2), k)),
		defineProperty: (_, k, d) => (Reflect.defineProperty(__webpack_require__(2), k, d)),
		getPrototypeOf: () => (null),
		setPrototypeOf: (_, p) => (p === null),
		isExtensible: () => (false),
		preventExtensions: () => (true)
	})
};
/* harmony import */ var _async_mod_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* deferred harmony import */ var _deep_async_js__WEBPACK_IMPORTED_MODULE_2__ = Promise.all([
	/* deferred harmony import async dependency */ __webpack_require__(7),
]).then(function () {
	return new Proxy({ f: true }, {
		getOwnPropertyDescriptor: (_, k) => (Reflect.getOwnPropertyDescriptor(__webpack_handle_async_dependencies__([__webpack_require__(6)])[0], k)),
		get: (t, k) => {
			if (t.f) { t.f = false; return undefined }
			return Reflect.get(__webpack_handle_async_dependencies__([__webpack_require__(6)])[0], k);
		},
		set: (_, k, v) => (Reflect.set(__webpack_handle_async_dependencies__([__webpack_require__(6)])[0], k, v)),
		has: (_, k) => (Reflect.has(__webpack_handle_async_dependencies__([__webpack_require__(6)])[0], k)),
		deleteProperty: (_, k) => (Reflect.deleteProperty(__webpack_handle_async_dependencies__([__webpack_require__(6)])[0], k)),
		ownKeys: (_, k) => (Reflect.ownKeys(__webpack_handle_async_dependencies__([__webpack_require__(6)])[0], k)),
		defineProperty: (_, k, d) => (Reflect.defineProperty(__webpack_handle_async_dependencies__([__webpack_require__(6)])[0], k, d)),
		getPrototypeOf: () => (null),
		setPrototypeOf: (_, p) => (p === null),
		isExtensible: () => (false),
		preventExtensions: () => (true)
	});
});
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_async_mod_js__WEBPACK_IMPORTED_MODULE_1__, _deep_async_js__WEBPACK_IMPORTED_MODULE_2__]);
([_async_mod_js__WEBPACK_IMPORTED_MODULE_1__, _deep_async_js__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




console.log("START entry.js");

setTimeout(() => {
  console.log("TRIGGER full-sync.js");
  _full_sync_js__WEBPACK_IMPORTED_MODULE_0__.a.x;
}, 5000);
setTimeout(() => {
  console.log("TRIGGER async-mod.js");
  _async_mod_js__WEBPACK_IMPORTED_MODULE_1__.x;
}, 10000);
setTimeout(() => {
  console.log("TRIGGER deep-async.js");
  _deep_async_js__WEBPACK_IMPORTED_MODULE_2__.x;
}, 15000);

console.log("END entry.js");

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ x)
/* harmony export */ });
/* harmony import */ var _full_sync_dep_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


console.log("START full-sync.js");

let x;

console.log("END full-sync.js");


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


console.log("START full-sync-dep.js");
console.log("END full-sync-dep.js");


/***/ }),
/* 4 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ x)
/* harmony export */ });
/* harmony import */ var _async_mod_dep_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);


console.log("START async-mod.js");

await 0;
let x;

console.log("END async-mod.js");

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


console.log("START async-mod-dep.js");
console.log("END async-mod-dep.js");


/***/ }),
/* 6 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ x)
/* harmony export */ });
/* harmony import */ var _deep_async_dep_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_deep_async_dep_js__WEBPACK_IMPORTED_MODULE_0__]);
_deep_async_dep_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


console.log("START deep-async.js");

let x;

console.log("END deep-async.js");

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),
/* 7 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);


console.log("START deep-async-dep.js");
await 0;
console.log("END deep-async-dep.js");

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

var it = (name, fn) => {
	fn();
}
var expect = (a) => ({
	toBe: (b) => {
		if (a !== b) throw new Error(`${a} !== ${b}`);
	},
});

it("should compile", async () => {
	// change to other way if webpack in the future rejects require a TLA esm.
	let mod = __webpack_require__(1);
	//expect(mod).toBeInstanceOf(Promise);
	//mod = await mod;
	//expect(mod._.val).toBe(1);
});

})();

/******/ })()
;