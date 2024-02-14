
//Dado o array de usuários abaixo, faça a ordenação dos resultados de forma crescente, segubndo o id de cada usuário. Após a ordenação crescente, faça a ordenação decrescente.

const usuarios = [
    { id: 11, nome: 'joão', idade: 23 },
    { id: 2, nome: 'maria', idade: 18 },
    { id: 4, nome: 'ana', idade: 30 },
    { id: 1, nome: 'rodrigo', idade: 17 },
    { id: 123, nome: 'rodrigo', idade: 17 },
];
console.log("orden de chegada dos dados", usuarios);

//ordem crescente
usuarios.sort(function (primeiro, segundo) {
    return primeiro.id - segundo.id;
});
console.log("Ordem crescente", usuarios);

//ordem decrescente
usuarios.sort(function (primeiro, segundo) {
    return segundo.id - primeiro.id;
});
console.log("Ordem  decrescente", usuarios);