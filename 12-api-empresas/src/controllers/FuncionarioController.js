const Funcionario = require('../models/Funcionario')


async function buscarTodos(req, res) {
    res.json(await Funcionario.find().populate(['cargo', 'departamento']))
}

async function buscarPorID(req, res) {
    const funcionario = await Funcionario.findById(req.params.id).populate(['cargo', 'departamento'])
    if (funcionario) {
        res.json(funcionario)
    } else {
        res.status(404).json({ mensagem: "Funcionario não encontrado!" })
    }
}

async function criar(req, res) {
    const funcionario = new Funcionario(req.body)
    const funcionarioCriado = await funcionario.save()
    res.status(201).json(funcionarioCriado)
}

async function atualizar(req, res) {
    const funcionarioAtualizado = await Funcionario.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (funcionarioAtualizado) {
        res.json(
            {
                mensagem: "Funcionario atualizado com sucesso!",
                funcionarioAtualizado
            }
        )
    } else {
        res.status(404).json({ mensagem: "Funcionario não encontrado!" })
    }
}


async function excluir(req, res) {
    const funcionarioExcluido = await Funcionario.findByIdAndDelete(req.params.id)
    if (funcionarioExcluido) {
        res.json(
            {
                mensagem: "Funcionario excluido com sucesso!",
                funcionarioExcluido
            }
        )
    } else {
        res.status(404).json({ mensagem: "Funcionario não encontrado!" })
    }
}


module.exports = {
    buscarTodos,
    buscarPorID,
    criar,
    atualizar,
    excluir
}