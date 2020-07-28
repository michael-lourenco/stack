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

// REACT NATIVE E EXPO

/**
* ICONES
* EX:
* import {Feather} from '@expo/vector-icons'
**/

/**
* NAVEGAR PELAS TELAS 
*
* semelhante ao useHistory do react js
* EX:
* import { useNavigation } from '@react-navigation/native'
* 
**/

/**
* RECEBER INFORMAÇÕES DA TELA ATUAL
*
* useRoute
*
* EX:
* import { useNavigation, useRoute } from '@react-navigation/native'
**/



/**
* ENVIAR EMAIL COM EXPO 
*
* expo install expo-mail-composer
* EX:
* import * as MailComposer from 'expo-mail-composer'
* a forma de importação acima foi utilizada, pois o expo-mail-composer exporta vários métodos sem um default, trazemos todo ele e colocamos numa variavel MailComposer
**/
/**
* PARA ACESSAR OUTRAS TECNOLOGIAS PELO CELULAR
*
* DEEP LINKING
* acessa um aplicativo do celular atraves de um endereço ( tipo uma url )
* EX:
* import {Lining} from 'react-native'
*
* da pra chamar junto com outras funcionalidades do react native
* EX:
* import { Image,Linking, Text, TouchableOpacity, View } from 'react-native'
*
**/

/**
* INSTALAR INTL
*
* No androi não tem a funionalidade de usar o intl pra formatar informações como currency
* pra suprir esta falta basta instalar e utilizar o intl
* npm install intl
* ADICIONAR NO App.js, pois este arquivo enxerga toda a aplicação
*
* import 'intl'
* import 'intl/locale-data/jsonp/pt-BR'
**/