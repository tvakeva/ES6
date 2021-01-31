// Spread Operator

const mars = {
  name: "Mars",
  moons: ["Phobos", "Deimos"]
};

const venus = {
  name: "Venus",
  temperature: 462
};

const unionOfPlanets = { ...mars, ...venus };

console.log(unionOfPlanets);

const name = "David";

console.log([...name]);
