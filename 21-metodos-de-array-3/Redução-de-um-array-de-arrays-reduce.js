//Redução de um array de arrays

const array = [
    [0, 1],
    [2, 3, 4],
    [14, 22, 98]
];

const arrayReduzido = array.reduce(function (acumulador, elementAtual, index, array) {
    acumulador = [...acumulador, ...elementAtual];
    return acumulador;
}, []);
console.log("Array reduzido = ", arrayReduzido);