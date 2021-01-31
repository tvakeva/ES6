// Spread Operator

const mars = {
  name: "Mars",
  moons: ["Phobos", "Deimos"]
};
//console.log({ ...mars, size: 1000000000 });
//console.log({ ...mars, name: "Earth2" });
const oldMars = mars;

const venus = {
  name: "Venus",
  temperature: 462
};
const mars2 = { ...mars, temperature: 14 };
mars.temperature = 14;

console.log("mars", mars, oldMars === mars);
console.log("mars2", mars2, oldMars === mars2);
console.log("oldMars", oldMars);

const unionOfPlanets = { ...mars, ...venus };
//const unionOfPlanets = { ...mars, ...venus, name: "Earth2" };

console.log(unionOfPlanets);

const name = "David";

console.log([...name]);
console.log([...mars.moons, "Moon"]);
