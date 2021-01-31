// Class Inheritance

import Shape from "./definition.js";

class Circle extends Shape {
  constructor(id, x, y, radius) {
    super(id, x, y);
    this.radius = radius;
  }
}

const circleObject = new Circle("#8", 15, 35, 12);
circleObject.move(50, 100);

console.log(circleObject);
