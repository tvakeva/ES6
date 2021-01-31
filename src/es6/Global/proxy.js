// Global Proxy()

const validator = {
  set: function(object, property, value) {
    if (property === "age") {
      if (!Number.isInteger(value)) {
        throw new TypeError("The age is not an integer");
      }
      if (value > 200) {
        throw new RangeError("The age seems invalid");
      }
    }
    // The default behavior to store the value
    object[property] = value;
    return true;
  }
};

const person = new Proxy({}, validator);

person.age = 100;
console.log(person.age);
//person.age = 'young';
//person.age = 300;
