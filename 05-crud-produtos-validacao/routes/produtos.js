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
    if (produto) {
        return res.json(produto)
    }
    return res.status(404).json({ mensagem: "Produto não encontrado!" })
})

// CREATE -> Criar um novo produto
router.post('/produtos', (req, res) => {
    const dadosProduto = req.body

    if (!dadosProduto.nome || !dadosProduto.preco) {
        return res.status(400).json({ mensagem: "nome e preço são obrigatórios!" })
    }

    const novoProduto = {
        id: Math.round(Math.random() * 1000),
        nome: dadosProduto.nome,
        preco: dadosProduto.preco
    }

    listaProdutos.push(novoProduto)

    res.status(201).json(
        {
            mensagem: "Produto criado com sucesso!",
            novoProduto
        }
    )
})

// UPDATE -> Atualizar produto
router.put('/produtos/:id', (req, res) => {
    const id = req.params.id
    const novosDados = req.body

    if (!novosDados.nome || !novosDados.preco) {
        return res.status(400).json({ mensagem: "nome e preço são obrigatórios!" })
    }

    const index = listaProdutos.findIndex(produto => produto.id == id)

    if (index == -1) {
        return res.status(404).json({ mensagem: "Produto não encontrado!" })
    }

    const produtoAtualizado = {
        id: Number(id),
        nome: novosDados.nome,
        preco: novosDados.preco
    }

    listaProdutos[index] = produtoAtualizado

    res.json({
        mensagem: "Produto alterado com sucesso!",
        produtoAtualizado
    })
})

// DELETE -> Deletar produto
router.delete('/produtos/:id', (req, res) => {
    const id = req.params.id
    const index = listaProdutos.findIndex(produto => produto.id == id)
    if (index == -1) {
        return res.status(404).json({ mensagem: "produto não encontrado!" })
    }
    listaProdutos.splice(index, 1)
    res.json({ mensagem: "Produto excluido com sucesso!" })
})






module.exports = router