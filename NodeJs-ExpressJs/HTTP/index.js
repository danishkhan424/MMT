const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
    if (req.url == "/profile") {
        res.setHeader("Content-Type", "text/html")
        res.write("<h1>Hello world</h1>")
        res.end(); // Directly send data and end the response
    }else if(req.url == "/userdata"){
            res.setHeader("Content-Type", "text/html")
            res.write("<h1>this is user's data</h1>")
            res.end(); // Directly send data and end the response
    }
     else {
        // Handle other routes or send a default response
        res.statusCode = 404;
        res.end("Not Found");
    }
});

server.listen(port, () => {
    console.log("server is running on port " + port);
}); 






// console.log("hii")

// var http = require('http');
// var fs = require('fs');
// http.createServer(function (req, res) {
//     fs.writeFile('data.txt', 'Hello content!', function (err) {
//         if (err) throw err;
//         console.log('Saved!');
//         res.end()
//       });
// }).listen(8080);
// console.log("bye")
