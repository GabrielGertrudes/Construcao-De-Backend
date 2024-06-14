const Tratamento = require('../models/Tratamento');
const Paciente = require('../models/Paciente');
const Consulta = require('../models/Consulta');

async function buscarTodos(req, res) {
    try {
        const tratamentos = await Tratamento.find()
            .populate({
                path: 'paciente',
                select: 'nome cpf dataNascimento genero email telefone endereco historicoMedico'
            })
            .populate({
                path: 'consulta',
                populate: {
                    path: 'medico',
                    select: 'nome especialidade email telefone departamento'
                }
            });

        res.json(tratamentos);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar tratamentos", erro: error.message });
    }
}

async function buscarPorID(req, res) {
    try {
        const tratamento = await Tratamento.findById(req.params.id)
            .populate({
                path: 'paciente',
                select: 'nome cpf dataNascimento genero email telefone endereco historicoMedico'
            })
            .populate({
                path: 'consulta',
                populate: {
                    path: 'medico',
                    select: 'nome especialidade email telefone departamento'
                }
            });

        if (tratamento) {
            res.json(tratamento);
        } else {
            res.status(404).json({ mensagem: "Tratamento não encontrado!" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar tratamento por ID", erro: error.message });
    }
}

async function criar(req, res) {
    try {
        const { paciente, consulta } = req.body;

       
        const tratamentoEmAndamento = await Tratamento.findOne({ paciente, status: 'Em andamento' });

        if (tratamentoEmAndamento) {
            return res.status(400).json({ mensagem: "Já existe um tratamento em andamento para este paciente!" });
        }

        const tratamento = new Tratamento(req.body);
        const tratamentoCriado = await tratamento.save();

        
        const tratamentoPopulado = await Tratamento.findById(tratamentoCriado._id)
            .populate({
                path: 'paciente',
                select: 'nome cpf dataNascimento genero email telefone endereco historicoMedico'
            })
            .populate({
                path: 'consulta',
                populate: {
                    path: 'medico',
                    select: 'nome especialidade email telefone departamento'
                }
            });

        res.status(201).json({
            mensagem: "Tratamento criado com sucesso!",
            tratamento: tratamentoPopulado
        });
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao criar tratamento", erro: error.message });
    }
}

async function atualizar(req, res) {
    try {
        const tratamentoAtualizado = await Tratamento.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .populate({
                path: 'paciente',
                select: 'nome cpf dataNascimento genero email telefone endereco historicoMedico'
            })
            .populate({
                path: 'consulta',
                populate: {
                    path: 'medico',
                    select: 'nome especialidade email telefone departamento'
                }
            });

        if (tratamentoAtualizado) {
            res.json({
                mensagem: "Tratamento atualizado com sucesso!",
                tratamentoAtualizado
            });
        } else {
            res.status(404).json({ mensagem: "Tratamento não encontrado!" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao atualizar tratamento", erro: error.message });
    }
}

async function excluir(req, res) {
    try {
        const tratamentoExcluido = await Tratamento.findByIdAndDelete(req.params.id)
            .populate({
                path: 'paciente',
                select: 'nome cpf dataNascimento genero email telefone endereco historicoMedico'
            })
            .populate({
                path: 'consulta',
                populate: {
                    path: 'medico',
                    select: 'nome especialidade email telefone departamento'
                }
            });

        if (tratamentoExcluido) {
            res.json({
                mensagem: "Tratamento excluído com sucesso!",
                tratamentoExcluido
            });
        } else {
            res.status(404).json({ mensagem: "Tratamento não encontrado!" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao excluir tratamento", erro: error.message });
    }
}

module.exports = {
    buscarTodos,
    buscarPorID,
    criar,
    atualizar,
    excluir
};
