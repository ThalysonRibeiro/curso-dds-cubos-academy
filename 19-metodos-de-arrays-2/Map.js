//Executa a função callback pasada como argumneto para cada elemento do array e retorna um novo array como resultado.

const numero = [1, 2, 3, 4, 5];
const dobro = numero.map(function (elementoAtual) {
    return elementoAtual + 2;
});
console.log(dobro);

const usuarios = [
    { nome: "Blake", sobrenome: "Wilson", idade: 31 },
    { nome: "Denzel", sobrenome: "Foster", idade: 43 },
    { nome: "Bruna", sobrenome: "Silva", idade: 17 },
];

const newArray = usuarios.map(function (usuario) {
    return {
        nomeCompleto: `${usuario.nome} ${usuario.sobrenome}`, idade: usuario.idade
    }
});

console.log(newArray);