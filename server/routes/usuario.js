const express = require("express");
const app = express();
const Usuario = require("../models/Usuario");

app.get("/", (req, res) => {
  res.json({ message: "hello friend desde usuario" });
});

app.post("/usuario", (req, res) => {
  let { nombre, email, password, role } = req.body;

  if (role === "") role = undefined;

  let user = new Usuario({
    nombre,
    email,
    password,
    role
  });

  user.save((err, data) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err
      });
    }

    res.json({
      ok: true,
      data: data
    });
  });
});

module.exports = app;
