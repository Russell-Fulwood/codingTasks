import express from "express";
import cors from "cors";
import 'dotenv/config';  // ES6 required to  install dotenv module to use .env vars
// or import dotenv from 'dotenv'
// dotenv.config()

// Create an instance of the express server
const app = express();

// app.use(express.json());

// Define the port number for the server
const PORT = process.env.PORT || 3000;
console.log(process.env.PORT);

// Enable Cross-Origin Resource Sharing
app.use(cors());


// Define the route to retrieve the message
app.get("/api/data", (req, res) => {
    const data = {message: "Hello from the back end!"};
    res.json(data); // Send data as a response
    console.log(data);
});


app.get('/api/message/:message', (req, res) => {
    const showMessage = req.params.message
    const data = {message: showMessage};
    res.json(data); // message returned as a json object
    console.log(data);
});


// Displaying the requested URL for each request
app.use((req, res, next) => {
    console.log(`Request URL: ${req.url}`);
    next();
});

    
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
   
});