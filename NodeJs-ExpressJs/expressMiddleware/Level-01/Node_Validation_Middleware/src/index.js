//  import required modules from nodejs and build the server

const express = require("express");
const server = express();
const validatorfunction = require("./middlewares/validator");
const port = 8080;


server.use(express.json());

server.post("/",validatorfunction,(req,res)=>{
    res.send("data received")
})
// export the server

server.listen(port, ()=>{
    console.log("server is running on port " + port);
})

module.exports = server;
