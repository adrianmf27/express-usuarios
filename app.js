const express = require("express")

let app = express()

let task = [
    {id: 1, text:"Hacer la compra"}
]

let users = [
    {id: 1, email:"user1@gmail.com", passwd:"user1"},
    {id: 2, email:"user2@gmail.com", passwd:"user2"}
]

app.get("/tasks", (request, respond) => {
    respond.send(task)
})

app.get("/users", (request, respond) => {
    respond.send(users)
})

app.listen(8081, () => {
    console.log("Servidor activo")
})