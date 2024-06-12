const fs = require("fs");
const loggerMiddleware = (req, res, next) => {
    let loggingData = `${req.method} requested at ${req.url} page on ${new Date()} \n`;
    console.log(loggingData);
    fs.appendFileSync("log.txt", loggingData)
    let startTime = new Date().getTime();
    next();
    let endTime = new Date().getTime();
    console.log(`Time taken by ${req.url} is ${endTime - startTime} ms`);
};
module.exports = loggerMiddleware