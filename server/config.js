// PORT
process.env.PORT = process.env.PORT || 3000;

// ENTORNO
process.env.NODE_ENV = process.env.NODE_ENV || "dev";

// BD
let urlDB;

if (process.env.NODE_ENV === "dev") {
  urlDB = "mongodb://localhost:27017/coffe";
} else {
  urlDB = process.env.MONGO_URL;
}
process.env.URLDB = urlDB;

/**
 * OBTENER PAYLOAD JWT
 * 
 * function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
};
 */
