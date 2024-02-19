const express = require('express');//inportando biblioteca

const app = express();//chamar express
//app pode ser qualquer nome, mas o padrão é app

app.get('/home', function (requisicao, resposta) {//ou rec e res que é o padrão
    resposta.send('Olá... esse é o meu primeiro servidor com o express.');
});
app.get('/', function (requisicao, resposta) {//ou rec e res
    resposta.send('Essa é minha rota principal.');
});
app.get('/array', function (requisicao, resposta) {//ou rec e res
    const array = [1, 2, 3, 4, 5];
    resposta.send(array);
});

app.listen(3000);

//Ctrl+C para parar o servidor.
//toda alteração que fizer tem que reiniciar o servidor.