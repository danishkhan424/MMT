const fs = require("fs");
const express = require("express");
const app = express();
const port = 8080;
const addTodoMiddleware = require("./addTodoMiddleware");

app.use(express.json());

app.get("/todos", (req,res)=>{
    try {
        const data = fs.readFileSync("./db.json");
        res.status(200).send(JSON.parse(data))

    } catch (error) {
        res.status(500).send(`Internal server error ${error}`)
    }
})
app.post("/add-todo", addTodoMiddleware, (req,res)=>{
    try {
        const data = fs.readFileSync("./db.json");
        const todos = JSON.parse(data).todos;
        todos.push(req.body);
        fs.writeFileSync("db.json", JSON.stringify({todos}))
        res.status(200).send("Todo added successfully")
    } catch (error) {
        res.status(500).send(`Internal server error ${error}`)
    }
})
app.put("/update-todo", (req,res)=>{
    try {
        const todos = JSON.parse(fs.readFileSync("./db.json")).todos;
        let updated = false;
        todos.forEach((todo)=>{
            if(todo.id % 2 == 0 && todo.completed == false){
                todo.completed = true;
                updated = true;               
            }}
        )
        if(updated){
            fs.writeFileSync("db.json", JSON.stringify({todos}))
            res.status(200).send("Todo updated successfully")
        }else{
            res.status(404).send("Todo not found")
        }
            
    } catch (error) {
        res.status(500).send(`Internal server error ${error}`)
    }    
})
app.delete("/delete-todo", (req,res)=>{
    try {
        const todos = JSON.parse(fs.readFileSync("./db.json")).todos;
        let deleted = false;
        if(todos.length > 1){
        const deletedTodods = todos.filter(todo=> todo.completed !== true )
        deleted = true;
        fs.writeFileSync("db.json", JSON.stringify({todos:deletedTodods}))
        res.status(200).send("Todo deleted successfully")
    }else{
        res.status(404).send("Todo not found")
    }} catch (error) {
        res.status(500).send(`Internal server error ${error}`)
    }
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})