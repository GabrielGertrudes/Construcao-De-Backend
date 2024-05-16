const express = require('express')
const router = express.Router()

const funcionarios = []

function validarFuncionario(req, res, next) {
  const id = req.params.id
  const funcionario = funcionarios.find(funcionario => funcionario.id == id)
  if (funcionario) {
    req.funcionario = funcionario
    next()
  } else {
    return res.status(404).send({ message: 'Funcionario não encontrado' })
  }
}

function validarAtributos(req, res, next) {
  const dados = req.body
  if (!dados.nome || !dados.email || !dados.telefone || !dados.cargo || !dados.salario) {
    return res.status(400).json({ message: 'Nome, email, telefone, cargo e salario são obrigatórios' })
  }
  next()
}

router.get('/funcionarios', (req, res) => {
  res.json(funcionarios)
})

router.get('/funcionarios/:id', validarFuncionario, (req, res) => {
  res.json(req.funcionario)
})

router.post('/funcionarios', validarAtributos, (req, res) => {
  const dados = req.body

  const funcionario = {
    id: Math.round(Math.random() * 1000),
    nome: dados.nome,
    email: dados.email,
    telefone: dados.telefone,
    cargo: dados.cargo,
    salario: dados.salario
  }

  funcionarios.push(funcionario)

  res.status(201).json(
    {
      message: 'Funcionario criado com sucesso!',
      funcionario
    }
  )

})

router.put('/funcionarios/:id', validarAtributos, validarFuncionario, (req, res) => {
  const id = req.params.id
  const dados = req.body

  const index = funcionarios.findIndex(funcionario => funcionario.id == id)

  funcionarios[index] = {
    id: Number(id),
    nome: dados.nome,
    email: dados.email,
    telefone: dados.telefone,
    cargo: dados.cargo,
    salario: dados.salario
  }

  res.status(200).json(
    {
      message: 'Funcionario atualizado com sucesso!',
      funcionario: funcionarios[index]
    }
  )

})

router.delete('/funcionarios/:id', validarFuncionario, (req, res) => {
  const id = req.params.id
  const index = funcionarios.findIndex(funcionario => funcionario.id == id)
  funcionarios.splice(index, 1)
  res.status(204).json()
})

router.get('/funcionarios/cargo/:cargo', (req, res) => {
  res.json(funcionarios.filter(f => f.cargo == req.params.cargo))
})

router.get('/funcionarios/salarios/media', (req, res) => {
  let soma = 0
  if (funcionarios.length > 0) {
    funcionarios.forEach((funcionario) => {
      soma += Number(funcionario.salario)
    })
    const media = soma / funcionarios.length
    res.json({ media: media })
  } else {
    res.json({ media: 0 })
  }
})


module.exports = router
