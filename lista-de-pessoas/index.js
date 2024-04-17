// configuração
const express = require('express');
const app = express();
const pessoasRouter = require('./routes/lista');

// Middlewares
app.use(express.json());

// Rotas
app.get('/', (req, res) => {
    res.json("ok");
});

// Rotas para pessoas
app.use('/pessoas', pessoasRouter);

//start
app.listen(3000, () => {
    console.log("Aplicação rodando em http://localhost:3000")
});

