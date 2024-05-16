const express = require('express')
const app = express()

// middleware
function intermediario(req, res, next) {
    console.log("A requisição passou aqui!")
    next()
}

function intermediario2(req, res, next) {
    console.log("A requisição TRAVOU!")
    return res.status(400).json({ mensagem: "TE TRAVEI" })
}

// global (para todas as requisições)
// app.use(intermediario)
// app.use('/hello', intermediario)

app.get('/hello', intermediario, (req, res) => {
    res.json("hello")
})

app.get('/teste', intermediario, intermediario2, (req, res) => {
    res.json("teste")
})





app.listen(3000, () => {
    console.log("Aplicação rodando em http://localhost:3000")
})