//Dado o array de usuários abaixo, ultilize o reduce para filtrar o usuário que possui a maior idade dentre os elementos de array e retorne o objeto completoc com os dados do usuários encontrado.

const usuarios = [
    { id: 11, nome: 'joão', idade: 23 },
    { id: 2, nome: 'maria', idade: 18 },
    { id: 4, nome: 'ana', idade: 30 },
    { id: 1, nome: 'rodrigo', idade: 17 },
    { id: 123, nome: 'rodrigo', idade: 17 },
];

const maiorIdade = usuarios.reduce(function (acumulador, elementAtual, index, array) {
    let maior = acumulador;
    if (elementAtual.idade > maior.idade) {
        maior = elementAtual;
    }
    return maior;
});

console.log("Maior idade = ", maiorIdade);