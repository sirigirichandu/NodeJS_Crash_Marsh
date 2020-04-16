//const person = { age: 65, name: "chandra" };

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log("Hi, My name is " + this.name + ". My age is " + this.age);
  }
}

module.exports = Person;
