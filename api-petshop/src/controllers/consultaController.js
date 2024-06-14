const Consulta = require('../models/Consulta');
const Paciente = require('../models/Paciente');
const Medico = require('../models/Medico');

async function buscarTodos(req, res) {
    try {
        const consultas = await Consulta.find()
            .populate({
                path: 'paciente',
                model: Paciente,
                select: '-__v',
            })
            .populate({
                path: 'medico',
                model: Medico,
                select: '-__v',
            });

        res.json(consultas);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar consultas", erro: error.message });
    }
}

async function buscarPorID(req, res) {
    try {
        const consulta = await Consulta.findById(req.params.id)
            .populate({
                path: 'paciente',
                model: Paciente,
                select: '-__v',
            })
            .populate({
                path: 'medico',
                model: Medico,
                select: '-__v',
            });

        if (consulta) {
            res.json(consulta);
        } else {
            res.status(404).json({ mensagem: "Consulta não encontrada!" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar consulta", erro: error.message });
    }
}

async function criar(req, res) {
    const { paciente, medico } = req.body;

   
    const consultaExistente = await Consulta.findOne({ paciente });

    if (consultaExistente) {
        return res.status(400).json({ mensagem: "Já existe uma consulta para este paciente!" });
    }

    try {
        const consulta = new Consulta(req.body);
        const consultaCriada = await consulta.save();

        
        const consultaPopulada = await Consulta.findById(consultaCriada._id)
            .populate({
                path: 'paciente',
                model: Paciente,
                select: '-__v',
            })
            .populate({
                path: 'medico',
                model: Medico,
                select: '-__v',
            });

        res.status(201).json({
            mensagem: "Consulta criada com sucesso!",
            consulta: consultaPopulada
        });
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao criar consulta", erro: error.message });
    }
}

async function atualizar(req, res) {
    try {
        const consultaAtualizada = await Consulta.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .populate({
                path: 'paciente',
                model: Paciente,
                select: '-__v',
            })
            .populate({
                path: 'medico',
                model: Medico,
                select: '-__v',
            });

        if (consultaAtualizada) {
            res.json({
                mensagem: "Consulta atualizada com sucesso!",
                consultaAtualizada
            });
        } else {
            res.status(404).json({ mensagem: "Consulta não encontrada!" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao atualizar consulta", erro: error.message });
    }
}

async function excluir(req, res) {
    try {
        const consultaExcluida = await Consulta.findByIdAndDelete(req.params.id)
            .populate({
                path: 'paciente',
                model: Paciente,
                select: '-__v',
            })
            .populate({
                path: 'medico',
                model: Medico,
                select: '-__v',
            });

        if (consultaExcluida) {
            res.json({
                mensagem: "Consulta excluída com sucesso!",
                consultaExcluida
            });
        } else {
            res.status(404).json({ mensagem: "Consulta não encontrada!" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao excluir consulta", erro: error.message });
    }
}

module.exports = {
    buscarTodos,
    buscarPorID,
    criar,
    atualizar,
    excluir
};
