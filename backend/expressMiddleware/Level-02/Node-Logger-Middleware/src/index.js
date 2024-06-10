// import required modules
const express = require("express");
const fs = require("fs");
// import morgan
const morgan = require("morgan");

// create server
const server = express();
const port = 3000;

// use morgan on top of route handler
server.use(
  morgan((tokens, req, res) => {
    const date = new Date().toUTCString()
   
    return [
      tokens.method(req, res),
      tokens.status(req, res),
      tokens.res(req, res, "content-length"),
      tokens["response-time"](req, res) + " ms",
      date,
      tokens["http-version"](req, res),
      tokens.url(req, res),
    ].join(" ");
  }, {
    stream : fs.createWriteStream('./src/access.log', {flags: 'a'})
  })
);

server.get("/", (req, res) => {
  res.status(200).send({ message: "welcome to server" });
});

server.get("/get-users", (req, res) => {
  res.status(200).send({ message: "here is the list of all users" });
});

server.post("/add-user", (req, res) => {
  res.status(201).send({ message: "user added successfully" });
});

server.put("/user/:id", (req, res) => {
  const { id } = req.params;

  res.status(201).send({
    "message": `user ${id} updated successfylly`
    }
    );
});

server.delete("/user/:id", (req, res) => {
  const { id } = req.params;
  res.send({
    "message": `user ${id} deleted successfylly`
    }
    );
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// export the server

module.exports = server;