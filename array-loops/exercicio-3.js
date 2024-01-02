//faça um programa que calcula e imprime na tela a soma dos inten de um array.
const numeros = [22, 67, 2, 58, 47, 6, 7, 8]; // tamho 8 | indice 7

let soma = 0;
for (let i = 0; i < numeros.length; i++) {
    //sera executado para i de 0 até 7 | o não sera mais executado
    soma = soma + numeros[i];
    //soma += numeros[i];
}
console.log(soma);