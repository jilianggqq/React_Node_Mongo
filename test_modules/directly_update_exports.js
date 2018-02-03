// Why didn’t exports have the assigned string value? exports is actually a property inside the module.

// Why didn’t exports have the assigned string value?
// exports is actually a property inside the module.

// When you assign a function or string directly to exports,
// Javascript will treat exports as another variable. Not the exports property inside the module.

// When you change the property of exports,
// Javascript will access the exports property inside the module and apply the changes.

exports = "just exports";
// should use:
// module.exports = "just exports";
