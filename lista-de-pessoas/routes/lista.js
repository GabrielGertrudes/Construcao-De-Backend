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
        nome: "rafael",
        idade: 26,
        email: "rafael@email.com",
        telefone: "61430312302"
    },
    {
        id: 3,
        nome: "gabriel",
        idade: 22,
        email: "gabriel@email.com",
        telefone: "612023106702"
    }
];

// READ -> Buscar todas as pessoas. colocar /pessoas no postman
router.get('/', (req, res) => {
    res.json(pessoas);
});

// READ -> Busca de pessoas por id /pessoas/:id no postman
router.get('/:id', (req, res) => {
    const id = req.params.id;
    const pessoa = pessoas.find(pessoa => pessoa.id == id);
    res.json(pessoa);
});

// CREATE -> Criar uma nova pessoa /pessoas no postman
router.post('/', (req, res) => {
    const gerarNovoId = () => {
        return (pessoas.length + 1).toString();
    };
    const novaPessoa = req.body;
    novaPessoa.id = gerarNovoId();
    pessoas.push(novaPessoa);
    res.json({ mensagem: "Pessoa adicionada com sucesso!" });
});

// UPDATE -> Atualizar pessoa /pessoas/:id no postman
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = pessoas.findIndex(pessoa => pessoa.id == id);
    pessoas[index] = { ...pessoas[index], ...req.body };
    res.json(pessoas[index]);
});

//DELETE -> Deletar pessoa /pessoas/:id no postman
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    pessoas = pessoas.filter(pessoa => pessoa.id !== id);
    res.json({ message: "Pessoa removida com sucesso!" });
});

module.exports = router;
