const express = require('express')
const router = express.Router()

// Controller
const AutenticacaoController = require('../controllers/AutenticacaoController')

// Validators
const { validarUsuario } = require('../validators/AutenticacaoValidator')

// Rotas
router.post('/auth/registrar', validarUsuario, AutenticacaoController.registrar)




module.exports = router
