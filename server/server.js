import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv"

const db = new pg.Pool({
  connectionString: process.env.DB_CONN_STRING
})

const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON data

// GET root route for testing
app.get("/", function (request, response) {
  response.json("You are looking at my root route.");
});

// POST /message route
app.post("/message", function (request, response) {
  const username = request.body.username;
  const message = request.body.message;

  console.log("Received from client:", username, message);
  
  response.json({ status: "Message received!", username, message });
});

// Start server
app.listen(8080, function () {
  console.log("App is running on port 8080");
});
