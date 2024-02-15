const express = require('express');

const app = express();

app.get('/usuarios', function (req, res) {
    const usuarios = [
        { id: 11, nome: 'joao', idade: 23 },
        { id: 2, nome: 'maria', idade: 18 },
        { id: 4, nome: 'ana', idade: 30 },
        { id: 1, nome: 'rodrigo', idade: 17 },
        { id: 123, nome: 'harvey', idade: 44 },
    ];
    res.send(usuarios);
});
app.listen(3001, function () {
    console.log("Servidor inicalizado na porta 3001");
});