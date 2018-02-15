exports.SimpleMsg = "Hello world";
console.log("exports is module.exports? ",exports === module.exports);
exports.longMsg = "Here is a long msg from test";
// if we are using this line. it will change the reference of module.exports.
// module.exports = {aaa:333};
