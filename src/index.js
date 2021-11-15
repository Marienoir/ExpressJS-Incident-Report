const express = require('express')
const route = require('./route')
const db = require('./db')

const app = express()
const port = 4000

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.get("/", (req, res) => {
    res.status(200).json({
        status: "Success",
        code: 200,
        message: "Welcome to Incident Report"
    })
})
app.use(route)

//ERROR HANDLING
app.use((req, res) => {
    res.status(404).json({
        status: "Not Found",
    })
})
app.use((err, req, res, next) => {
    res.send(err.message)
})

db.connect()
    .then((obj) => {
        app.listen(port, () => {
            console.log(`Starting on port ${port}`);
        });
    })
    .catch((error) => {
        console.log(error.message);
    });

module.exports = app