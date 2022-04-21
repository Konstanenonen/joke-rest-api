// Express setup
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Express setup end

// Get all jokes
app.get("api/getall", (request, response) => {
  response.send("Print all jokes.");
});