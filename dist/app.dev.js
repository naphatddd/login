"use strict";

var express = require('express');

var expressLayouts = require('express-ejs-layouts');

var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://naphat:naphat1@demo-ufvxg.mongodb.net/shopapi?retryWrites=true&w=majority', {
  useCreateIndex: true,
  useUnifiedTopology: true,
  useNewUrlParser: true
});
var app = express(); // EJS

app.use(expressLayouts);
app.set('view engine', 'ejs');
app.use(express.urlencoded({
  extended: false
})); // Routes

app.use('/', require('./routes/index.js'));
app.use('/users', require('./routes/users.js'));
var PORT = process.env.PORT || 5000;
app.listen(PORT, console.log("Server started on port ".concat(PORT)));