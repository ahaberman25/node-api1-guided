// import http
const http = require("http")

const server = http.createServer((req, res) => {
    // a status code of 200 means "success"
    res.statusCode = 200

    // tell the browser what were sending back
    res.setHeader("Content-Type", "text/html")

    // send back some content
    res.write("<h1>Hello, World</h1>")

    // send response back to browser
    res.end()
})

// web servers need to be continuously listening for incoming messages
server.listen(5000, () => {
    console.log("server started on port 5000")
})