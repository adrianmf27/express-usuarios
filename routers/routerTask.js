let express = require("express")
let routertask = express.Router()
let tasks = require("../data/tasks")

routertask.get("/", (request, respond) => {
    respond.render("pageTasks", {
        message: "ejemplo"
    })
})

routertask.post("/tasks/:id", (request, respond) => {
    let id = request.body.id
    let task = task.find( (t) => t.id = id)

    if (task == undefined){
        respond.send("Error")
        return
    }
    respond.send(task)
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