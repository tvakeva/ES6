// Global Map()

let map = new Map();
let hidden = Symbol();

map.set("hello", 42);
map.set(hidden, 34);

console.log(map.get("hello"));
console.log(map.get(hidden));
console.log(map.size);

for (let [key, value] of map.entries()) {
  console.log(key, value);
}
const json = {
  key: "value"
};

//json.hello;
//json["hello"];
