"use strict";
// use ES6 class way.
class Person {
  constructor(first_name, last_name) {
    this.first_name = first_name;
    this.last_name = last_name;
  }

  print_short_name() {
    // console.log(this.first_name + " " + this.last_name);
    console.log(`${this.first_name} ${this.last_name}`);
  }
}

class Professional extends Person {
  constructor(prefix, first_name, last_name) {
    super(first_name, last_name);
    this.prefix = prefix;
  }
  print_full_name() {
    console.log(this.prefix + " " + this.first_name + " " + this.last_name);
  }
}

let karl = new Professional("Dr.", "Karl", "Wang");
// the essential reason of this is:
console.log(karl.__proto__ === Professional.prototype);
karl.print_full_name();
karl.print_short_name();
