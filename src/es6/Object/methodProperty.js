// Object Method Property

const obj = {
  value: 42,
  add(x) {
    this.value = this.value + x;
  }
};

obj.add(5);

console.log(obj);
