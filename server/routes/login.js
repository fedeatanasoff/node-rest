const express = require("express");
const bcrypt = require("bcrypt");
const _ = require("underscore");
const app = express();
const Usuario = require("../models/Usuario");

app.post("/login", (req, res) => {
  res.json({
    ok: true
  });
});

module.exports = app;
