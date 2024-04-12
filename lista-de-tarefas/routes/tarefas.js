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

module.exports = router;
