const jsonServer = require('json-server');
const server = jsonServer.default();
const router = jsonServer.router('db.json');

server.use(jsonServer.bodyParser);
server.use(router);

server.listen(3000, () => {
  console.log('JSON Server is running on port 3000');
});