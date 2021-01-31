// Symbol

import Shape from "./definition.js";

class Triangle extends Shape {
  #privateArea;
  constructor(id, x, y, width, height) {
    super(id, x, y);
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    this.#privateArea = (this.width * this.height) / 2;
  }

  getArea() {
    return this.#privateArea;
  }
}

const triangleObject = new Triangle("#9", 3, 9, 5, 12);

console.log(triangleObject);

triangleObject.calculateArea();

console.log(triangleObject.getArea());
console.log(triangleObject.privateAreaArea);
