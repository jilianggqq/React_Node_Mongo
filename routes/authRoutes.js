const passport = require("passport");

// when we require this file, it will return a function with the parameter app.
// what the require results is really module.exports.
module.exports = app => {
  // they are attemping to turn that code into an actual profile.
  // passport.authenticate("google") is middleware.
  // it is a function that takes the incoming request. it do the further authenticate and takes the code out of the url.
  // it costs the callback in the google strategy.
  app.get("/auth/google/callback", passport.authenticate("google"), (req, res) => {
    res.redirect("/surveys");
  });

  // oauth flow was entirely managed by passport.
  // use the string google to find strategy(GoogleStrategy)
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get("/api/logout", (req, res) => {
    req.logout();
    // res.send(req.user);
    res.redirect("/");
  });

  app.get("/api/current_user", (req, res) => {
    console.log("req.session:", req.session);
    // console.log(req);
    res.send(req.user);
  });
};
