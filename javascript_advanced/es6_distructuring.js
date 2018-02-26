// create a new object.
const user = {
  firstName: "Peter",
  lastName: "Guan",
  email: "jilianggqq@gmail.com",
  address: "Dxion Landing Rd apt 176"
};
function displayFullName({ firstName, lastName }) {
  console.log(firstName + " " + lastName);
}

const displayFullName2 = user => {
  const { firstName, lastName } = user;
  console.log(firstName + " " + lastName);
};
displayFullName(user);
displayFullName2(user);
