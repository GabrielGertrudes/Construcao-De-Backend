const Usuario = require('../models/Usuario')
require('dotenv').config()

const JWT_SECRET = process.env.JWT_SECRET

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


async function registrar(req, res) {
    const { nome, email, senha } = req.body

    const usuario = await Usuario.findOne({ email })

    if (usuario) {
        return res.status(400).json({ mensagem: "Este e-mail já está cadastrado!" })
    }

    const hash = await bcrypt.hash(senha, 10)

    const novoUsuario = new Usuario(
        {
            nome,
            email,
            senha: hash
        }
    )

    await novoUsuario.save()

    res.status(201).json({ mensagem: "Usuário cadastrado com sucesso!" })
}


async function login(req, res) {

    const { email, senha } = req.body

    const usuario = await Usuario.findOne({ email })

    if (!usuario) {
        return res.status(401).json({ mensagem: "Usuário não encontrado!" })
    }

    const senhaValida = await bcrypt.compare(senha, usuario.senha)

    if (!senhaValida) {
        return res.status(401).json({ mensagem: "Senha incorreta!" })
    }

    const token = jwt.sign(
        {
            nome: usuario.nome,
            email: usuario.email
        },
        JWT_SECRET,
        {
            expiresIn: '10m'
        }
    )

    res.json(
        {
            mensagem: "Usuário logado com sucesso!",
            token
        }
    )

}





module.exports = {
    registrar,
    login
}