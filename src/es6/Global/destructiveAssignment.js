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
  const props = {
    name: "Mars",
    moons: ["Phobos", "Deimos"],
    temperature: -63,
    distance: 1.524
  };
  ({ name, moons }) => {
    //const { name, moons } = props;

    console.log(name);
    console.log(moons);
  };
}

// Destructive Assignment with default values
{
  const obj = { a: 1 };
  const { a, b = 2 } = obj;

  console.log(a, b);

  const list = [1, 4, 5, 6];
  const [x, y = 2, ...rest] = list;
  console.log(x, y);
  console.log(rest);
}
