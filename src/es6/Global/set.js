// Global Set()

let set = new Set();

set
  .add("hello")
  .add("goodbye")
  .add("hello");

console.log(set.size);
console.log(set.has("hello"));

for (let key of set.values()) console.log(key);
