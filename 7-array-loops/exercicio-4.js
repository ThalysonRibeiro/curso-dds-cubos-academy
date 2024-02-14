//faça um program aue conta quantoas letra 'a' exitem numa determinada palava.
//imorimao reultado.

const palavra = 'alemanha';

let soma = 0;
for (let letra of palavra) {
    if (letra === 'a') {
        soma++
    }
}
console.log(soma);