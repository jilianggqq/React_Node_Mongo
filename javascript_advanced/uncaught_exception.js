const rejectedPromise = require("./uncaught_promise");
process
  .on("unhandledRejection", (reason, p) => {
    console.log("not a reject! welcome", reason, p);
  })
  .on("uncaughtException", err => {
    console.error("get uncaught exception:", err);
    // process.exit(1);
  });

var aaa = 3 / 0;
console.log(aaa);
throw "uncaughted exception";
// xxx won't be printed.
console.log("xxx");
rejectedPromise();
