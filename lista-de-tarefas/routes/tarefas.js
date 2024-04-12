const express = require('express');
const router = express.Router();

// Array para armazenar as tarefas
let listaTarefas = [
    { id: "1", tarefa: "Lavar a louça" },
    { id: "2", tarefa: "Limpar a casa" },
    { id: "3", tarefa: "Estudar" }
];

// READ -> Recuperar todas as tarefas
router.get('/tarefas', (req, res) => {
    const listaOrdenada = listaTarefas.map(({ id, tarefa }) => ({ id, tarefa }));
    res.json(listaOrdenada);
});

// READ -> Recuperar uma tarefa específica por ID
router.get('/tarefas/:id', (req, res) => {
    const id = req.params.id;
    const tarefa = listaTarefas.find(tarefa => tarefa.id === id);
    
    res.json(tarefa);
    });

// CREATE -> Adicionar uma nova tarefa
router.post('/tarefas', (req, res) => {
    const gerarNovoId = () => {
        return (listaTarefas.length + 1).toString();
    };
    const novaTarefa = req.body;
    listaTarefas.push(novaTarefa);
    novaTarefa.id = gerarNovoId();
    res.json({ mensagem: "Tarefa adicionada com sucesso!" });
});

// UPDATE -> Atualizar uma tarefa existente
router.put('/tarefas/:id', (req, res) => {
    const id = req.params.id;
    const tarefaAtualizada = req.body;
    const index = listaTarefas.findIndex(tarefa => tarefa.id === id);

    tarefaAtualizada.id = id;

    listaTarefas[index] = tarefaAtualizada;

    res.json({mensagem: "Tarefa atualizada com sucesso!" });
});

// DELETE -> Remover uma tarefa da lista
router.delete('/tarefas/:id', (req, res) => {
    const id = req.params.id;
    const index = listaTarefas.findIndex(tarefa => tarefa.id === id);

    listaTarefas.splice(index, 1);

    res.json({ mensagem: "Tarefa removida com sucesso!" });
} );







module.exports = router;