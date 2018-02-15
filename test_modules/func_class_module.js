var Person = function(first, last) {
  this.first_name = first;
  this.last_name = last;
};

Person.prototype.print_fullname = function() {
  console.log(this.first_name + " " + this.last_name);
};

module.exports = Person;
