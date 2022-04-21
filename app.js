// Express setup
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
// Express setup end


// Making api routes

// Get all jokes
app.get("/api/getall", (request, response) => {
  response.send("Print all jokes.");
});

// Get one joke based on id
app.get("/api/get/:id", (request, response) => {
  response.send(`Got joke: ${request.body.title} with id ${request.params.id}`);
});

// Add one joke
app.post("/api/add", (request, response) => {
  response.send(`Add joke: "${request.body.title}"`);
});

// Updating a joke based on id
app.put("api/update/:id", (request, response) => {
  response.send(`Updating joke with id: ${request.params.id}`);
});

// Deleting a joke based on id
app.delete("api/delete/:id", (request, response) => {
  response.send(`Deleting a joke with id: ${request.params.id}`);
});