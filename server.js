// JSON Server module
const jsonServer = require("json-server");
const cors = require('cors');
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
server.use(cors());
server.use(middlewares);
// server.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     next();
//   });
server.use(router);
// Listen to port
server.listen(3000, () => {
 console.log("JSON Server is running");
});

// Export the Server API
module.exports = server;