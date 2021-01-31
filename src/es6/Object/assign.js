// Object.assign();

const mars = {
  name: "Mars",
  moons: ["Phobos", "Deimos"]
};

const venus = {
  name: "Venus",
  temperature: 462
};

//const unionOfPlanets = Object.assign(mars, venus);
const unionOfPlanets = Object.assign({}, mars, venus);
//const unionOfPlanets = {...mars, ...venus};

console.log(mars);
console.log(unionOfPlanets);
