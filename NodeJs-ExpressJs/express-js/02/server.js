// const express = require("express");
// const server = express();

// // create a custom express json middleware

// const jsonMiddleware = (req,res,next)=>{
//     if(req.headers["content-type"] == "application/json"){
//         let data = "";
//         req.on("data", (chunk)=>{
//             data += chunk;
//         })
//         req.on("end", ()=>{
//             try {
//                 req.body = JSON.parse(data);
//             } catch (error) {
//                 return res.status(400).send("Invalid JSON");
//             }
//             next();
//         })
//     }else{
//         next();
//     }
// }


// server.post("/add-data",jsonMiddleware, (req,res)=>{
//     console.log(req.body);
//     res.send("Data added successfully");
// })

// server.listen(8080, ()=>{
//     console.log("server is running on port 8080");
// })


// create a custom express middleware for college


// const express = require("express");
// const server = express();

// //  didn't added the setHeader method to the client before sending the response
// const collegeMiddleware = (req,res,next)=>{
//     const idCard = false;
//     if(!idCard){
//     res.status(200).json({
//         message: "from college middleware",
//     })}
//     else{
//     next();
//     }
// }
// // const schoolMiddleware = (req,res,next)=>{
// //     const idCard = false;
// //     if(!idCard){
// //     res.status(200).json({
// //         message: "from school middleware",
// //     })}
// //     else{
// //     next();
// //     }
// // }


// server.get("/college",collegeMiddleware, (req,res)=>{
//     res.send("This is the college page")
//     console.log("This is the college page");
// })

// server.get("/school",schoolMiddleware, (req,res)=>{
//     res.send("This is the school page")
//     console.log("This is the school page");
// })

// server.get("/about", (req,res)=>{
//     res.send("This is the about page")
// })

// server.listen(8080, ()=>{
//     console.log("server is running on port 8080")
// })