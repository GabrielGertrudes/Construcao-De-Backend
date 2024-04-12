// configuração
const express = require('express')
const app = express()

// middlewares
app.use(express.json())

//rotas
app.get('/', (req, res) => {
    res.json("OK")
})

// rotas importadas do roteador
const contatosRouter = require('./routes/contatos')

app.use(contatosRouter)

//start
app.listen(3000, () => {
    console.log("Aplicação rodando em http://localhost:3000")
})
