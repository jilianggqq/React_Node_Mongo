const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
const { Schema } = mongoose;

// description of the schema
const userSchema = new Schema({
  googleId: String,
  displayName: String,
  email: String,
  credits: {
    type: Number,
    default: 0
  }
});

// first parameter is the name of collection.
// Second one is user schema
// if you are doing some tests. You may load this model n times.
// it will compain that you have loaded that before.
mongoose.model("users", userSchema);
