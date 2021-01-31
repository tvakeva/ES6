// In ES6 this is not scoped

class Car {
  startEngine() {
    console.log("Engine running...");
    this.stopEngine();
  }
  stopEngine() {
    console.log("...engine stopped.");
    console.log(this);
  }
}

const car = new Car();
car.startEngine();
