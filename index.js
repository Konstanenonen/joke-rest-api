////// Express setup //////
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cors());
////// Express setup end //////

////// configuring enviroment parameters //////
require('dotenv').config();
const uri = process.env.URI;
const PORT = process.env.PORT || 3001;
////// end of configuring enviroment parameters //////

////// Mongoose setup //////
const mongoose = require("mongoose");
// Connectiong to database
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
  const id = request.params.id;

  Joke.findById(id, (err, results) => {
    if (err) {
      response.json("System failure", 500);
    }

    response.json(results, 200);
  });
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

    response.json(`Saved joke: ${result}`, 200);
  });
});

// Updating a joke based on id
app.put("/api/update/:id", (request, response) => {
  const id = request.params.id;

  Joke.findById(id, (err, results) => {
    if (err) {
      response.json("System failure", 500);
    } else if (results === null) {
      response.json("Nothing to update with given id", 200);
    } else {
      results.title = request.body.title;
      results.category = request.body.category;
      results.body = request.body.body;
      results.save((err, result) => {
        if (err) {
          response.json("System failure", 500);
        }
      });
      response.json(`Updated the Joke with id ${id}`);
    }
  });
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

app.listen(PORT, () => {
  console.log("Listening to port 3001");
});