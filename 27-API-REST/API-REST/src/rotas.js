const express = require('express');
// const instrutores = require('./controladores/instrutores');
const {
    listarInstrutores,
    obterInstrutor,
    cadastrarInstrutor,
    atualizarInstrutor,
    atualizarStatusDoInstrutor,
    excluirInstrutor
} = require('./controladores/instrutores');

const {
    cadastrarAula,
    listarAulas,
    obterAulas,
    obterAulasInstrutor
} = require('./controladores/aulas');

const rotas = express();


rotas.get('/instrutores', listarInstrutores);
rotas.get('/instrutores/:id', obterInstrutor);
rotas.post('/instrutores', cadastrarInstrutor);
rotas.put('/instrutores/:id', atualizarInstrutor);
rotas.patch('/instrutores/:id/status', atualizarStatusDoInstrutor);
rotas.delete('/instrutores/:id', excluirInstrutor)

//ex:1
rotas.post('/instrutores/:idInstrutor/aulas', cadastrarAula);
rotas.get('/aulas', listarAulas);
rotas.get('/aulas/:id', obterAulas);
rotas.get('/instrutores/:idInstrutor/aulas', obterAulasInstrutor);

module.exports = rotas;