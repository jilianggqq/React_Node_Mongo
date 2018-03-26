var message = "";

var printResult = results => {
  console.log("Results = ", results, "message = ", message);
};

var promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    message += "my";
    resolve(message);
  }, 2000);
});

var promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    message += " first";
    resolve(message);
  }, 2000);
});

var promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    message += " promise";
    resolve(message);
  }, 2000);
});

// 3. a test for promiseAll

// When the code runs, these promises will be executed immediatelly. After promise1, message is my, promise2, message is my first ...
// in then method, will print every result of this promise.
Promise.all([promise3, promise2, promise1]).then(printResult);
Promise.all([promise1, promise2, promise3]).then(printResult);
