(function () {
    "use strict"

    function getStudentById(id) {
        $.ajax({
            method: "GET",
            url: "/api/students/" + id
        })
        .done(student => {
            $("h2").html(student.name)
            $("#email").html(student.email)
            $("#photo").attr("src", student.photo)
            $("#status").html(student.status)
        });
    }

    $("form").on("submit", event => {
        let id = $("#studentId").val()
        getStudentById(id)
        return false
    })
    
})()