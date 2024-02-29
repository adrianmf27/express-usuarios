const express = require("express")

let app = express()

let tasks = require("./data/tasks")
let users = require("./data/users")

let routertask = require("./routers/routerTask")
app.use("/tasks", routertask)
let routeruser = require("./routers/routerUser")
app.use("/users", routeruser)

app.listen(8081, () => {
    console.log("Servidor activo")
})