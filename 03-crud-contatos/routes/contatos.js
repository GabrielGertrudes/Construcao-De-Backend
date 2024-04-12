const express = require('express')
const router = express.Router()

// "banco de dados local" lista mockada
const listaContatos = ["João", "Pedro", "Rafael"]

// READ -> Buscar todos os contatos
router.get('/contatos', (req, res) => {
    res.json(listaContatos)
})

// READ -> Busca de contato por id
router.get('/contatos/:id', (req, res) => {
    const id = req.params.id
    res.json(listaContatos[id])
})

// CREATE -> Criar um contato
router.post('/contatos', (req, res) => {
    const contato = req.body
    listaContatos.push(contato.nome)
    res.json({ mensagem: "Contato criado com sucesso!" })
})

// DELETE -> Deletar um contato
router.delete('/contatos/:id', (req, res) => {
    const id = req.params.id
    listaContatos.splice(id, 1)
    res.json({ mensagem: "Contato excluido com sucesso!" })
})

// UPDATE -> Atualizar um contato
router.put('/contatos/:id', (req, res) => {
    const id = req.params.id
    const contatoAlterado = req.body
    listaContatos[id] = contatoAlterado.nome
    res.json({ mensagem: "Contato alterado com sucesso!" })
})

module.exports = router
