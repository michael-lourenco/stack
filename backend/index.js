const express = require('express')

const app = express()

//informar que usaremos JSON no corpo das requisições
app.use(express.json())

/*
* Rota / Recurso
* Exemplo de Rota: http://localhost:3333/users/
* Exemplo de Recurso: /users
**/

/*
 *Métodos HTTP: 
 *
 * GET: Buscar informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de Parâmetros:
 * 
 * Query Params: nomeados enviados na rota após "?" (filtros, paginação) concatenados com "&"
 * Ex: http://localhost:3333/users/?name=michael&page=2
 * Route Params: utilizados para identificar recursos
 * Ex: http://localhost:3333/users/1 (onde /users/1 = /users/:id no NodeJS)
 * Request Body: Corpo da reeuisição, usaro para criar ou alterar recurso
 */

app.get("/users",(request, response)=>{
    return response.json({
        evento:"Semana PmniStack 11.0",
        aluno:"Michael Lourenço",
        teste:"sem parâmetros"
    })
})

//Exempĺo query params ( se acessa por request.query)
app.get("/users-query",(request, response)=>{
    const params = request.query;
    console.log(params)
    return response.json({
        params
    })
})

//Exempo rout params ( se acessa por request.params)
app.get("/users/:id",(request, response)=>{
    const params = request.params
    
    return response.json({
        params
    })
})

//Exemplo request body ( se acessa por request.body)
app.post("/users",(request, response)=>{
    const body=request.body

    console.log(body)

    return response.json({
        body
    })
})

app.listen(3333)