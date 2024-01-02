//forma mais pratica de se percorrer o arrary usando js

//sintaxe
// for (let item of Array) {
//     o codigo entre as chaves se repetirá uma vez para cada item no array
// }

//codigo
// for (let nome of nomes) {
//     console.log(nome);
// }

//usar caso não precisar do indice, variavel ou qualque outra cousa possivel
const nomes = ['jose', 'joao', 'maria', 'joana', 'andre'];
for (let nome of nomes) {
    console.log(nome);
}