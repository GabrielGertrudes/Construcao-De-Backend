const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PrescricaoSchema = new Schema({
    tratamento: {
        type: Schema.Types.ObjectId,
        ref: 'Tratamento',
        required: true
    },
    paciente: {
        type: Schema.Types.ObjectId,
        ref: 'Paciente',
        required: true
    },
    medico: {
        type: Schema.Types.ObjectId,
        ref: 'Medico',
        required: true
    },
    medicamento: {
        type: String,
        required: true
    },
    dosagem: {
        type: String,
        required: true
    },
    frequencia: {
        type: String,
        required: true
    },
    duracao: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Prescricao', PrescricaoSchema);
