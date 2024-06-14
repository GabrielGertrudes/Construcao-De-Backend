const mongoose = require('mongoose');

const consultaSchema = new mongoose.Schema({
  paciente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Paciente',
    required: true,
  },
  medico: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Medico',
    required: true,
  },
  data: {
    type: Date,
    required: true,
  },
  hora: String,
  descricao: String,
});

const Consulta = mongoose.model('Consulta', consultaSchema);

module.exports = Consulta;
