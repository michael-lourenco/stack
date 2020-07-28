# stack
conhecimentos sobre node, react etc.

# configurar chave ssh para github/bitbucket

https://www.bemmelhor.com.br/faq/gerando_chave_ssh_para_o_bitbucket

https://www.youtube.com/watch?v=tjZEplICR5g


// BACK END

/**
* ROTA / RECURSO
*
* Express
* Exemplo de Rota: http://localhost:3333/users/
* Exemplo de Recurso: /users
**/

/**
* MÉTODOS HTTP: 
*
* GET: Buscar informação do back-end
* POST: Criar uma informação no back-end
* PUT: Alterar uma informação no back-end
* DELETE: Deletar uma informação no back-end
*/

/**
* TIPOS DE PARÂMETROS:
* 
* Query Params: nomeados enviados na rota após "?" (filtros, paginação) concatenados com "&"
* Ex: http://localhost:3333/users/?name=michael&page=2
* Route Params: utilizados para identificar recursos
* Ex: http://localhost:3333/users/1 (onde /users/1 = /users/:id no NodeJS)
* Request Body: Corpo da reeuisição, usaro para criar ou alterar recurso
**/

/**
* BANCOS DE DADOS
* 
* SQL
* NoSql
* 
* Usaremos Knex para auxiliar e o bd SqLite
**/


//FRONT END

/**
*  REACT
*  import React from 'react'
*  import React, { useEffect } from 'react'
*  import React, { useState } from 'react'
*  import React, { useEffect, useState } from 'react'
**/
/** 
*ROTEAR/REDIRECIONAR
*
* import { Link, useHistory } from 'react-router-dom'
**/

/**
* ICONES 
* 
* import { FiArrowLeft } from 'react-icons/fi' (ou outro final se quiser utilizar outro repositório de icones)
**/

/**
* ENVIO E RECEBIMENDO DE DADOS (services)
* 
* AXIOS
**/

/**
* SALVANDO INFORMAÇÕES NO LOCAL STORAGE DO NAVEGADOR
*   
* EX:      
* localStorage.setItem('ongId',id);
**/

/**
* UTILIZANDO/RECEBENDO/PEGANDO INFORMAÇÕES GRAVADAS NO LOCAL STORAGE DO NAVEGADOR
*    
* EX:     
* const ongName = localStorage.getItem('ongName');
**/
/**
* LIMPANDO DADOS DO LOCAL STORAGE DO NAVEGADOR
*
* EX:
* localStorage.clear();
**/