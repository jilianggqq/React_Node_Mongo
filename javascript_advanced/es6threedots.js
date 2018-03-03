const userList = ["Robin", "Andrew", "Dan"];
const additionalUser = "Jordan";
const allUsers = [...userList, additionalUser];
console.log(allUsers);

const oldUsers = ["Robin", "Andrew"];
const newUsers = ["Dan", "Jordan"];
const allUsers1 = [...oldUsers, ...newUsers];
console.log(allUsers1);

const userNames = { firstname: "Robin", lastname: "Wieruch1" };
const userNames2 = { firstname: "Robin2", lastname: "Wieruch", age: 28 };
const age = 33;
const user = { ...userNames, ...userNames2, age };
console.log(user);

const leader = {
  age: 33,
  name: "Dever",
  employees: ["Peter", "John", "Jack"]
};

const newemployees = ["John", "Jack"];
const newleader = { ...leader, employees: newemployees };
console.log(newleader);
