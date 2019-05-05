require("./config");
const express = require("express");
const mongoose = require("mongoose");
const colors = require("colors");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "hello friend" });
});

app.post("/", (req, res) => {
  let body = req.body;

  if (!body.nombre) {
    res.status(400).json({ ok: false, message: "nombre requerido" });
  } else {
    res.json({ ok: true, data: body });
  }
});

mongoose.connect(
  "mongodb://localhost:27017/cafe",
  { useNewUrlParser: true },
  (err, res) => {
    if (err) throw err;

    console.log("Conexion a la base de datos establecida".bold.green);
  }
);

app.listen(process.env.PORT, () =>
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`.bold.green)
);
