// Object.assign();

const mars = {
  name: "Mars",
  moons: ["Phobos", "Deimos"]
};

const venus = {
  name: "Venus",
  temperature: 462
};

const unionOfPlanets = Object.assign(mars, venus);

console.log(unionOfPlanets);
