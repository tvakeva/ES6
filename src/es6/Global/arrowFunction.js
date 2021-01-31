// Arrow function with default parameters

// ES5
var multiplication1 = function (x, y) {
  return x * y;
};
//      (x, y) => {return x * y;};
//      (x, y) => x * y;

// ES6
const multiplication2 = (x = 2, y = 2) => x * y;
//If function multiplication2 changes its implementation on fly the let
//let multiplication2 = (x = 2, y = 2) => x * y;
console.log([1, 2, 3, 4].filter((x) => x % 2));

console.log(multiplication2(3, 4));
console.log(multiplication2());
