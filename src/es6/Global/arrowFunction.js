// Arrow function with default parameters

// ES5
var multiplication1 = function(x, y) {
  return x * y;
};

// ES6
const multiplication2 = (x = 2, y = 2) => x * y;

console.log(multiplication2(3, 4));
console.log(multiplication2());
