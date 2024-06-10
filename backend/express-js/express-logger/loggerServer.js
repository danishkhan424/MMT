const fs = require("fs");
const express = require("express");
const server = express();
const loggerMiddleware = require("./middlewares/logger");

server.use(loggerMiddleware);

server.get("/", (req,res)=>{
    res.send("This is the home page")
})

server.get("/profile", (req,res)=>{
    res.send("This is the profile page")
})
server.get("/about", (req,res)=>{
    res.send("This is the about page")
})

server.get("/contact", (req,res)=>{
    res.send("This is the contact page")
})

server.get("/login", (req,res)=>{
    res.send("This is the login page")
})

server.post("/signup", (req,res)=>{
    res.send("This is the signup page")
})

server.listen(8080, ()=>{
    console.log("server is running on port 8080")
})