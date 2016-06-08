function Person (firstName, lastName, email, phone) {
  this.firstName = firstName,
  this.lastName = lastName,
  this.email = email,
  this.phone = phone
}

Person.prototype.name = function() {
  return this.firstName + ' ' + this.lastName;
};

Person.prototype.printProperties = function() {
  console.log(this.name());
  console.log(" ", this.email);
  console.log(" ", this.phone);
};

kevin = new Person("Kevin", "Mircovich", "kevin@gmail.com", "7276785785");
kevin.printProperties();