// importa o modulo do express
const express = require('express')
// cria um router
const router = express.Router()

// crio as minhas rotas

// GET /teste/tutorial
router.get('/tutorial', (req, res) => {
    res.json("BATEU NO /teste/tutorial GET")
})

// POST /teste/tutorial
router.post('/tutorial', (req, res) => {
    res.json("BATER NO /teste/tutorial POST")
})

// exrpotar o router
module.exports = router