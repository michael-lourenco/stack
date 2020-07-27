const express = require('express')
const routes = require('../routes/routes')

const app = express()

//informar que usaremos JSON no corpo das requisições
app.use(express.json())
app.use(routes)


  /**
   * Utils
   * npm -> instala
   * npx -> executa
   */


app.listen(3333)