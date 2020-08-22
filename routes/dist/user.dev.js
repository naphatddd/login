"use strict";

var express = require('express');

var router = express.Router();
router.get('/login', function (req, res) {
  res.send('Login');
});
router.get('/register', function (req, res) {
  res.send('Register');
});
module.exports = router;