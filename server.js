// ---- DEPENDENCIES ----- //
var express = require('express');

// Sets up the Express App
var app = express();

// port for Heroku (production environment) or 3000 for localhost
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing (middleware functions)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routing files
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Starts the server and listens for the user interactions
app.listen(PORT, function(){
    console.log("Listening on http://localhost:" + PORT);
});