// PORT
process.env.PORT = process.env.PORT || 3000;

// ENTORNO
process.env.NODE_ENV = process.env.NODE_ENV || "dev";

// BD
let urlDB;

// if (process.env.NODE_ENV === "dev") {
//   urlDB = "mongodb://localhost:27017/coffe";
// } else {
urlDB = "mongodb://admin:admin1@ds135689.mlab.com:35689/coffee";
// }
process.env.URLDB = urlDB;
