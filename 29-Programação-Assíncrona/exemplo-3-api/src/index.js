const express = require('express');
const {
    busacarCidade,
    descricaoDoPacote
} = require('./controlador/cidade');


const app = express();

app.get('/', busacarCidade);
app.get('/pacote/:nomePacote', descricaoDoPacote);

app.listen(3000);