const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tratamentoSchema = new Schema({
    paciente: {
        type: Schema.Types.ObjectId,
        ref: 'Paciente',
        required: true
    },
    consulta: {
        type: Schema.Types.ObjectId,
        ref: 'Consulta',
        required: true
    },
    dataInicio: {
        type: Date,
        required: true
    },
    dataFim: {
        type: Date
    },
    status: {
        type: String,
        enum: ['Em andamento', 'Concluído'],
        default: 'Em andamento'
    },
    descricao: String
});

const Tratamento = mongoose.model('Tratamento', tratamentoSchema);

module.exports = Tratamento;
