const express = require('express')

const app = express()

// intermediario que transforma o corpo da requisição em json
app.use(express.json())


const carroRouter = require('./routes/carros')
app.use(carroRouter)


app.listen(3000, () => {
    console.log("Aplicação rodando em http://localhost:3000")
})