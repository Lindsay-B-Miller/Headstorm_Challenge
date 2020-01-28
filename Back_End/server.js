const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let data = {
    values: []
};

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.post("/data", (req, res) => {
    let newValues = req.body.values
    data.values.push(newValues);
    res.send(newValues);
});

app.get("/data", (req, res) => {
    let sorted = data.values[0].sort(function (a, b) { return a - b })
    res.send(sorted)
})


app.listen(PORT, () => {
    console.log("Listening at http://localhost:" + PORT)
})