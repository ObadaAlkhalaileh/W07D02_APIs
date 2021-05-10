//Q1
const express = require("express")
app = express()

port = 5000

app.use(express.json());
//Q2
const todos = [{ todo: " wake up", isCompleted: false }, { todo: "Eat Breakfast", isCompleted: false }];

//Q3
app.get("/todos", (req, res) => {
    res.status(200)
        //didnt work
        // todos.forEach((elem, i) => {
        //         res.json(elem.todo)
        //     })

    //didnt work
    // for (let i = 0; i < todos.length; i++) {

    //     res.json(todos[i].todo)
    // }
    res.json(todos)
})

//Q4
app.post("/create/todo", (req, res) => {

    const newTodo = { todo: req.body.todo, isCompleted: req.body.isCompleted };

    todos.push(newTodo);

    res.status(201);
    res.json(newTodo);

})

//Q5
app.put("/update/todo/:name", (req, res) => {
    const name = req.params.name

    let elem1 = {}

    const found = todos.find((elem, i) => {
        elem1 = elem
        return elem.todo === name
    })

    if (name) {
        elem1 = { todo: req.body.todo, isCompleted: req.body.isCompleted }
        todos.splice(0, 1, elem1)

        res.status(200)
        res.json(elem1)
    } else {
        res.status(404);
        res.json("Todo not found");
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})