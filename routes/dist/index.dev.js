"use strict";

var express = require('express');

var router = express.Router(); // Welcome Page

router.get("/", function (req, res) {
  return res.render("welcome");
});
module.exports = router;