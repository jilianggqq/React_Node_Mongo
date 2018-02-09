// import express from 'express'
// using as Reactjs 2015 modules
const express = require("express");
const mongoose = require("mongoose");
// give us access to cookies
const cookieSession = require("cookie-session");
// tell passport to make use of them.
const passport = require("passport");
const keys = require("./config/keys");
// we are not assigning anything to it. just use require
require("./models/User");
require("./services/passport");

// test database connection
mongoose.connect(keys.mongoURI);

// generate a new application running as apps
const app = express();

// middleware inside our application.
// middleware is doing some preprocessing of the incoming requests before they are sent off to different route handlers.
// steps before go to route.
// 1. cookieSession library extracts cookie data, then assign it to req.session.
// 2. passport library pulls user id out of the cookie data.
// 3. calling deserializeUser function. turning userid into User.
// 4. add user model into req.
app.use(
  cookieSession({
    // expire time.
    maxAge: 24 * 60 * 60 * 1000,
    // keys for encription.
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

// 1. test routes
require("./routes/testRoutes")(app);

// 2. auth routes
require("./routes/authRoutes")(app);

// the running time underlying environment where node js runs on top of.
// if the app is running in local, process.env.PORT === undefined.
const PORT = process.env.PORT || 5000;

app.listen(PORT);
console.log("app is running in poat " + PORT);
