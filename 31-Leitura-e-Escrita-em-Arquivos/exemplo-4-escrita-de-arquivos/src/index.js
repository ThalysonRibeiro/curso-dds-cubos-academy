const express = require('express');
const { escritaDeArquivos, escritajson } = require('./controladores/escrita');

const app = express();

app.use(express.json());

app.get('/', escritaDeArquivos);
app.post('/pessoas', escritajson);

app.listen(3000);