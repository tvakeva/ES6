// Global Set()

let set = new Set();

set.add("hello").add("goodbye").add("hello");

console.log(set.size);
console.log(set.has("hello"));

for (let key of set.values()) console.log(key);

const lista = [1, 2, 3, 4, 5, 6, 1, 2, 4, 5, 2, 4];
const uniqueValues = [...new Set(lista)];
console.log(uniqueValues);
