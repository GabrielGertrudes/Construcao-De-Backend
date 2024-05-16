const express = require('express')

const router = express.Router()


let listaCarros = [
    {
        id: 1,
        marca: "Fiat",
        modelo: "Marea BOMBA",
        cor: "Vermelho",
        valor: 30000.00
    },
    {
        id: 2,
        marca: "Honda",
        modelo: "Civic",
        cor: "Preto",
        valor: 120000.00
    }
]


// intermediarios - middlewares
function validarCarro(req, res, next) {
    const id = req.params.id
    const carro = listaCarros.find(carro => carro.id == id)
    const index = listaCarros.findIndex(carro => carro.id == id)
    if (carro) {
        res.carro = carro
        res.index = index
        return next()
    }
    return res.status(404).json({ mensagem: "Carro não encontrato!" })
}

function validarAtributos(req, res, next) {
    const dados = req.body
    if (!dados.marca || !dados.modelo || !dados.cor || !dados.valor) {
        return res.status(400).json({ mensagem: "Marca, modelo, cor e valor são obrigatórios!" })
    }
    return next()
}

// READ -> Buscar todos os carros
router.get('/carros', (req, res) => {
    res.json(listaCarros)
})

// READ -> Busca de carro por id
router.get('/carros/:id', validarCarro, (req, res) => {
    res.json(res.carro)
})

// CREATE -> Cadastro de carro
router.post('/carros', validarAtributos, (req, res) => {
    const dados = req.body

    console.log(req.body)

    const carro = {
        id: Math.round(Math.random() * 1000),
        marca: dados.marca,
        modelo: dados.modelo,
        cor: dados.cor,
        valor: dados.valor
    }

    listaCarros.push(carro)

    res.json({
        mensagem: "Carro cadastrado com sucesso!",
        carro: carro
    })
})


// UPDATE -> Atualização de carro
router.put('/carros/:id', validarAtributos, validarCarro, (req, res) => {
    const dados = req.body

    const carroAtualizado = {
        id: req.carro.id,
        marca: dados.marca,
        modelo: dados.modelo,
        cor: dados.cor,
        valor: dados.valor
    }

    listaCarros[res.index] = carroAtualizado

    res.json({
        mensagem: "Carro atualizado com sucesso!",
        carro: carroAtualizado
    })
})


// DELETE -> Excluir um carro
router.delete('/carros/:id', validarCarro, (req, res) => {
    listaCarros.splice(res.index, 1)
    res.json({ mensagem: "Carro excluído com sucesso!" })
})

// READ -> Buscar todos os carros de uma determinada cor
router.get('/carros/cor/:cor', (req, res) => {
    const cor = req.params.cor
    const carros = listaCarros.filter(carro => carro.cor.toLowerCase() == cor.toLowerCase())
    res.json(carros)
})

// READ -> Buscar o valor somado(total) de todos os carros de uma determinada cor
router.get('/carros/cor/:cor/valor', (req, res) => {
    const cor = req.params.cor
    const carros = listaCarros.filter(carro => carro.cor.toLowerCase() == cor.toLowerCase())

    console.log(carros)

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