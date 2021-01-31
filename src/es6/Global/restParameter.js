// Rest Parameter

const action = (type, ...rest) => {
  console.log(type);
  console.log(rest);
};

action("start", true, [1, 2, 3]);

/* const action = (type, joku, ...rest) => {
  console.log(type);
  console.log(rest);
};

action("start", true, [1, 2, 3]);
*/
