const Cargo = require('../models/Cargo')

async function buscarTodos(req, res) {
    res.json(await Cargo.find())
}

async function buscarPorID(req, res) {
    const cargo = await Cargo.findById(req.params.id)
    if (cargo) {
        res.json(cargo)
    } else {
        res.status(404).json({ mensagem: "Cargo não encontrado!" })
    }
}

async function criar(req, res) {
    const cargo = new Cargo(req.body)
    const cargoCriado = await cargo.save()
    res.status(201).json(cargoCriado)
}

async function atualizar(req, res) {
    const cargoAtualizado = await Cargo.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (cargoAtualizado) {
        res.json(
            {
                mensagem: "Cargo atualizado com sucesso!",
                cargoAtualizado
            }
        )
    } else {
        res.status(404).json({ mensagem: "Cargo não encontrado!" })
    }
}

async function excluir(req, res) {
    const cargoExcluido = await Cargo.findByIdAndDelete(req.params.id)
    if (cargoExcluido) {
        res.json(
            {
                mensagem: "Cargo excluido com sucesso!",
                cargoExcluido
            }
        )
    } else {
        res.status(404).json({ mensagem: "Cargo não encontrado!" })
    }
}


module.exports = {
    buscarTodos,
    buscarPorID,
    criar,
    atualizar,
    excluir
}