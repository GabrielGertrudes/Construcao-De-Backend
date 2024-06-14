const express = require('express');
const router = express.Router();

const autenticacaoController = require('../controllers/autenticacaoController');
const { validarUsuario, validarLogin } = require('../validators/autenticacaoValidator');

router.post('/auth/registrar', validarUsuario, autenticacaoController.registrar);

router.post('/auth/login', validarLogin, autenticacaoController.login);

module.exports = router;
