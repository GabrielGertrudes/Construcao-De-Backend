const Departamento = require('../models/Departamento')

async function buscarTodos(req, res) {
    res.json(await Departamento.find())
}

async function buscarPorID(req, res) {
    const departamento = await Departamento.findById(req.params.id)
    if (departamento) {
        res.json(departamento)
    } else {
        res.status(404).json({ mensagem: "Departamento não encontrado!" })
    }
}

async function criar(req, res) {
    const departamento = new Departamento(req.body)
    const departamentoCriado = await departamento.save()
    res.status(201).json(departamentoCriado)
}

async function atualizar(req, res) {
    const departamentoAtualizado = await Departamento.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (departamentoAtualizado) {
        res.json(
            {
                mensagem: "Departamento atualizado com sucesso!",
                departamentoAtualizado
            }
        )
    } else {
        res.status(404).json({ mensagem: "Departamento não encontrado!" })
    }
}

async function excluir(req, res) {
    const departamentoExcluido = await Departamento.findByIdAndDelete(req.params.id)
    if (departamentoExcluido) {
        res.json(
            {
                mensagem: "Departamento excluido com sucesso!",
                departamentoExcluido
            }
        )
    } else {
        res.status(404).json({ mensagem: "Departamento não encontrado!" })
    }
}


module.exports = {
    buscarTodos,
    buscarPorID,
    criar,
    atualizar,
    excluir
}