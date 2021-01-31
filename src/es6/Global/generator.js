// Generator

import { iteratorGenerator } from "./lib/rangeIterators";

let it = iteratorGenerator(0, 10, 2);

let result = it.next();

while (!result.done) {
  console.log(result);
  result = it.next();
}

console.log("Iterated over sequence of size: ", result);
