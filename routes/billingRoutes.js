const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require("../middlewares/requireLogin");

module.exports = app => {
  // requireLogin is a refrence of a function when the request comes in.
  // we can pass as many as middlewares we want.
  app.post("/api/stripe", requireLogin, async (req, res) => {
    // we need to move to common place that can affect anywhere.
    // if (!req.user) {
    //   return res.status(401).send({ error: "You must log in!" });
    // }

    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      description: "$5 for 5 credits",
      source: req.body.id
    });

    // the user is sent to request by the passport module.
    // the serializeUser and deserializeUser.
    req.user.credits += 5;
    req.user.save().then(user => res.send(user));
    // async way.
    // const user = await req.user.save();
    // res.send(user);
  });

  //2. another way using promise.
  // app.post("/api/stripe", (req, res) => {
  //   // console.log("req.body:", req.body);
  //   const promise = stripe.charges.create({
  //     amount: 500,
  //     currency: "usd",
  //     description: "$5 for 5 credits",
  //     source: req.body.id
  //   });
  //   promise.then(charge => {
  //     console.log("charge:", charge);
  //   });
  // });
};
