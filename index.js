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
const bodyParser = require("body-parser");

// middleware inside our application.
// middleware is doing some preprocessing of the incoming requests before they are sent off to different route handlers.
// steps before go to route.
// 1. cookieSession library extracts cookie data, then assign it to req.session property.
// 2. passport library pulls user id out of the cookie data. passport is not really looking at cookie. But looking it from req.session.
// In fact, the session.password.user === id in mongodb.
// 3. calling deserializeUser function. turning userid into User.
// 4. add user model into req.

// (1) cookie-session when we are using cookie session. we can say that cookie is the session. The cookie contains all the data related to the session.
// We decode the cookie then we can see the exact value inside the cookie is what is instored in the req.session.

// (2) express-session stores a refrence to the session. It will store a refrence to a session in cookie. Takes session id, look up all relavant info from a 'session store'.

// cookie-session stores all the session data, but express session just stores sessionid,
// when the request comes, it get data from session store using sessionid.

// mainly 3 parts.
// (1) (2) cookieSession vs express-session
app.use(
  cookieSession({
    // expire time.
    maxAge: 24 * 60 * 60 * 1000,
    // keys for encription.
    keys: [keys.cookieKey]
  })
);
// this is a middleware, it will parse the body and assign the data into res.body property.
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());
// also, we need to create the middleware with some very particular request handlers.

// 1. test routes
require("./routes/testRoutes")(app);

// 2. auth routes
require("./routes/authRoutes")(app);

// 3. for billing system.
require("./routes/billingRoutes")(app);

// the running time underlying environment where node js runs on top of.
// if the app is running in local, process.env.PORT === undefined.
const PORT = process.env.PORT || 5000;

app.listen(PORT);
console.log("app is running in port " + PORT);
