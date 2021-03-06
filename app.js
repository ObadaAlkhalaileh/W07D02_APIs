//Q1
const express = require("express")
app = express()

port = 5000

app.use(express.json());
//Q2
const todos = [{ todo: "wake up", isCompleted: false }, { todo: "Eat Breakfast", isCompleted: false }];

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

    let i1 = 0
    let found = todos.find((elem, i) => {
        i1 = i
        return elem.todo === name
    })

    if (found) {
        found = { todo: req.body.todo, isCompleted: req.body.isCompleted }
        todos.splice(i1, 1, found)

        res.status(200)
        res.json(found)
    } else {
        res.status(404);
        res.json("Todo not found");
    }
})

//Q6
app.delete("/delete/todo/:name", (req, res) => {
    const name = req.params.name

    let i1 = 0
    const found = todos.find((elem, i) => {
        i1 = i
        return elem.todo === name
    })

    if (found) {
        todos.splice(i1, 1)

        res.status(200)
        res.json(found)
    } else {
        res.status(404);
        res.json("Todo not found");
    }
})

//Q7
app.put("/complete/todo/:name", (req, res) => {
    const name = req.params.name

    let i1 = 0
    const found = todos.find((elem, i) => {
        i1 = i
        return elem.todo === name
    })

    if (found) {
        todos[i1].isCompleted = true

        res.status(200)
        res.json(todos)
    } else {
        res.status(404);
        res.json("Todo not found");
    }
})

//Q8
app.get("/completed/todos", (req, res) => {

    const completedList = todos.filter((elem, i) => {
        return elem.isCompleted === true
    })
    if (completedList) {
        res.status(200)
        res.json(completedList)
    } else {
        res.status(404);
        res.json("no completed todos");
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})