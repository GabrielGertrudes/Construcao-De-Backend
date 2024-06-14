// routes/index.js

const express = require('express');
const router = express.Router();
const medicoController = require('../controllers/medicoController');
const pacienteController = require('../controllers/pacienteController');
const consultaController = require('../controllers/consultaController');
const tratamentoController = require('../controllers/tratamentoController');
const prescricaoController = require('../controllers/prescricaoController');
const autenticacaoController = require('../controllers/autenticacaoController');
const { validarID } = require('../validators/idValidators');

// médicos
router.get('/medicos', medicoController.buscarTodos);
router.get('/medicos/:id', validarID, medicoController.buscarPorID);
router.post('/medicos', medicoController.criar);
router.put('/medicos/:id', validarID, medicoController.atualizar);
router.delete('/medicos/:id', validarID, medicoController.excluir);

// pacientes
router.get('/pacientes', pacienteController.buscarTodos);
router.get('/pacientes/:id', validarID, pacienteController.buscarPorID);
router.post('/pacientes', pacienteController.criar);
router.put('/pacientes/:id', validarID, pacienteController.atualizar);
router.delete('/pacientes/:id', validarID, pacienteController.excluir);

// consultas
router.get('/consultas', consultaController.buscarTodos);
router.get('/consultas/:id', validarID, consultaController.buscarPorID);
router.post('/consultas', consultaController.criar);
router.put('/consultas/:id', validarID, consultaController.atualizar);
router.delete('/consultas/:id', validarID, consultaController.excluir);

// tratamentos
router.get('/tratamentos', tratamentoController.buscarTodos);
router.get('/tratamentos/:id', validarID, tratamentoController.buscarPorID);
router.post('/tratamentos', tratamentoController.criar);
router.put('/tratamentos/:id', validarID, tratamentoController.atualizar);
router.delete('/tratamentos/:id', validarID, tratamentoController.excluir);

// prescrições
router.get('/prescricoes', prescricaoController.buscarTodos);
router.get('/prescricoes/:id', validarID, prescricaoController.buscarPorID);
router.post('/prescricoes', prescricaoController.criar);
router.put('/prescricoes/:id', validarID, prescricaoController.atualizar);
router.delete('/prescricoes/:id', validarID, prescricaoController.excluir);

// autenticação
router.post('/auth/registrar', autenticacaoController.registrar);
router.post('/auth/login', autenticacaoController.login);

module.exports = router;
