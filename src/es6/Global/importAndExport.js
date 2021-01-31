// Import and Export
import * as math from "./lib/math.js";
import exp2, { sum, PI } from "./lib/math.js";
import exp from "./lib/math.js";

console.log("2π = " + math.sum(math.PI, math.PI));
console.log("2π = " + sum(PI, PI));
console.log(math.default(2));
console.log(exp(2));

console.log(exp2(2));
