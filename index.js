// Module Wrapper function
//(function(require, module, exports, __dirname, __filename) {});

const Person = require("./person");

const person1 = new Person("chandra", 30);

person1.greeting();
