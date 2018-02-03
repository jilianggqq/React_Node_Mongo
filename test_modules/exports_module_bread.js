"use strict";
// Use Case 2: Exporting with module.exports
module.exports = () => {
  return "bread : 2";
};

module.exports = () => {
  return "bread : 3";
};

module.exports = "bread is a string";
// through the test, we can see it just uses the last export one.
module.exports = () => {
  return "this is the 3rd bread";
};
