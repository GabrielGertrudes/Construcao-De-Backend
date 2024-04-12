// imports
const express = require('express')
const tutorial = require('./routes/tutorial')
const contatos = require('./routes/contatos')

// configuração do express
// cria uma instância de uma aplicação express
const app = express()

// middlewares
// middleware express.json -> transforma o corpo da requisição
// em json
app.use(express.json())

// rotas
// aponto para minha aplicação que esse router existe
// rota normal
// app.use(tutorial)
// subrota
// app.use("/teste", tutorial)
app.use("/teste", tutorial)
app.use(contatos)

// start da aplicação
app.listen(3000, () => {
    console.log("Aplicação rodando em http://localhost:3000")
})
