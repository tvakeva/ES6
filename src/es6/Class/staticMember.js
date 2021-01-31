// Class Static Member

import Shape from "./definition.js";

class Rectangle extends Shape {
  constructor(id, x, y, width, height) {
    super(id, x, y);
    this.width = width;
    this.height = height;
  }

  static edgeOptions() {
    return {
      flat: 1,
      smooth: 2,
      bevel: 3,
      rounded: 4
    };
  }
}

const rectangleObject = new Rectangle("#7", 2, 4, 120, 30);

console.log(rectangleObject);

console.log(Rectangle.edgeOptions());
