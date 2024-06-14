const Prescricao = require('../models/Prescricao');
const Tratamento = require('../models/Tratamento');
const Paciente = require('../models/Paciente');
const Medico = require('../models/Medico');

async function buscarTodos(req, res) {
    try {
        const prescricoes = await Prescricao.find()
            .populate('tratamento')
            .populate('paciente', 'nome cpf')
            .populate('medico', 'nome especialidade');

        res.json(prescricoes);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar prescrições", erro: error.message });
    }
}

async function buscarPorID(req, res) {
    try {
        const prescricao = await Prescricao.findById(req.params.id)
            .populate('tratamento')
            .populate('paciente', 'nome cpf')
            .populate('medico', 'nome especialidade');

        if (prescricao) {
            res.json(prescricao);
        } else {
            res.status(404).json({ mensagem: "Prescrição não encontrada!" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar prescrição por ID", erro: error.message });
    }
}

async function criar(req, res) {
    const { numero } = req.body;

    
    const prescricaoExistente = await Prescricao.findOne({ numero });

    if (prescricaoExistente) {
        return res.status(400).json({ mensagem: "Já existe uma prescrição com este número!" });
    }

    try {
        const prescricao = new Prescricao(req.body);
        const prescricaoCriada = await prescricao.save();

        
        const prescricaoPopulada = await Prescricao.findById(prescricaoCriada._id)
            .populate('tratamento')
            .populate('paciente', 'nome cpf')
            .populate('medico', 'nome especialidade');

        res.status(201).json({
            mensagem: "Prescrição criada com sucesso!",
            prescricao: prescricaoPopulada
        });
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao criar prescrição", erro: error.message });
    }
}

async function atualizar(req, res) {
    try {
        const prescricaoAtualizada = await Prescricao.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .populate('tratamento')
            .populate('paciente', 'nome cpf')
            .populate('medico', 'nome especialidade');

        if (prescricaoAtualizada) {
            res.json({
                mensagem: "Prescrição atualizada com sucesso!",
                prescricao: prescricaoAtualizada
            });
        } else {
            res.status(404).json({ mensagem: "Prescrição não encontrada!" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao atualizar prescrição", erro: error.message });
    }
}

async function excluir(req, res) {
    try {
        const prescricaoExcluida = await Prescricao.findByIdAndDelete(req.params.id)
            .populate('tratamento')
            .populate('paciente', 'nome cpf')
            .populate('medico', 'nome especialidade');

        if (prescricaoExcluida) {
            res.json({
                mensagem: "Prescrição excluída com sucesso!",
                prescricao: prescricaoExcluida
            });
        } else {
            res.status(404).json({ mensagem: "Prescrição não encontrada!" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao excluir prescrição", erro: error.message });
    }
}

module.exports = {
    buscarTodos,
    buscarPorID,
    criar,
    atualizar,
    excluir
};
