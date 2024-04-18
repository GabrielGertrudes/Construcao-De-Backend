const express = require('express')

const router = express.Router()


let listaCarros = [
    {
        id: 1,
        marca: "Fiat",
        modelo: "Marea Bomba",
        cor: "Vermelho",
        valor: "30000.00"
    },
    {
        id: 2,
        marca: "Honda",
        modelo: "Civic",
        cor: "Preto",
        valor: "120000.00"
    }
]

//READ -> Buscar todos os carros
router.get('/carros', (req, res) => {
    res.json(listaCarros)
})

// READ -> Busca de carro por id
router.get('/carros/:id', (req, res) => {
    const id = req.params.id
    const carro = listaCarros.find(carro => carro.id == id)
    if (carro) {
        return res.json(carro)
    }
    return res.status(404).json({ mensagem: "Carro não encontrado!" })
})

// CREATE -> cadastrar um carro
router.post('/carros', (req, res) => {
    const dados = req.body

    if (!dados.modelo || !dados.marca || !dados.cor || !dados.valor) {
        return res.status(400).json({ mensagem: "Campos marca, modelo, cor e valor são obrigatórios" })
    }

    const carro = {
        id: Math.round(Math.random() * 1000),
        marca: dados.marca,
        modelo: dados.modelo,
        cor: dados.cor,
        valor: dados.valor
    }

    listaCarros.push(carro)
    return res.status(201).json({
        mensagem: "Carro criado com sucesso!",
        carro
    })
})

// UPDATE -> Atualizar um carro
router.put("/carros/:id", (req, res) => {
    const id = req.params.id
    const dados = req.body

    if (!dados.marca || !dados.modelo || !dados.cor || !dados.valor) {
        return res.status(400).json({ mensagem: "Campos marca, modelo, cor e valor são obrigatórios" })
    }

    const index = listaCarros.findIndex(carro => carro.id == id)
    if (index == -1) {
        return res.status(404).json({ mensagem: "Carro não encontrado!" })
    }

    const carroAtualizado = {
        id: Number(id),
        marca: dados.marca,
        modelo: dados.modelo,
        cor: dados.cor,
        valor: dados.valor
    }

    listaCarros[index] = carroAtualizado

    return res.json({
        mensagem: "Carro atualizado com sucesso!",
        carroAtualizado
    })
})

// DELETE -> Excluir um carro
router.delete('/carros/:id', (req, res) => {
    const id = req.params.id
    const index = listaCarros.findIndex(carro => carro.id == id)
    if (index == -1) {
        return res.status(404).json({ mensagem: "Carro não encontrado!" })
    }
    listaCarros.splice(index, 1)
    res.json({ mensagem: "Carro excluido com sucesso!" })
})

// Read -> Buscar todos os carros de uma determinada cor 
router.get('/carros/cor/:cor', (req, res) => {
    const cor = req.params.cor
    const carros = listaCarros.filter(carro => carro.cor.toUpperCase() == cor.toLocaleUpperCase())
    res.json(carros)
})

// READ -> Buscar o valor somado(total) de todos os carros de uma determinada cor
router.get('/carros/cor/:cor/valor', (req, res) => {
    const cor = req.params.cor
    const carros = listaCarros.filter(carro => carro.cor.toLowerCase() == cor.toLowerCase())

    let valorTotal = 0
    carros.forEach(carro => {
        valorTotal = valorTotal + carro.valor
    })

    res.json({
        quantidade: carros.length,
            valor: valorTotal
        })
})




module.exports = router