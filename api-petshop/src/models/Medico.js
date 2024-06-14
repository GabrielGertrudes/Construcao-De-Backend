const mongoose = require('mongoose');

const medicoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  especialidade: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  telefone: String,
  departamento: String,
  crm: {
    type: String,
    unique: true,
  }
});

const Medico = mongoose.model('Medico', medicoSchema);

module.exports = Medico;
