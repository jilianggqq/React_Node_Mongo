// convert string to json
const str = '{"abc":"123", "bcd": "info"}';
let obj = JSON.parse(str);
console.log(obj.bcd);

var json = '{"result":true, "count":42}';
obj = JSON.parse(json);

console.log(obj.count);
// expected output: 42

console.log(obj.result);
// expected output: true

console.log(obj.toString()); //[object Object]
//let obj2 = JSON.parse(obj); // exception. You can calling JSON.parse('[object Object]')

const obj3 = {
  name: "peter",
  age: 33
};

const str3 = JSON.stringify(obj3);
console.log("str3: ", str3);

const obj3copy = JSON.parse(str3);
console.log("obj3copy: ", obj3copy);
