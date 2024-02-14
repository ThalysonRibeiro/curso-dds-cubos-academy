// Retonrna o indice de primeiro elemento de array, correspondendo a condição implementada na função callback, passada como argumento. caso contrário, retorna -1.
const numeros = [1, 2, 3, 4, 5];

numeros.findIndex(function (elemento) {
    return elemento === 5;
});

numeros.findIndex((elementoAtual) => {
    return elementoAtual === 5;
});



//exemplo
const carros = [
    { nome: 'opala', marca: 'chevrolet', ano: 1979, cor: 'preto' },
    { nome: 'uno', marca: 'fiat', ano: 2001, cor: 'amarelo' },
    { nome: 'fusca', marca: 'volkswagen', ano: 1981, cor: 'branco' },
    { nome: 'gol', marca: 'volkswagen', ano: 1992, cor: 'banco' },
    { nome: 'mustang', marca: 'ford', ano: 2024, cor: 'vermelho' },
];
const resultado = carros.findIndex(function (carro) {
    return carro.nome === 'mustang';
});
console.log(resultado);