process
  .on("unhandledRejection", (reason, p) => {
    console.error(reason, "Unhandled Rejection at Promise", p);
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
