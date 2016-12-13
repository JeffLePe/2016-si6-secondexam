"use strict"

const express = require("express")
//const bodyparser = require("body-parser")

const app = express()
//app.use(bodyparser.json())
app.use(express.static("public"))

//Servidor
const server = app.listen(3000)
console.log("Servidor iniciado na porta: " + server.address().port)

app.get('/', function(request, response) {
    response.sendFile("index.html")
})

app.use('/api/students', require("./app/studentAPI"))
