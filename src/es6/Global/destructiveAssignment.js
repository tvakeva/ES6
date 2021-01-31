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

const lista = [1, 2, 3, 4, 5];
const uusiLista = [...lista, 6];
const [eka, toka, ...loppulista] = lista;
//const [eka, toka, ...loppulista] = [7, ...lista, 6];

console.log(uusiLista);
console.log(eka, toka, loppulista);

const restParamFunc = (eka, toka, ...loput) => {
  console.log("!!!", eka, toka, loput);
};

restParamFunc(1, 2, 3, 4, 5, 6, 7, 8, 9);
restParamFunc(...lista);
