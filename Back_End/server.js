const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Variable for post route to fill
let data = {
    values: []
};

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.post("/data", (req, res) => {
    let newValues = req.body.values

    // Checking for 500 and checking for numerical values
    if (newValues.length === 500 && !newValues.some(isNaN)) {
        data.values.push(newValues);
        res.send(newValues);
    }
    // Else return error
    else {
        res.status(400)
        res.send("Please submit exactly 500 numerical values")
    }
});

// GET and sort submitted values
app.get("/data", (req, res) => {
    let sorted = data.values[0].sort(function (a, b) { return a - b })
    res.send(sorted)
})


// Starting server listening
app.listen(PORT, () => {
    console.log("Listening at http://localhost:" + PORT)
})