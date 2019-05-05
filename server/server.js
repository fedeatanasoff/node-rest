require("./config");
const express = require("express");
const mongoose = require("mongoose");
const colors = require("colors");
const app = express();

app.use(require("./routes/usuario"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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
