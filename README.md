# Joke rest api

## [See the API in action here](https://konstanenonen.github.io/joke-frontend)

Joke rest api is as it says a rest api. You can get update and delete jokes from Mongodb with this api. The rest api uses the express library for routing and mongoose library for database functions.

## Routes
### [See the API in action here](https://joke-rest-api.herokuapp.com/api/getall)
Returns all of the jokes in the database.

### [See the API in action here](https://joke-rest-api.herokuapp.com/api/get/:id)
Return a joke with a specific id placed on the ":id" part of the route.

### [See the API in action here](https://joke-rest-api.herokuapp.com/api/getall)
Add a new joke to the database with this route. Takes three different variables from the request body: title, category and body.

### [See the API in action here](https://joke-rest-api.herokuapp.com/update/:id)
This route updates the joke with a specific id placed on ":id" part of the route

### [See the API in action here](https://joke-rest-api.herokuapp.com/delete/:id)
This route deletes the joke with a specific id placed on ":id" part of the route