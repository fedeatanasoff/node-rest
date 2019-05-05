const express = require("express");
const bcrypt = require("bcrypt");
const _ = require("underscore");
const app = express();
const Usuario = require("../models/Usuario");

app.get("/usuario", (req, res) => {
  let desde = Number(req.query.desde) || 0;
  let limite = Number(req.query.limite) || 10;

  Usuario.find({}, "nombre email role estado google img")
    .skip(desde)
    .limit(limite)
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          ok: false,
          error: err
        });
      }

      Usuario.count({}, (err, cantidad) => {
        if (err) {
          return res.status(400).json({
            ok: false,
            error: err
          });
        }

        res.json({
          ok: true,
          total: cantidad,
          usuarios: data
        });
      });
    });
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
        error: err
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

  Usuario.findByIdAndUpdate(id, body, { new: true }, (err, usuarioDB) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        error: err
      });
    }

    res.json({
      ok: true,
      usuario: usuarioDB
    });
  });
});

app.delete("/usuario/:id", (req, res) => {
  const id = req.params.id;

  Usuario.findByIdAndRemove(id, (err, usuarioBorrado) => {
    if (err) {
      return res.status(400).json({ ok: false, error: err });
    }

    if (!usuarioBorrado) {
      return res.status(400).json({ ok: false, error: "el usuario no existe" });
    }

    res.json({ ok: true, usuario: usuarioBorrado });
  });
});

module.exports = app;
