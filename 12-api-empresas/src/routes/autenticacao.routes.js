const express = require('express')
const router = express.Router()

// Controller
const AutenticacaoController = require('../controllers/AutenticacaoController')

// Validators
const { validarUsuario, validarLogin } = require('../validators/AutenticacaoValidator')

// Rotas
router.post('/auth/registrar', validarUsuario, AutenticacaoController.registrar)

router.post('/auth/login', validarLogin, AutenticacaoController.login)



module.exports = router
