// imports
const express = require('express')
const mongoose = require('mongoose')

const app = express()
const PORT = 3000

// Middlewares
app.use(express.json())

// Conexão com o MongoDB
mongoose.connect(`mongodb+srv://username:<password>@cluster0.g6opllz.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => console.log("Conectado ao MongoDB"))
    .catch(err => console.log("Erro ao conectar no MongoDB: ", err))


// Schemas
const Tarefa = mongoose.model('tarefa', { nome: String })

// Rotas
app.post('/tarefas', async (req, res) => {
    const tarefa = new Tarefa({ nome: req.body.nome })
    const tarefaCriada = await tarefa.save()
    res.json(tarefaCriada)
})


app.listen(PORT, () => {
    console.log(`Aplicação rodando na porta ${PORT}`)
})
