"use strict"
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

class Landlord extends Person {
  constructor(firstName, lastName, email, phone) {
    super(firstName, lastName, email, phone)
    this.tenants = []
  }
};

class Tenant extends Person {
  constructor(firstName, lastName, email, phone){
    super(firstName, lastName, email, phone)
    this.landlord = null
  }
};

// landlord
var kevin = new Landlord("Kevin", "Mircovich", "kevin@gmail.com", "7276785785");

// Tenants
var joe = new Tenant("Joe", "Chalihan", "joe@gmail.com", "7899400392");
var brian = new Tenant("Brian", "Smith", "brian@gmail.com", "7899400392");
var mike = new Tenant("Mike", "Fernandez", "mike@gmail.com", "7899400392");

console.log(kevin)