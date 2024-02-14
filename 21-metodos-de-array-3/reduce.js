//reduce()
//Executa uma função callback, passada como argumento, para cada elemento do array, que resulta em apenas um valor de retorno.
//A função passada como argumento para o método reduce recebe 4 argumentos.
//1. acumulador - valor inicial (ou o valor do callback anterior).
//2. valorAtual - o  valor de elemnto atual.
//3. index - o indice atual.
//4. array - o array completo.
{
    const array = [0, 1, 2, 3, 4];
    array.reduce(function (acumulador, valorAtual, index, array) {
        return acumulador + valorAtual;
    });
    //resultado = 10
    //tabela de execução da função callback dentro do array, em cada chamada
    //           acumulador   valorAtual   index    array     retorno
    //primeira       0           1           1   [0,1,2,3,4]    1
    //segunda        1           2           2   [0,1,2,3,4]    3
    //terceira       3           3           3   [0,1,2,3,4]    6
    //querta         6           4           4   [0,1,2,3,4]    10

    array.reduce(function (acumulador, valorAtual, index, array) {
        return acumulador + valorAtual;
    }, 10);

    //           acumulador   valorAtual   index    array     retorno
    //primeira       10           0           1   [0,1,2,3,4]      10
    //segunda        10           1           2   [0,1,2,3,4]      11
    //terceira       11           2           3   [0,1,2,3,4]      13
    //querta         13           3           4   [0,1,2,3,4]      16
    //quinta         16           4           4   [0,1,2,3,4]      20


}

const array = [0, 1, 2, 3, 4];
//somando todos os numeros de um array
let somaTotal = array[0];
for (let i = 1; i < array.length; i++) {
    const elementAtual = array[i];
    somaTotal = somaTotal + elementAtual;
}
//console.log(somaTotal);


// const resultadoDeReduce = array.reduce(function (acumulador, elementAtual, index, array) {
//     return acumulador + elementAtual;
// });
// console.log("reduce", resultadoDeReduce);

const resultadoDeReduce = array.reduce(function (acumulador, elementAtual, index, array) {
    return acumulador + elementAtual;
}, 10);
console.log("reduce", resultadoDeReduce);