const fs = require("fs");

const addTodoMiddleware = (req, res, next) => {
    let todos = JSON.parse(fs.readFileSync("./db.json")).todos;
    if(req.body === undefined){
        req.body = {};
    }
    if(req.body.id || !req.body.id){
        req.body.id = todos.length + 1;
    }
    if(!req.body.title){
        req.body.title = "Untitled";
    }
    if(!req.body.completed){
        req.body.completed = false;
    }
    next()
};

module.exports = addTodoMiddleware;