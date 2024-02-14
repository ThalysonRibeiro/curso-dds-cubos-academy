//de acordo com o array de professores abaixo, com suas respectivas staks, faça o seguinte:

const professores = [
    { nome: 'Guido', stack: 'back-end' },
    { nome: 'Vidal', stack: 'back-end' },
    { nome: 'Dani', stack: 'front-end' },
    { nome: 'Diego', stack: 'front-end' },
    { nome: 'Léo', stack: 'back-end' },
    { nome: 'Ruli', stack: 'front-end' },
];
//a) filtrar todos os professores de back-end
//b)filtar todos os professoresd e front-end

const professoresbackend = professores.filter(function (filtroDeStack) {
    return filtroDeStack.stack === 'back-end';
});
const professoresfrontend = professores.filter(function (filtroDeStack) {
    return filtroDeStack.stack === 'front-end';
});



console.log("Professores Back-end", professoresbackend, "Professores Front-end", professoresfrontend);