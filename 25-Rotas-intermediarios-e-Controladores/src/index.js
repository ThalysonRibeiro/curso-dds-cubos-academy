const express = require('express');
const {
    filtrarProfessores,
    encontrarUmProfessor
} = require('./controladores/professores');

const app = express();

const promeiroIntermediario = function (requisicao, resposta, next) {
    console.log("Passei no promeiro intermediario");
    // return resposta.send('algo deu errado');
    next();//proseguir
}

const segundoIntermediario = function (requisicao, resposta, next) {
    console.log("Passei no segundo intermediario");
    // return resposta.send('algo deu errado');
    next();//proseguir
}

const intermediarioDaRota = function (requisicao, resposta, next) {
    console.log("Passei no intermediario da rota");
    // return resposta.send('algo deu errado');
    next();//proseguir
}

//intermediario
// app.use(promeiroIntermediario);
//intermediario
// app.use(segundoIntermediario);


//http://localhost:3000/professores
app.get('/professores', intermediarioDaRota, filtrarProfessores);

//http://localhost:3000/professores/:id
app.get('/professores/:id', encontrarUmProfessor);

app.listen(3000);
