//Exemplo de ordenação numérica crescente e decrescente

//ordenação padrão
const numeros = [3, 20, 13, 50, 1, 4, 2, 99];
numeros.sort();
console.log("Ordenação padrão = ", numeros);
//resultado:
//Ordenação padrão =[1, 13, 2, 20, 3, 4, 50, 99]


//ex: crescente
numeros.sort((primeiroElemento, segundoElemento) => {
    if (primeiroElemento < segundoElemento) {
        return -1;
    }
    if (primeiroElemento > segundoElemento) {
        return 1;
    }
    return 0;
});
console.log("Ordenação crescente = ", numeros);
//resultado:
//Ordenação crescente =[1, 2, 3, 4, 13, 20, 50, 99]


//ex: decrescente
numeros.sort(function (primeiroElemento, segundoElemento) {
    if (primeiroElemento < segundoElemento) {
        return 1;
    }
    if (primeiroElemento > segundoElemento) {
        return -1;
    }
    return 0;
});
console.log("Ordenação decrescente = ", numeros);
//resultado:
//Ordenação decrescente = [99, 50, 20, 13, 4, 3, 2, 1]