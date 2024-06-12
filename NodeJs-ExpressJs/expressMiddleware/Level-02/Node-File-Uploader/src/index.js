// import required modules
const express = require("express");
const multer = require("multer");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});
const upload = multer({ storage: storage });
const server = express();
const port = 3000;

server.get("/", (req, res) => {
    res.status(200).send({
        message: "welcome to server"
    })
})

// use upload middleware
server.post("/upload", upload.single("avatar"), (req, res) => {
    res.status(200).send({ message: "file uploaded successfully" });
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// export the server
// eg.module.exports = app;

module.exports = server;
