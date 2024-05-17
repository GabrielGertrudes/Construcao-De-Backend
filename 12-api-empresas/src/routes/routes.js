const express = require('express')
const router = express.Router()

// controllers
const CargoController = require('../controllers/CargoController')
const DepartamentoController = require('../controllers/DepartamentoController')


// validators
const { validarID } = require('../validators/idValidator')
const { validarCargo } = require('../validators/CargoValidator')
const { validarDepartamento } = require('../validators/DepartamentoValidator')


// Cargo
router.get('/cargos', CargoController.buscarTodos)
router.get('/cargos/:id', validarID, CargoController.buscarPorID)
router.post('/cargos', validarCargo, CargoController.criar)
router.put('/cargos/:id', validarID, validarCargo, CargoController.atualizar)
router.delete('/cargos/:id', validarID, CargoController.excluir)


// Departamentos


// Funcionarios







module.exports = router