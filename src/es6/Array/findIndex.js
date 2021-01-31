// Array.findIndex()

const planets = ["Mercury", "Venus", "Earth", "Mars"];

// Returns the index of the first array element that passes a test function
const firstLetterIsE = value => value[0] === "E";

const result = planets.findIndex(firstLetterIsE);

console.log(result);
