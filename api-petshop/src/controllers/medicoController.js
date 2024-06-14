const Medico = require('../models/Medico');

async function buscarTodos(req, res) {
    const medicos = await Medico.find();
    res.json(medicos);
}

async function buscarPorID(req, res) {
    const medico = await Medico.findById(req.params.id);
    if (medico) {
        res.json(medico);
    } else {
        res.status(404).json({ mensagem: "Médico não encontrado!" });
    }
}

async function criar(req, res) {
    const { crm } = req.body;

    try {
        
        if (!crm) {
            return res.status(400).json({ mensagem: "O campo 'crm' é obrigatório!" });
        }

        
        const medicoExistente = await Medico.findOne({ crm });

        if (medicoExistente) {
            return res.status(400).json({ mensagem: "Já existe um médico com este CRM!" });
        }

        const medico = new Medico(req.body);
        const medicoCriado = await medico.save();
        res.status(201).json(medicoCriado);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao criar médico", erro: error.message });
    }
}

async function atualizar(req, res) {
    const medicoAtualizado = await Medico.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (medicoAtualizado) {
        res.json({
            mensagem: "Médico atualizado com sucesso!",
            medicoAtualizado
        });
    } else {
        res.status(404).json({ mensagem: "Médico não encontrado!" });
    }
}

async function excluir(req, res) {
    const medicoExcluido = await Medico.findByIdAndDelete(req.params.id);
    if (medicoExcluido) {
        res.json({
            mensagem: "Médico excluído com sucesso!",
            medicoExcluido
        });
    } else {
        res.status(404).json({ mensagem: "Médico não encontrado!" });
    }
}

module.exports = {
    buscarTodos,
    buscarPorID,
    criar,
    atualizar,
    excluir
};
