var db = require("../models/app");
const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/login.html'));
});

router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/login.html'));
});

router.get('/create-account', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/createAccount.html'));
});

router.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, '../views/404.html'));
});

module.exports = router;