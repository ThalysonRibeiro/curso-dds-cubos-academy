//cria um novo arrary com todos os elementos correpondetes a condição implementaada na função callback, passada como argumento.
const numeros = [1, 2, 3, 4, 5];

numeros.filter(function (elementoAtual) {
    return elementoAtual > 5;
});
/// return [3, 4 5]


const arryDeNumeros = [5, 7, 8, 9, 1, 55, 99, 100];

const resultado = arryDeNumeros.filter(function (numero) {
    return numero === 5 || numero > 7;
});
console.log(resultado);