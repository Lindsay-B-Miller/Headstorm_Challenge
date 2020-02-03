// Dependencies
// =============================================================
// var connection = require("../config/connection.js");

// Database configuration
// Save the URL of our database as well as the name of our collection
var databaseUrl = "users";
var collections = ["users"];
var mongojs = require("mongojs");


// Use mongojs to hook the database to the db variable
var db = mongojs(databaseUrl, collections);

// This makes sure that any errors are logged if mongodb runs into an issue
db.on("error", function (error) {
    console.log("Database Error:", error);
});

let user = [];


module.exports = (app) => {

    // 1. At the root path, send a simple hello world message to the browser
    app.get("/", (req, res) => {
        res.send("Hello world");
    });

    // 2. At the "/all" path, display every entry in the animals collection
    app.get("/all", (req, res) => {
        // Query: In our database, go to the animals collection, then "find" everything
        db.users.find({}, function (err, found) {
            // Log any errors if the server encounters one
            if (err) {
                console.log(err);
            }
            // Otherwise, send the result of this query to the browser
            else {
                for (i = 0; i < found.length; i++) {
                    user.push(found[i])
                    // console.log(found[i].Record_ID)
                }
                // console.log(JSON.stringify(found))
                res.json(found);
                console.log(user)
            }
        });
    });
}