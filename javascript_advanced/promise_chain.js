Promise.resolve(1)
  .then(x => x + 1)
  .then(x => {
    throw x;
  })
  .then(x => {
    console.log("correct", x + 1);
  })
  .catch(err => console.log("error", err));
