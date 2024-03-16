let dog = {
  name: "Jack",
  breed: "Doberman",
  age: 6,
  weight: 40,
  show: function () {
    console.log(`${this.name}\n${this.breed}\n${this.age} y.o\n${this.weight} kg`);
  },
};
dog.show();