const express = require('express');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const cors = require('cors');
const app = express();

// Configure CORS to allow requests from your frontend origin
const corsOptions = {
  origin: 'https://systango-task.vercel.app', // Replace with your frontend origin
  optionsSuccessStatus: 200, // Required for preflight requests
}

app.use(cors(corsOptions));


// server.use(
//     cors({
//         origin: true,
//         credentials: true,
//         preflightContinue: false,
//         methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     })
// );
server.options('*', cors());

server.use(middlewares);
server.use(router);
server.listen(3000, () => {
    console.log('JSON Server is running');
});
// Export the Server API
module.exports = server;