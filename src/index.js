import express from "express"
import dotenv from "dotenv"

// we have to import the dotenv where ever we have our main file which is used to run the server
dotenv.config({
    path: "./.env"
})

const app = express()

const port  = 8000

app.get("/", (req, res) => {
    res.send("Hello express js")
})

app.get("/instagram", (req, res) => {
    res.send("$$$$ Enjoying Instagram $$$$")
})

app.listen(port, () => {
    console.log(`Server running on the port ${port}`);
})

