"use strict"; //This is required using this syntax

// JavaScript classes are introduced in ECMAScript 6 and are syntactical sugar over JavaScript's existing prototype-based inheritance. 
// The class syntax is not introducing a new object-oriented inheritance model to JavaScript. 
// JavaScript classes provide a much simpler and clearer syntax to create objects and deal with inheritance.
// source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

class Person {
  static printProperties() {
    console.log('Person args: ', 'firstName, lastName, email, phone')
  }
  constructor(firstName, lastName, email, phone) {
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.phone = phone
  }
  name() {
    return this.firstName + " " + this.lastName;
  }
};

class Landlord extends Person {

};

var kevin = new Landlord("kevin", "Mircovich", "kevin@gmail.com", "7276785785")
console.log(kevin);
console.log(kevin.name());
