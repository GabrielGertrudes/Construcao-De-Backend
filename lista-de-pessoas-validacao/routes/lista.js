const express = require('express');
const router = express.Router();

let pessoas = [
    {
        id: 1,
        nome: "João",
        idade: 20,
        email: "joao@email.com",
        telefone: "61900010002"
    },
    {
        id: 2,
        nome: "Rafael",
        idade: 26,
        email: "rafael@email.com",
        telefone: "61430312302"
    },
    {
        id: 3,
        nome: "Gabriel",
        idade: 22,
        email: "gabriel@email.com",
        telefone: "612023106702"
    }
];

// READ -> Buscar todas as pessoas
router.get('/pessoas', (req, res) => {
    res.json(pessoas);
});

// READ -> Busca de pessoas por id
router.get('/pessoas/:id', (req, res) => {
    const id = req.params.id;
    const pessoa = pessoas.find(pessoa => pessoa.id == id);
    
    if (!pessoa) {
        return res.status(404).json({ mensagem: "Pessoa não encontrada" });
    }

    res.json(pessoa);
});

// CREATE -> Criar uma nova pessoa
router.post('/pessoas', (req, res) => {
    const novaPessoa = req.body;

    if (!novaPessoa || !novaPessoa.nome || !novaPessoa.idade || !novaPessoa.email || !novaPessoa.telefone) {
        return res.status(400).json({ mensagem: "Dados incompletos" });
    }

    const gerarNovoId = () => {
        return (pessoas.length + 1).toString();
    };

    novaPessoa.id = gerarNovoId();
    pessoas.push(novaPessoa);
    res.json({ mensagem: "Pessoa adicionada com sucesso!" });
});

// UPDATE -> Atualizar pessoa
router.put('/pessoas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = pessoas.findIndex(pessoa => pessoa.id == id);

    if (index === -1) {
        return res.status(404).json({ mensagem: "Pessoa não encontrada" });
    }

    const pessoaAtualizada = req.body;
    
    if (!pessoaAtualizada || !pessoaAtualizada.nome || !pessoaAtualizada.idade || !pessoaAtualizada.email || !pessoaAtualizada.telefone) {
        return res.status(400).json({ mensagem: "Dados incompletos" });
    }

    pessoas[index] = { ...pessoas[index], ...pessoaAtualizada };
    res.json(pessoas[index]);
});

//DELETE -> Deletar pessoa
router.delete('/pessoas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = pessoas.findIndex(pessoa => pessoa.id === id);

    if (index === -1) {
        return res.status(404).json({ mensagem: "Pessoa não encontrada" });
    }

    pessoas.splice(index, 1);
    res.json({ mensagem: "Pessoa removida com sucesso!" });
});

module.exports = router;
