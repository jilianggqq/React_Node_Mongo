const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

function createNewUser(profile, done) {
  // console.log("profile: ", profile);
  var user = new User();
  user.googleId = profile.id;
  user.displayName = profile.displayName;
  user.email = profile.emails[0].value;
  user.save().then(user => done(null, user));
}

// put identified in cookie.
// we are using passport to help us manage the cookie. So we don't need to do that manually.
passport.serializeUser((user, done) => {
  // why do we use id but not profile id?
  // we maybe use oauth from different web sites like Facebook, LinkedIn.
  done(null, user.id);
});

// get id from cookie.
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

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
      // console.log("access Token: ", accessToken);
      // console.log("refresh Token: ", refreshToken);
      let filter = { googleId: profile.id };
      // promise
      User.findOne(filter).then(existingUser => {
        if (existingUser) {
          // we alreay have a record with the given profile id.
          console.log("existingUser : ", existingUser);
          // first parameter is error.
          done(null, existingUser);
        } else {
          // we don't have a user record with given id, make a new record.
          console.log("createNewUser : ", profile.id + " : " + profile.displayName);
          createNewUser(profile, done);
        }
      });
    }
  )
);
