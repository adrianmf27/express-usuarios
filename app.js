const express = require("express")

let app = express()

/* Directorio y motor de plantillas html */
app.set("views", "views")
app.set("view engine", "ejs")

/* Para poder usar peiticiones post con body */
app.use(express.json()) 


let tasks = require("./data/tasks")
let users = require("./data/users")

let routertask = require("./routers/routerTask")
app.use("/tasks", routertask)
let routeruser = require("./routers/routerUser")
app.use("/users", routeruser)

app.listen(8081, () => {
    console.log("Servidor activo")
})