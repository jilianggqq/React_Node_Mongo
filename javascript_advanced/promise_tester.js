const promiseProvider = require("./promise_provider");
var Q = require("q");
async function main() {
  const url = "https://api.github.com/users/jilianggqq";

  const initPromise = promiseProvider.provider(url);

  // initPromise
  //   .then(res => {
  //     // console.log("promise resolved:", res);
  //     // 1. we can return another promise here.
  //     return promiseProvider.provider(res.followers_url);
  //   })
  //   .then(res => {
  //     // get data from previous promise.
  //     console.log("the followeres of jilianggqq:", res);
  //   })
  //   .catch(err => {
  //     console.log("promise rejected:", err);
  //   });

  // 2. using await keyword.
  // const data = await promiseProvider.awaitWay(url);
  // console.log("await wat data:", data);

  // 3. using Q
  // promiseProvider
  //   .qprovider(url)
  //   .then(res => {
  //     let d = Q.defer();
  //     d.resolve(res.followers_url);
  //     return d.promise;
  //   })
  //   .then(res => promiseProvider.qprovider(res))
  //   .then(res => console.log(res))
  //   .fail(err => console.log(err));

  initPromise
    .then(res => {
      // console.log("promise resolved:", res);
      // 1. we can return another promise here.
      return res.followers_url;
    })
    .then(res => {
      // get data from previous promise.
      console.log("the followeres url:", res);
      let resArr = [];
      resArr.push("jilianggqq");
      resArr.push(res);
      return resArr;
    })
    .then(arr => console.log(arr.join(", ")))
    .catch(err => {
      console.log("promise rejected:", err);
    });
}

main();
