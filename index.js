// import express from 'express'
// using as Reactjs 2015 modules
const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./config/keys");

// generate a new application running as apps
const app = express();

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

// route finalhandler
// app.get("/", (req, res) => {
//   res.send({
//     Hello: "node js"
//   });
// });

// the running time underlying environment where node js runs on top of.
// if the app is running in local, process.env.PORT === undefined.
const PORT = process.env.PORT || 5000;

app.listen(PORT);
console.log("app is running in poat " + PORT);
