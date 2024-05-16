const express = require('express')
const app = express()
const PORT = 3000

const DBConnect = require('./database/connection')
DBConnect()

app.use(express.json())

const routes = require('./routes/routes')
app.use(routes)


app.listen(PORT, () => {
    console.log(`Aplicação rodando na porta ${PORT}`)
})