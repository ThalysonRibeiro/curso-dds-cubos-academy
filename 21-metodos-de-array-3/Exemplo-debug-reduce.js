//Exemplo debug reduce
const array = [0, 1, 2, 3, 4];

const valorReduce = array.reduce(function (acumulador, elementAtual, index, array) {
    acumulador = acumulador + elementAtual;
    return acumulador;
}, 10);
console.log(valorReduce);