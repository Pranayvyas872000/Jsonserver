const express = require('express');
const cors = require('cors');
const jsonServer = require('json-server');

const app = express();

// Configure CORS to allow requests from your frontend origin
const corsOptions = {
    origin: '*', // Replace with your frontend origin
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

// ... rest of your JSON Server configuration

const router = jsonServer.router('db.json');
app.use('/(.*)', router); // Use a prefix for API routes

const port =  3000;
app.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`);
});