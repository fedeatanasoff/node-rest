require("./config");
const express = require("express");
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

app.listen(process.env.PORT, () =>
  console.log(`corriendo en puerto ${process.env.PORT}`)
);
