const express = require("express")
const app = express();

app.get("/hello", (req, res) => {
    res.send("Hello World from Micro Service!")
})

app.listen(9000, () => {
    console.log("Hello Wrold ms deployed at port 9000")
})