/*------------------ 
import & export
------------------*/

//import defaultApiKey from "./util.js";
// import { apiKey1, apiKey2 as key2 } from "./util.js";
// import { apiKey1 } from "./util.js";
// import * as util from "./util.js";

// console.log(util.default);
// console.log(apiKey1);
// console.log(key2);
// console.log(apiKey2);
// console.log(util.apiKey2);

/*------------------ 
Revisiting Variables & Values
------------------*/

let userName = "Majd Hemud";
let age = 27;

const ssn = "123-45-6789";

// console.log(userName);
// console.log(age);
// console.log(ssn);

/*------------------ 
Revisiting Operators
------------------*/

let x = 10;
let y = 20;

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
// console.log(x ** y);

if (x > y) {
  console.log("x is greater than y");
} else {
  console.log("x is not greater than y");
}

let firstName = "Majd";
let lastName = "Hemud";

console.log(firstName + " " + lastName);

/*------------------
Revisiting Functions & Parameters
------------------*/

function createGreeting(name, message = "Hello") {
  return `${message} ${name}!`;
}

const greeting = createGreeting("Majd");
console.log(greeting);

const greeting2 = createGreeting("Majd", "Hi");
console.log(greeting2);

/*------------------
Revisiting Objects & Classes
------------------*/

const person = {
  name: "Majd",
  age: 27,
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};

// person.greet();

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, my name is ${this.name}`);
  }
}

const person2 = new Person("Majd", 27);
// person2.greet();

/*------------------
Arrays & Array Methods like map()
------------------*/

const people = ["Majd", "Sam", "John"];

people.push("Sarah");

console.log(people);

const sarahIndex = people.findIndex((person) => person === "Sarah");

console.log(sarahIndex);

const peopleEdited = people.map((person) => ({ name: person }));

console.log(peopleEdited);
