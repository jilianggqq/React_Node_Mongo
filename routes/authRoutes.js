const passport = require("passport");

// when we require this file, it will return a function with the parameter app.
// what the require results is really module.exports.
module.exports = app => {
  // they are attemping to turn that code into an actual profile.
  app.get("/auth/google/callback", passport.authenticate("google"));

  // oauth flow was entirely managed by passport.
  // use the string google to find strategy(GoogleStrategy)
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );
};
