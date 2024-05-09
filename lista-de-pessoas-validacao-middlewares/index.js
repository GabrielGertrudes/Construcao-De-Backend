const express = require("express")
const app = express()
const porta = 3000

app.use(express.json())

const pessoaRouter = require("./router/pessoa.js")
app.use(pessoaRouter)

app.listen(porta, ()=>{
    console.log("Aplicação rodando em http://localhost:3000")
})