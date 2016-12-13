"use strict"

const express = require("express")
const router = express.Router()

const studentDB = require("./studentsDB.json")

function searchStudent(studentId) {
    return studentDB.find(student => student.id === studentId)
}

router.get("/", (request, response) => {
    response.json(studentDB)
})

router.get("/:id", (request, response) => {
    var studenID = request.params.id
    var studentData = searchStudent(studenID)
    
    if(studentData) {
        var notas = studentData.grades
        var result = 0
        var status
        
        notas.forEach(function(nota) {
            result += nota
        })
        
        result = result/notas.length
        
        if(result < 50) {
            status = "Disapproved"
        }
        else if(result >=50 && result < 60) {
            status = "Final Test"
        }
        else {
            status = "Approved"
        }
        
        studentData.status = status
        response.json(studentData)
    }
    else {
        response.status(404).send("Not found")
    }
    
})

module.exports = router


