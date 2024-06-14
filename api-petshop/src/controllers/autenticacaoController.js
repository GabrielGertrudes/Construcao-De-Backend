const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Usuario = require('../models/Usuario');
require('dotenv').config(); 

async function registrar(req, res) {
    const { nome, email, senha } = req.body;

    try {
        
        const usuarioExistente = await Usuario.findOne({ email });
        if (usuarioExistente) {
            return res.status(400).json({ mensagem: 'Já existe um usuário com este email!' });
        }

        
        const senhaCriptografada = await bcrypt.hash(senha, 10);

       
        const novoUsuario = new Usuario({
            nome,
            email,
            senha: senhaCriptografada,
        });

       
        const usuarioSalvo = await novoUsuario.save();

        res.status(201).json({ mensagem: 'Usuário registrado com sucesso!', usuario: usuarioSalvo });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensagem: 'Erro ao registrar usuário', erro: error.message });
    }
}

async function login(req, res) {
    const { email, senha } = req.body;

    try {
        
        const usuario = await Usuario.findOne({ email });
        if (!usuario) {
            return res.status(404).json({ mensagem: 'Usuário não encontrado!' });
        }

        
        const senhaValida = await bcrypt.compare(senha, usuario.senha);
        if (!senhaValida) {
            return res.status(401).json({ mensagem: 'Senha incorreta!' });
        }

       
        const payload = {
            id: usuario._id,
            email: usuario.email,
            nome: usuario.nome,
           
        };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensagem: 'Erro ao realizar o login', erro: error.message });
    }
}

module.exports = {
    registrar,
    login,
};
