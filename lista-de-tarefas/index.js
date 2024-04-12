// configuração
const express = require('express')
const app = express()

// Middlewares
app.use(express.json());

// Rotas
app.get('/', (req, res) => {
    res.json("API de gerenciamento de tarefas");
});

// Rotas de tarefas
const tarefasRouter = require('./routes/tarefas');
app.use(tarefasRouter);

//start
app.listen(3000, () => {
    console.log("Aplicação rodando em http://localhost:3000")
})
