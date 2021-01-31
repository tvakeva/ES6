// Global Destructive Assignment

// Destructive Assignment for Array
{
  const list = [1, 2, 3, 4];
  const [a, , b] = list;

  console.log(a);
  console.log(b);
}

// Destructive Assignment for Object
{
  const mars = {
    name: "Mars",
    moons: ["Phobos", "Deimos"],
    temperature: -63,
    distance: 1.524
  };

  const { name, moons } = mars;

  console.log(name);
  console.log(moons);
}

// Destructive Assignment with default values
{
  const obj = { a: 1 };
  const { a, b = 2 } = obj;

  console.log(a, b);

  const list = [1];
  const [x, y = 2] = list;
  console.log(x, y);
}
