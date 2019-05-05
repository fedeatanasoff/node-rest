const express = require("express");
const bcrypt = require("bcrypt");
const _ = require("underscore");
const app = express();
const Usuario = require("../models/Usuario");

app.get("/", (req, res) => {
  res.json({ message: "hello friend desde usuario" });
});

app.post("/usuario", (req, res) => {
  let { nombre, email, password, role } = req.body;

  let user = new Usuario({
    nombre,
    email,
    password: bcrypt.hashSync(password, 10),
    role: role === "" ? (role = undefined) : role
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

app.put("/usuario/:id", (req, res) => {
  const id = req.params.id;
  const body = _.pick(req.body, ["nombre", "email", "img", "role", "estado"]);

  Usuario.findOneAndUpdate(
    id,
    body,
    { new: true, useFindAndModify: false },
    (err, usuarioDB) => {
      if (err) {
        return res.status(400).json({
          ok: false,
          err
        });
      }

      res.json({
        ok: true,
        usuario: usuarioDB
      });
    }
  );
});

module.exports = app;
