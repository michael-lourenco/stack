const express = require('express')

const app = express()

app.get("/",(request, response)=>{
    return response.json({
        evento:"Semana PmniStack 11.0",
        aluno:"Michael Lourenço"
    })
})

app.listen(3333)