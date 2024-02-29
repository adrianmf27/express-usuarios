let express = require("express")
let routertask = express.Router()
let tasks = require("../data/tasks")

routertask.get("/", (request, respond) => {
    let text = request.query.text

    if (text != undefined){
        let taskWithText = tasks.filter( task => task.text.indexOf(text) != -1)
        respond.send(taskWithText)
        return
    }
    respond.send(tasks)
})


routertask.get("/tasks/:id", (request, respond) => {
    let id = request.params.id
    let task = task.find( (t) => t.id = id)

    if (task == undefined){
        respond.send("Error")
        return
    }
    respond.send(task)
})

module.exports = routertask