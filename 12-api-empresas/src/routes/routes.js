const express = require('express')
const router = express.Router()

// controllers
const CargoController = require('../controllers/CargoController')

// validators
const { validarCargo } = require('../validators/CargoValidator')


// Cargo
router.get('/cargos', CargoController.buscarTodos)
router.get('/cargos/:id', CargoController.buscarPorID)
router.post('/cargos', validarCargo, CargoController.criar)
router.put('/cargos/:id', validarCargo, CargoController.atualizar)
router.delete('/cargos/:id', CargoController.excluir)


// Funcionarios



// Departamentos







module.exports = router