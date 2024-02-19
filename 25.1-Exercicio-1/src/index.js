const express = require('express');
const { listarCarros, filtrarCarro } = require('./controladores/carros');

const app = express();

app.get('/carros', listarCarros);
app.get('/carros/:id', filtrarCarro);

app.listen(3000);