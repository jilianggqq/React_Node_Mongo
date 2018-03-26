// import express from 'express'
// using as Reactjs 2015 modules
const express = require("express");
const mongoose = require("mongoose");
// give us access to cookies
const cookieSession = require("cookie-session");
// tell passport to make use of them.
const passport = require("passport");
const keys = require("./config/keys");
const path = require("path");
const bodyParser = require("body-parser");
// we are not assigning anything to it. just use require
require("./models/User");
require("./services/passport");

// test database connection
mongoose.connect(keys.mongoURI);

// generate a new application running as apps
const app = express();
// it is necesscory. Otherwise you can not get the request body.
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());
app.use(bodyParser.text());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

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

app.use(passport.initialize());
app.use(passport.session());

// 1. test routes
require("./routes/testRoutes")(app);

// 2. auth routes
require("./routes/authRoutes")(app);

// Error handlers

// Since this is the last non-error-handling
// middleware use()d, we assume 404, as nothing else
// responded.

// $ curl http://localhost:5000/notfound
// $ curl http://localhost:5000/notfound -H "Accept: application/json"
// $ curl http://localhost:5000/notfound -H "Accept: text/plain"
app.use(function(req, res, next) {
  res.status(404);
  // res.send({ error: "Not found" });
  res.format({
    html: function() {
      res.render("404", { url: req.url });
    },
    json: function() {
      res.json({ error: "Not found" });
    },
    default: function() {
      res.type("txt").send("Not found");
    }
  });
});

// error-handling middleware, take the same form
// as regular middleware, however they require an
// arity of 4, aka the signature (err, req, res, next).
// when connect has an error, it will invoke ONLY error-handling
// middleware.

// If we were to next() here any remaining non-error-handling
// middleware would then be executed, or if we next(err) to
// continue passing the error, only error-handling middleware
// would remain being executed, however here
// we simply respond with an error page.

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// the running time underlying environment where node js runs on top of.
// if the app is running in local, process.env.PORT === undefined.
const PORT = process.env.PORT || 5000;
if (!module.parent) {
  app.listen(PORT);
  console.log("app is running in port " + PORT);
}
