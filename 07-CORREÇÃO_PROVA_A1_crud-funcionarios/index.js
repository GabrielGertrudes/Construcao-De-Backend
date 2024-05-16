const express = require('express')
const app = express()

app.use(express.json())

console.log(process.env.TESTE)

const funcionarios = require('./routes/funcionarios')
app.use(funcionarios)

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000')
})

module.exports = app
