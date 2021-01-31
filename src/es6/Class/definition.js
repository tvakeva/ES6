// Class Definition

export default class Shape {
  constructor(id, x, y) {
    this.id = id;
    this.move(x, y);
  }
  move(x, y) {
    this.x = x;
    this.y = y;
  }
}

const object = new Shape("#12", 8, 32);

console.log(object);
