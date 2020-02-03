// Dependencies
var express = require("express");
// var mongojs = require("mongojs");

// Initialize Express
var app = express();

// // Database configuration
// // Save the URL of our database as well as the name of our collection
// var databaseUrl = "users";
// var collections = ["users"];

// // Use mongojs to hook the database to the db variable
// var db = mongojs(databaseUrl, collections);

// // This makes sure that any errors are logged if mongodb runs into an issue
// db.on("error", function (error) {
//     console.log("Database Error:", error);
// });

// Routes
// =============================================================
require("./apiRoutes")(app);


// Set the app to listen on port 3000
app.listen(3000, function () {
    console.log("App running on port 3000!");
});
