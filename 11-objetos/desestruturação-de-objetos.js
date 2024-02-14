//Desestruturação de Objetos
//EX
const pessoa = {
    nome: "José",
    idade: 1.73,
    cidade: "salvador",
    profissão: "Dev"
};
// const nome = pessoa.nome;
// const idade = pessoa.idade;

const { nome, idade, ...outros } = pessoa;
console.log(nome, idade);
console.log(outros);

//O operador de espalhamento (spread operator) é um recurso do JavaScript que permite que um objeto iterável, como um array ou uma string, seja expandido em vários elementos individuais. Ele é representado por três pontos seguidos (...).