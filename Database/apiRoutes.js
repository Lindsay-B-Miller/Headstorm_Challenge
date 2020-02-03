// Dependencies
// =============================================================
// var connection = require("./config/connection");

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

                // For proper logging of scripts in console. If program used to insert into SQL database, VALUES (?,?,?,?) would be used to avoid SQL injectionss
                for (i = 0; i < user.length; i++) {
                    console.log("INSERT INTO contact (Record_ID, Name, Cell_Phone, Work_Phone, Email, Address) VALUES (" + user[i].Record_ID + ", " + user[i].Name + ", " + user[i].Cell_Phone + ", " + user[i].Work_Phone + ", " + user[i].Email + ", " + user[i].Address + ")");
                    console.log("INSERT INTO widget (Record_ID, Basic_Widget_Order, Advanced_Widget_Order, Protection_Plan) VALUES (" + user[i].Record_ID + ", " + user[i].Basic_Widget_Order + ", " + user[i].Advanced_Widget_Order + ", " + user[i].Protection_Plan + ")")
                }
            }
        });
    });


}