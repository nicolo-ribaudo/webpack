
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
	let mod = require("./entry.js");
	//expect(mod).toBeInstanceOf(Promise);
	//mod = await mod;
	//expect(mod._.val).toBe(1);
});
