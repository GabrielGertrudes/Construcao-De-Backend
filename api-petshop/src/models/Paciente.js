const mongoose = require('mongoose');

const enderecoSchema = new mongoose.Schema({
  rua: String,
  numero: Number,
  cidade: String,
  estado: String,
  cep: String,
});

const pacienteSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    required: true,
    unique: true,
  },
  dataNascimento: {
    type: Date,
    required: true,
  },
  genero: {
    type: String,
    enum: ['Masculino', 'Feminino', 'Outro'],
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  telefone: String,
  endereco: enderecoSchema,
  historicoMedico: String,
});

const Paciente = mongoose.model('Paciente', pacienteSchema);

module.exports = Paciente;
