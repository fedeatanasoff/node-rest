// PORT
process.env.PORT = process.env.PORT || 3000;

// ENTORNO
process.env.NODE_ENV = process.env.NODE_ENV || "dev";

// BD
let urlDB;

// if (process.env.NODE_ENV === "dev") {
//   urlDB = "mongodb://localhost:27017/coffe";
// } else {
urlDB = "mongodb://admin:admin1@ds023042.mlab.com:23042/coffeeok";
// }
process.env.URLDB = urlDB;
