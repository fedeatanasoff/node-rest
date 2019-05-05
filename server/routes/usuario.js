const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "hello friend desde usuario" });
});

app.post("/", (req, res) => {
  let body = req.body;

  if (!body.nombre) {
    res.status(400).json({ ok: false, message: "nombre requerido" });
  } else {
    res.json({ ok: true, data: body });
  }
});

module.exports = app;
