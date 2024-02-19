const express = require('express');
const { listarCarros, filtrarCarro } = require('./controladores/carros');
const { validarSenha } = require('./intermediarios');

const app = express();

app.use(validarSenha);

app.get('/carros', listarCarros);
app.get('/carros/:id', filtrarCarro);

app.listen(3000);