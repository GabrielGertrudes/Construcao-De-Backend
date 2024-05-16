const express = require('express');
const router = express.Router();

let pessoas = [
    {
        id: 1,
        nome: "João",
        idade: 20,
        email: "joao@email.com",
        telefone: "61900010002"
    },
    {
        id: 2,
        nome: "Rafael",
        idade: 26,
        email: "rafael@email.com",
        telefone: "61430312302"
    },
    {
        id: 3,
        nome: "Gabriel",
        idade: 22,
        email: "gabriel@email.com",
        telefone: "612023106702"
    }
]

function validarPessoa(req, res, next){
    const id = req.params.id
    const pessoa = pessoas.find(individuo => individuo.id == id )
    const index = pessoas.findIndex(individuo => individuo.id == id)

    if(pessoa){
        res.pessoa = pessoa 
        res.index = index
        return next()
    }
    return res.status(400).json("Pessoa não encontrada")
}

function validarAtributos(req, res, next){
    const dados = req.body

    if(!dados.nome || !dados.idade || !dados.email || !dados.telefone){
        return res.status(400).json("Nome, idade, email e telefone são obrigatórios")
    }
    return next()
}

router.get("/pessoa", (req,res)=>{
    res.json(pessoas)
})

router.get("/pessoa/:id" , validarPessoa, (req,res)=>{
    res.json(res.pessoa)
})

router.post("/pessoa", validarAtributos, (req, res)=>{
    const dados = req.body
    const novaPessoa = {
        id: Math.round(Math.random() * 1000),
        nome: dados.nome,
        idade: dados.idade,
        email: dados.email,
        telefone: dados.telefone
    }

    pessoas.push(novaPessoa)
    res.json("Nova pessoa adicionada")
})

router.put("/pessoa/:id", validarPessoa, validarAtributos, (req, res)=>{
    let id = req.params.id
    const dados = req.body
    const pessoaAtualizada = {
        id: id,
        nome: dados.nome,
        idade: dados.idade,
        email: dados.email,
        telefone: dados.telefone
    }

    pessoas[res.index] = pessoaAtualizada
    res.json("Pessoa atualizada com sucesso")
})

router.delete("/pessoa/:id", validarPessoa, (req, res)=>{
    pessoas.splice(res.index,1)
    res.json("Pessoa excluída com sucesso")
})






module.exports = router