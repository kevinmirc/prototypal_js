"use strict";

class Person {
  constructor(firstName, lastName, email, phone) {
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.phone = phone
  }
  name() {
    return this.firstName + " " + this.lastName;
  }
  printInfo() {
    console.log(`${this.firstName},${this.lastName},${this.email},${this.phone}`);
  }
};

exports.Person = Person;