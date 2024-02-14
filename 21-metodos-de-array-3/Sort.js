//sort()
//Ordena os elementos do próprio array. por padrão, a ordenação é de acordo com a tabela unicode.
//Opconalmente, recebe uma função callback que possui dois parâmetros, sendo eles, o primeiro e o segundo elemento a ser comparada.
//É importante lembrar que na tabela unicode, números vem antes de letras.

//Ordenação fornecendo função callbcak
//1. Se o retorno da função for um número menor que zero (negativo), o primeior parâmetro vem antes de segundo.
//2. Se o retorno da função for um número maior que zero (positivo), o segundo parâmetro vem antes do primeiro.
//3. Se o retorno da função for um número maior que zero, mantém o primeiro e o segundo parâmetro inalterados.

//uso padrão do sort()

const array = [2, 4, 1, 20, 3, 43];
array.sort(); //[1, 2, 20, 3, 4, 43]

const array1 = [2, 4, 1, 20, 3, 43];
array1.sort(function (a, b) {
    return a - b;
});
//[1, 2, 3, 4, 20, 43]



const pessoas = ['Maiza', 'Ana', 'Maicão', 'Christopher', 'Nolan'];
//ordenação crescente
pessoas.sort(function (a, b) {
    return a.localeCompare(b);
});
console.log("crescente", pessoas);

//ordenação decrescente
pessoas.sort(function (a, b) {
    return b.localeCompare(a);
});

console.log("decrescente", pessoas);


//novo exemplo de ordenação sort()

const numeros = [1, 22, 30, 4, 5, 6, 80, 100, 277, 99];
numeros.sort();
console.log(numeros);





{//Exemplo de ordenação numérica com subtração
    const numeros = [3, 2, 20, 13, 50, 1, 4, 13];

    //ordenação crescente
    numeros.sort(function (a, b) {
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        return 0;
    });
    console.log("Ordenação crescente", numeros);

    //ordenação decrescente
    numeros.sort(function (a, b) {
        if (a < b) {
            return 1;
        }
        if (a > b) {
            return -1;
        }
        return 0;
    });
    console.log("Ordenação decrescente", numeros);
}



{//forma simplificada do axemplo acima
    const numeros = [3, 2, 20, 13, 50, 1, 4, 13];
    //ordenação crescente
    numeros.sort(function (a, b) {
        return a - b; //b de a
    });
    console.log("Forma simplificada Ordenação crescente", numeros);

    //ordenação decrescente
    numeros.sort(function (a, b) {
        return b - a; //a de b
    });
    console.log("Forma simplificada Ordenação decrescente", numeros);

}