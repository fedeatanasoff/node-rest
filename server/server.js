require("./config");
const express = require("express");
const mongoose = require("mongoose");
const colors = require("colors");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(require("./routes/usuario"));

mongoose.connect(
  "mongodb://localhost:27017/cafe",
  { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false },
  (err, res) => {
    if (err) throw err;

    console.log("Conexion a la BD establecida".bold.green);
  }
);

app.listen(process.env.PORT, () =>
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`.bold.green)
);
