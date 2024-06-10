const fs = require("fs");
const express = require("express");
const port = 8080
const server = express();
server.use(express.json());

//****************** get requests *********************


server.get("/" , (req,res)=> {
    res.send("Hello this is homePage")
})
server.get("/profile", (req,res)=> {
    res.send("Hello this is profilePage")
})
    
server.get("/about", (req,res)=> {
    res.send("Hello this is aboutPage")
})
    
server.get("/contact", (req,res)=> {
    res.send("Hello this is contactPage")
})
    
server.get("/login", (req,res)=> {
    res.send("Hello this is loginPage")
})

//****************** post requests *********************

server.post("/adddata", (req,res)=> {
    fs.appendFileSync("./test.txt", `\n${JSON.stringify(req.body)},`);
    const data = fs.readFileSync("./test.txt", "utf8");
    console.log(data);
    res.send("data added successfully");
})

server.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
})