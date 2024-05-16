const Cargo = require('../models/Cargo')

async function criar(req, res) {
    const cargo = new Cargo(req.body)
    const cargoCriado = await cargo.save()
    res.status(201).json(cargoCriado)
}
    








module.exports = {
    criar
}