"use strict";

var express = require("express");

var router = express.Router();
router.get("/login", function (req, res) {
  res.render("Login");
});
router.get("/register", function (req, res) {
  res.render("Register");
});
router.post("/register", function (req, res) {
  var _req$body = req.body,
      name = _req$body.name,
      email = _req$body.email,
      password = _req$body.password,
      password2 = _req$body.password2;
  var error = [];
});
module.exports = router;