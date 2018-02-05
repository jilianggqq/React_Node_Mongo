const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");

//1. passport, I want you to aware there is a new strategy available.
// understand that users can use this to authenticate themselves inside our application.
// 2.create a new instance of GoogleStrategy.
// 3. we have never explicitly said here is this google strategy and it is called like the string google.
// Hey, passport. when you load me up if anyone attemps to say authenticate with a string "google"
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      // the route that the user should be sent to after they grant grant permissions to our application.
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      // 1. tell google we could access its profile, using this token.
      console.log("access Token: ", accessToken);
      console.log("refresh Token: ", refreshToken);
      console.log("profile: ", profile);
    }
  )
);
