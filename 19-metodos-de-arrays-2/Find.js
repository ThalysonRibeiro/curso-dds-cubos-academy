//Retorna o primeiro elemento do array, correspondente a condição implementada na função callback, passada como argumento. caso contrário, retorna underfined.
const numeros = [1, 2, 3, 4, 50];

const resultado = numeros.find(function (elementoAtual) {
    return elementoAtual > 2;
});
//return 3
console.log(resultado);

const usuarios = [
    { nome: 'joão', idade: 23 },
    { nome: 'maria', idade: 18 },
    { nome: 'ana', idade: 30 },
    { nome: 'rodrigo', idade: 17 }
];
const resultado1 = usuarios.find(function (usuario) {
    return usuario.nome === 'joão';
});

console.log(resultado1);

const nomes = ['jhonas', 'michael', 'milena', 'harvey'];

const resultado2 = nomes.find(function (nome) {
    return nome === 'harvey';
});
console.log(resultado2);