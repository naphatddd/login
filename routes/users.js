const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  res.render("Login");
});
router.get("/register", (req, res) => {
  res.render("Register");
});

router.post("/register", (req, res) => {
  const { name, email, password, password2 } = req.body;
  let error = []
});

module.exports = router;
