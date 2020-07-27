const express=require('express')
const crypto=require('crypto')

const connection = require('../src/database/connection')

const routes = express.Router()

routes.get("/users",(request, response)=>{
    return response.json({
        evento:"Semana PmniStack 11.0",
        aluno:"Michael Lourenço",
        teste:"sem parâmetros"
    })
})

//Exempĺo query params ( se acessa por request.query)
routes.get("/users-query",(request, response)=>{
    const params = request.query;
    console.log(params)
    return response.json({
        params
    })
})

//Exempo rout params ( se acessa por request.params)
routes.get("/users/:id",(request, response)=>{
    const params = request.params
    
    return response.json({
        params
    })
})

//Exemplo request body ( se acessa por request.body)
routes.post("/ongs", async (request, response)=>{
    const {name, email, whatsapp, city, uf}=request.body

    const id=crypto.randomBytes(4).toString('HEX')

    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,

    })

    return response.json({id})
})

module.exports = routes;

