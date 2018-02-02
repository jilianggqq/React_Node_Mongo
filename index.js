// import express from 'express'
// using as Reactjs 2015 modules
const express = require("express");

// generate a new application running as apps
const app = express();

// route finalhandler
app.get("/", (req, res) => {
  res.send({
    Hello: "world"
  });
});

// the running time underlying environment where node js runs on top of.
// if the app is running in local, process.env.PORT === undefined.
const PORT = process.env.PORT || 5000;

app.listen(PORT);
console.log("app is running in poat " + PORT);
