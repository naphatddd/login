"use strict";

var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  dtae: {
    type: Date,
    "default": Date.now
  }
});
var User = mongoose.model("users", UserSchema);
module.exports = User;