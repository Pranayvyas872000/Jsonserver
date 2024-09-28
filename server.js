const express = require('express');
const cors = require('cors');
const jsonServer = require('json-server');

const app = express();

// Configure CORS to allow requests from your frontend origin
const corsOptions = {
  origin: '*', // Replace with your frontend origin
  optionsSuccessStatus: 200, // Required for preflight requests
}

app.use(cors(corsOptions));

// ... rest of your JSON Server configuration (data loading, routes etc.)

// Example data loading
const router = jsonServer.router('db.json');
app.use(router);

// Start the server
const port = process.env.PORT || 3000; // Use environment variable for port
app.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});