// Object Dynamic Property

const planets = ["Mercury", "Venus", "Earth", "Mars"];

const result = planets.reduce((previous, current, index) => {
  return {
    ...previous,
    [current.toLowerCase()]: current
  };
}, {});

console.log(result);
