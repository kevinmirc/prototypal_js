"use strict";
var Person    = require('./models/person').Person
var Landlord  = require('./models/landlord').Landlord
var Tenant    = require('./models/tenant').Tenant

// landlord
var kevin = new Landlord("Kevin", "Mircovich", "kevin@gmail.com", "7276785785");

// Tenants
var joe = new Tenant("Joe", "Chalihan", "joe@gmail.com", "7899400392");
var brian = new Tenant("Brian", "Smith", "brian@gmail.com", "7899400392");
var mike = new Tenant("Mike", "Fernandez", "mike@gmail.com", "7899400392");

console.log(kevin)