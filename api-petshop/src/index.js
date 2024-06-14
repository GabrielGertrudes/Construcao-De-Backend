const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const mainDatabaseConnection = require('./database/connection');

dotenv.config();

mainDatabaseConnection();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Rotas
const autenticacaoRoutes = require('./routes/autenticacao.routes');
const routes = require('./routes/routes');

app.use('', autenticacaoRoutes);

app.use('', routes);

// Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Erro no servidor!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
