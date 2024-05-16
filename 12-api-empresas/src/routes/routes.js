const express = require('express')
const router = express.Router()

const CargoController = require('../controllers/CargoController')


// Cargo
router.post('/cargos', CargoController.criar)




// Funcionarios



// Departamentos







module.exports = router