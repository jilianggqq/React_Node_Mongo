"use strict";
function Person(first_name, last_name) {
  this.first_name = first_name;
  this.last_name = last_name;
}

Person.prototype.print_full_name = function() {
  console.log(this.first_name + " " + this.last_name);
};

// Professional inherates from person
function Professional(prefix, first_name, last_name) {
  Person.call(this, first_name, last_name);
  this.prefix = prefix;
}

// make Professional inherate from Person
Professional.prototype = Object.create(Person.prototype);

// false. In fact, Professional.prototype.__proto__ === Person.prototype;
console.log(Professional.prototype === Person.prototype);
// true
console.log(Professional.prototype.__proto__ === Person.prototype);

Professional.prototype.constuctor = Professional;

Professional.prototype.print_full_name = function() {
  console.log(this.prefix + " " + this.first_name + " " + this.last_name);
};

let karl = new Professional("Dr.", "Karl", "Wang");
// the essential reason of this is:
console.log(karl.__proto__ === Professional.prototype);
karl.print_full_name();
