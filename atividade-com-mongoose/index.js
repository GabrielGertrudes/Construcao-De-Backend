//Nome: Gabriel gertrudes 
//imports
const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
//config.
const PORTA = 3000;
const aplicativo = express()
//banco de dados
const USUARIO_BD = process.env.DB_USER
const SENHA_BD = process.env.DB_PASS
const HOST_BD = process.env.DB_HOST
const NOME_BD = process.env.DB_NAME
mongoose.connect(`mongodb+srv://${USUARIO_BD}:${SENHA_BD}@${HOST_BD}/${NOME_BD}?retryWrites=true&w=majority&appName=Cluster0`)
.then(()=> console.log("conectado ao banco de dados"))
.catch(err => console.log("erro ao conectar no banco de dados", err))
//middlewares
aplicativo.use(express.json())
//models
const PRODUTO = mongoose.model('produto', { nome: String})
//rotas
aplicativo.post('/produto', async(req, res) =>{
    const item = new PRODUTO(req.body)
    const itemAdicionado = await item.save()
    res.status(201).json(itemAdicionado)
})

//busca
aplicativo.get('/produto', async(req, res) =>{
    const item = await PRODUTO.find()
    res.json(item)
})

//busca por id
aplicativo.get('/produto/:id', async(req, res) =>{
    const item = await PRODUTO.findById(req.params.id)
    res.json(item)
})

//delete
aplicativo.delete('/produto/:id', async(req, res) =>{
    await PRODUTO.findByIdAndDelete(req.params.id)
    res.json({mensagem:"item da lista deletado"})
})

//update
aplicativo.put('/produto/:id', async(req, res) =>{
    const itemAtualizado = await PRODUTO.findByIdAndUpdate(req.params.id, req.body, {new:true})
    res.json(itemAtualizado);
})

aplicativo.listen(PORTA, () =>{
    console.log("Api rodadando na porta 3000")
})