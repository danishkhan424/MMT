const fs = require("fs");

// make the validator function and export it.
function validatorfunction(req, res, next) {
    const body = req.body;
    if(body.ID === undefined || body.Name === undefined || body.Rating === undefined || body.Description === undefined || body.Genre === undefined || body.Cast === undefined){
        return res.status(400).send("invalid request body.");
    }
    if(typeof body.ID === "number" && typeof body.Name === "string" && !/\d/.test(req.body.Name) && typeof body.Rating === "number" && typeof body.Description === "string" && typeof body.Genre === "string" && Array.isArray(body.Cast) && body.Cast.every((cast) => typeof cast === "string")){
        fs.appendFileSync("res.txt", "\nID is a number")
        fs.appendFileSync("res.txt", "\nName is a string")
        fs.appendFileSync("res.txt", "\nDescription is a string")
        fs.appendFileSync("res.txt", "\nRating is a number")
        fs.appendFileSync("res.txt", "\nGenre is a string")
        fs.appendFileSync("res.txt", "\nCast is a array of string")
        next();
    }
    else{
       fs.appendFileSync("res.txt", "\nbad request.some data is incorrect.");
        res.status(400).send("bad request.some data is incorrect.");
    }
}

module.exports = validatorfunction;
