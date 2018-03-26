module.exports = app => {
  app.get("/test", (req, res) => {
    res.send({
      Hello: "Node Js"
    });
  });

  app.get("/except", (req, res) => {
    // res.send("exception");
    throw "made exception";
  });
};
