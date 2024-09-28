const express = require('express');
const cors = require('cors');
const jsonServer = require('json-server');
const path = require('path'); // for serving static files (optional)

const app = express();

// Configure CORS to allow requests from your frontend origin
const corsOptions = {
  origin: 'https://systango-task.vercel.app', // Replace with your frontend origin
  optionsSuccessStatus: 200, // Required for preflight requests
}

app.use(cors(corsOptions));

// Configure JSON Server middleware
const router = jsonServer.router('db.json'); // Replace 'db.json' with your data file path
const middlewares = jsonServer.defaults(); // Load default middlewares

app.db = jsonServer.createDb('db.json'); // Optional: Load your data into memory (faster)

// API endpoints (using JSON Server router)
app.use(router);

// Serve static files from a public directory (optional)
app.use(express.static(path.join(__dirname, 'public'))); // Replace with your public directory path

// Start the server
app.listen(3000, () => {
  console.log('JSON Server is running on port 3000');
});