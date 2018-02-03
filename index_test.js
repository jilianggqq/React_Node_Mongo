// 1. What require does is to return the exports object defined in the file.
const fridge = require("./test_modules/exports_nomodule_fridge");
// console.log(fridge);
function makeSandwich() {
  return { sandwith: fridge.bread() + " " + fridge.egg };
}

console.log(makeSandwich());

// 2. Use Case 2: Exporting with module.exports
const bread = require("./test_modules/exports_module_bread");
if (toString.call(bread) === "[object Function]") {
  console.log(bread());
} else {
  console.log(bread);
}

// 3. Use Case 3: return an object
const coder = require("./test_modules/exports_modules_author");
console.log(coder.author);
coder.print_name();
console.log(coder.get_age(1984));
// coder.print_all();

// 4. if we directly assign a value to exports
const received_exports = require("./test_modules/directly_update_exports");
console.log(received_exports);
