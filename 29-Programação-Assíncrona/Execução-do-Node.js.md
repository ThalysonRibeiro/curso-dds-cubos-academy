# `Execução do Node`

**Event Loop**

``` javascript

const fs = require('fs');

console.log('Olá!');

fs.readFile('texto.txt', (err, data) => {
    if (err) {
        console.log('Erro:', err);
    } else {
        console.log('Leu com sucesso:', data.toString());
    }
});

fs.readFile('texto2.txt', (err, data) => {
    if (err) {
        console.log('Erro:', err);
    } else {
        console.log('Leu com sucesso:', data.toString());
    }
});

console.log('Fim!');

```

``` javascript

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Olá!');
});

app.listen(8000);

```