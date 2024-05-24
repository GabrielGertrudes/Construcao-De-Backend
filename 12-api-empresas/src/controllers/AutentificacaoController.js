const Usuario = require('../models/Usuario')
const bcrypt = require('bcrypt')

async function registrar(req, res) {

    const {nome, email, senha} = req.bory

   const usuario = await Usuario.find({ email })

   if(usuario) {
    return res.status(400).json({ mensagem: "Este email já está cadastrado!" })
   }

   const hash = await bcrypt.hash(senha, 10)

  const novoUsuario =  new Usuario(
    {
        nome,
        email,
        senha: hash
    }
   )
   await novoUsuario.save()

   res.status(201).json({ mensagem: "Usuário cadastrado com sucesso!" })
}

module.exports = {
    registrar
}