const str = require("./string_module");
const obj = require("./obj_module");
const Person = require("./func_class_module");
const pkg1 = require("./package1");
console.log(str);
console.log(obj);

let p1 = new Person("Peter", "Guan");
let p2 = new Person("Peter", "Zhang");
p1.print_fullname();
p2.print_fullname();
console.log(pkg1.msgfrompkg1);
console.log(pkg1.info);
