import /* webpackDefer: true */ * as fullSync from "./full-sync.js";
import /* webpackDefer: true */ * as asyncMod from "./async-mod.js";
import /* webpackDefer: true */ * as deepAsync from "./deep-async.js";

console.log("START entry.js");

setTimeout(() => {
  console.log("TRIGGER full-sync.js");
  fullSync.x;
}, 5000);
setTimeout(() => {
  console.log("TRIGGER async-mod.js");
  asyncMod.x;
}, 10000);
setTimeout(() => {
  console.log("TRIGGER deep-async.js");
  deepAsync.x;
}, 15000);

console.log("END entry.js");
