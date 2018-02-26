const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

// 1. traditional way
// module.exports = app => {
//   app.post("/api/stripe", (req, res) => {
//     console.log("req.body:", req.body);
//     stripe.charges
//       .create({
//         amount: 500,
//         currency: "usd",
//         source: req.body.id,
//         description: "$ 5 for buying credits"
//       })
//       .then(charge => {
//         console.log("charge", charge);
//         req.user.credits += 5;
//         req.user.save().then(user => {
//           console.log("return user:", user);
//           res.send(user);
//         });
//       });
//   });
// };

// 2. ES6 way.
module.exports = app => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      source: req.body.id,
      description: '5 for 5 credits'
    });
    req.user.credits += 5;
    const user = await req.user.save();
    res.send(user);
  });
};
