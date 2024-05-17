const mongoose = require('mongoose')

function validarID(req, res, next) {
    const isValid = mongoose.Types.ObjectId.isValid(req.params.id)
    if (isValid) {
        next()
    } else {
        return res.status(400).json({ mensagem: "ID inválido" })
    }
}

module.exports = {
    validarID
}