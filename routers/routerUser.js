
let express = require("express")
let routerusers = express.Router()
let users = require("../data/users")


routerusers.get("/", (request, respond) => {
    let email = request.query.email

    if (email != undefined){
        let usersWithEmail = users.filter( user => user.email == email)
        respond.send(usersWithEmail)
        return
    }
    respond.send(users)
})

routerusers.get("/:id", (request, respond) => {
    let id = request.params.id
    let user = users.find( (t) => t.id = id)

    if (user == undefined){
        respond.send("Error")
        return
    }
    respond.send(user)
})


module.exports = routerusers