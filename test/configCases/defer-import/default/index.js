import val from "./defer.cjs" assert { webpack_defer: "true" };
import { touched } from "./state.js";
it("should run", async () => {
	expect(val).toBe(1);
	expect(touched).toBeTruthy();
});
