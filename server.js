const express = require("express")
const data = require("./database.js")

const server = express()

server.get("/", (req, res) => {
    const users = data.getUsers()
    res.json(users)
})

server.get("/users/:id", (req, res) => {
    // the param is a variable matches up to the name of the URL param above
    const user = data.getUserById(req.params.id)

    if (user) {
        res.json(user)
    } else {
        res.status(404).json({
            message: "user not found"
        })
    }
})

// web servers need to be continuously listening for incoming messages
server.listen(5000, () => {
    console.log("server started on port 5000")
})