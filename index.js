// import express from 'express'
// using as Reactjs 2015 modules
const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
// we are not assigning anything to it. just use require
require("./models/User");
require("./services/passport");

// test database connection
mongoose.connect(keys.mongoURI);

// generate a new application running as apps
const app = express();

// 1. test routes
require("./routes/testRoutes")(app);

// 2. auth routes
require("./routes/authRoutes")(app);

// the running time underlying environment where node js runs on top of.
// if the app is running in local, process.env.PORT === undefined.
const PORT = process.env.PORT || 5000;

app.listen(PORT);
console.log("app is running in poat " + PORT);
