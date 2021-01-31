// Array.find()

const planets = ["Mercury", "Venus", "Earth", "Mars"];

// Returns the value of the first array element that passes a test function
const firstLetterIsM = value => value[0] === "M";

var result = planets.find(firstLetterIsM);

console.log(result);
