const promiseProvider = require("./promise_provider");
async function main() {
  const url = "https://api.github.com/users/narenaryan";
  console.log(promiseProvider);

  const initPromise = promiseProvider.provider(url);

  initPromise
    .then(res => {
      console.log("promise resolved:", res);
    })
    .catch(err => {
      console.log("promise rejected:", err);
    });

  const data = await promiseProvider.awaitWay(url);
  console.log("await wat data:", data);
}

main();
