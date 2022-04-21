////// Express setup //////
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
////// Express setup end //////

////// Mongoose setup //////
const mongoose = require("mongoose");
// Connectiong to database
const uri = "mongodb+srv://konsta:AhKzDSMgURg0JGqR@cluster0.ezw9u.mongodb.net/jokes_db?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// Defining Joke Schema
const Joke = mongoose.model(
  "Joke",
  {
    title: String,
    category: String,
    body: String,
  },
  "jokes"  // Defining that Schema should only be used with this collection
);
////// Mongoose setup end //////

// Making api routes
// Get all jokes
app.get("/api/getall", (request, response) => {
  Joke.find({}, (err, results) => {
    if (err) {
      response.json("System failure", 500);
    }

    response.json(results, 200);
  });
});

// Get one joke based on id
app.get("/api/get/:id", (request, response) => {
  response.send(`Got joke: ${request.body.title} with id ${request.params.id}`);
});

// Add one joke
app.post("/api/add", (request, response) => {
  const newJoke = new Joke({
    title: request.body.title,
    category: request.body.category,
    body: request.body.body,
  });

  newJoke.save((err, result) => {
    if (err) {
      response.json("System failure", 500);
    }

    console.log(`Saved joke: ${Joke}`);
  });
});

// Updating a joke based on id
app.put("/api/update/:id", (request, response) => {
  response.send(`Updating joke with id: ${request.params.id}`);
});

// Deleting a joke based on id
app.delete("/api/delete/:id", (request, response) => {
  const id = request.params.id;

  Joke.findByIdAndDelete(id, (err, results) => {
    if (err) {
      response.json("System failure", 500);
    } else if (results === null) {
      response.json("Nothing to delete with given id", 200);
    } else {
      response.json(`Deleted the Joke with id ${id} and title ${results.title}`, 200);
    }
  });
});

app.listen(3001, () => {
  console.log("Listening to port 3001");
});