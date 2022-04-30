# Joke rest api

## [See the API in use here](https://konstanenonen.github.io/joke-frontend)

Joke rest api is as it says a rest api. You can get, update and delete jokes from Mongodb database with this api. This application uses the express library for routing and mongoose library for database functions.

## Routes
### [https://joke-rest-api.herokuapp.com/api/getall](https://joke-rest-api.herokuapp.com/api/getall)
Returns all of the jokes in the database.

### [https://joke-rest-api.herokuapp.com/api/get/:id](https://joke-rest-api.herokuapp.com/api/get/:id)
Return a joke with a specific id placed on the ":id" part of the route.

### [https://joke-rest-api.herokuapp.com/api/getall](https://joke-rest-api.herokuapp.com/api/getall)
Add a new joke to the database with this route. Takes three different variables from the request body: title, category and body.

### [https://joke-rest-api.herokuapp.com/update/:id](https://joke-rest-api.herokuapp.com/update/:id)
This route updates the joke with a specific id placed on ":id" part of the route

### [https://joke-rest-api.herokuapp.com/delete/:id](https://joke-rest-api.herokuapp.com/delete/:id)
This route deletes the joke with a specific id placed on ":id" part of the route