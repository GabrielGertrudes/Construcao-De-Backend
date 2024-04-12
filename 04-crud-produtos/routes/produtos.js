const express = require('express')
const router = express.Router()

const listaProdutos = [
    {
        id: 1,
        nome: "Arroz",
        preco: 29.99
    },
    {
        id: 2,
        nome: "Feijão",
        preco: 7.99
    },
    {
        id: 3,
        nome: "Cadeira Gamer",
        preco: 1999.99
    }
]

// READ -> Buscar todos os produtos
router.get('/produtos', (req, res) => {
    res.json(listaProdutos)
})

// READ -> Busca de produto por id
router.get('/produtos/:id', (req, res) => {
    const id = req.params.id
    const produto = listaProdutos.find(produto => produto.id == id)
    res.json(produto)
})

// CREATE -> Criar um novo produto
router.post('/produtos', (req, res) => {
    const dadosProduto = req.body

    const novoProduto = {
        id: listaProdutos.length + 1,
        nome: dadosProduto.nome,
        preco: dadosProduto.preco
    }

    listaProdutos.push(novoProduto)

    res.json(
        {
            mensagem: "Produto criado com sucesso!"
        }
    )
})

// UPDATE -> Atualizar produto
router.put('/produtos/:id', (req, res) => {
    const id = req.params.id
    const novosDados = req.body

    const index = listaProdutos.findIndex(produto => produto.id == id)

    const produtoAtualizado = {
        id: Number(id),
        nome: novosDados.nome,
        preco: novosDados.preco
    }

    listaProdutos[index] = produtoAtualizado

    res.json({
        mensagem: "Produto alterado com sucesso!"
    })

})






module.exports = router
