// import express from 'express'
// using as Reactjs 2015 modules
const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

// generate a new application running as apps
const app = express();

//1. passport, I want you to aware there is a new strategy available.
// understand that users can use this to authenticate themselves inside our application.
// 2.create a new instance of GoogleStrategy.
passport.use(new GoogleStrategy());

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
