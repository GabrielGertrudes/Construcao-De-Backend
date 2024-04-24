const express = require('express')

const router = express.Router()

let listaFuncionarios = [
    {
        id: 1,
        nome: "Gabriel",
        email: "gabriel@gmail.com",
        telefone: 61933334444,
        cargo: "lider",
        salario: 5000
    },
    {
        id: 2,
        nome: "Lucas",
        email: "Lucas@gmail.com",
        telefone: 61966667777,
        cargo: "gerente",
        salario: 9000
    },
    {
        id: 3,
        nome: "Augusto",
        email: "Augusto@gmail.com",
        telefone: 61988882222,
        cargo: "comprador",
        salario: 4000
    }
]

// READ -> Buscar todos os funcionarios
router.get('/funcionarios', (req, res) => {
    res.json(listaFuncionarios)
})

// READ -> Busca de funcionario por id
router.get('/funcionarios/:id', (req, res) => {
    const id = req.params.id
    const funcionario = listaFuncionarios.find(funcionario => funcionario.id == id)
    if (funcionario) {
        return res.json(funcionario)
    }
    return res.status(404).json({ mensagem: "Funcionario não encontrato!" })
})

// CREATE -> Cadastro de funcionario
router.post('/funcionarios', (req, res) => {
    const dados = req.body

    if (!dados.nome || !dados.email || !dados.telefone || !dados.cargo || !dados.salario) {
        return res.status(400).json({ mensagem: "email, nome, telefone, cargo e salario são obrigatórios" })
    }

    const funcionario = {
        id: Math.round(Math.random() * 1000),
        email: dados.email,
        nome: dados.nome,
        telefone: dados.telefone,
        cargo: dados.cargo,
        salario: dados.salario
    }

    listaFuncionarios.push(funcionario)

    res.json({
        mensagem: "Funcionario cadastrado com sucesso!",
        funcionario: funcionario
    })
})

// UPDATE -> Atualização de funcionario
router.put('/funcionarios/:id', (req, res) => {
    const id = req.params.id
    const dados = req.body

    if (!dados.nome || !dados.email || !dados.telefone || !dados.cargo || !dados.salario) {
        return res.status(400).json({ mensagem: "email, nome, telefone, cargo e salario são obrigatórios" })
    }

    const index = listaFuncionarios.findIndex(funcionario => funcionario.id == id)
    if (index == -1) {
        return res.status(404).json({ mensagem: "Funcionario não encontrato!" })
    }

    const funcionarioAtualizado = {
        id: Number(id),
        email: dados.email,
        nome: dados.nome,
        telefone: dados.telefone,
        cargo: dados.cargo,
        salario: dados.salario
    }

    listaFuncionarios[index] = funcionarioAtualizado

    res.json({
        mensagem: "Funcionario atualizado com sucesso!",
        funcionarioAtualizado: funcionarioAtualizado
    })
})

// DELETE -> Excluir um funcionario
router.delete('/funcionarios/:id', (req, res) => {
    const id = req.params.id
    const index = listaFuncionarios.findIndex(funcionario => funcionario.id == id)
    if (index == -1) {
        return res.status(404).json({ mensagem: "Funcionario não encontrato!" })
    }

    listaFuncionarios.splice(index, 1)
    res.json({ mensagem: "Funcionario excluído com sucesso!" })
})

// READ -> Buscar todos os funcionários do mesmo cargo
router.get('/funcionarios/cargo/:cargo', (req, res) => {
    const cargo = req.params.cargo
    const funcionarios = listaFuncionarios.filter(funcionario => funcionario.cargo.toLowerCase() == cargo.toLowerCase())
    res.json(funcionarios)
})

// Calcular e retornar a média salarial de todos os funcionários da lista
router.get('/funcionarios/salario/media', (req, res) => {
    if (listaFuncionarios.length === 0) {
        return res.status(404).json({ mensagem: "Nenhum funcionário encontrado!" })
    }

    const totalFuncionarios = listaFuncionarios.length
    const salarioTotal = listaFuncionarios.reduce((total, funcionario) => total + funcionario.salario, 0)
    const salarioMedia = salarioTotal / totalFuncionarios

    res.json({ media: salarioMedia.toFixed(2) })
})


module.exports = router