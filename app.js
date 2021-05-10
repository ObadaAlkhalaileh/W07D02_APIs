const express = require("express")
app = express()

port = 5000

const todos = [{ todo: " wake up", isCompleted: false }, { todo: "Eat Breakfast", isCompleted: false }];





app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})