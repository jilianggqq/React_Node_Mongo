// 1.you are allowed to use computed property names in JavaScript ES6.
const key = "name";
let user = {
  [key]: "Peter Guan"
};

console.log(user);

// 2. you can use a shorthand property syntax to initialize your objects more concisely.
const name = "Qiqiang Guan";
user = { name }; // equals to user = { name: name };
console.log(user);
