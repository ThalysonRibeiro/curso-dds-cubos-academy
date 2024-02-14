//slice
//Faz uma cópia de parte de um array, retornado essa cópia.
//O array original não é modificado.
const opcoes = ["Eu", "Você", "ele", "nós"];
const resultado = opcoes.slice(1, 3);
console.log(resultado); //[ 'você', 'ele']


//Exemplo com slice
//Faça uma função que , deado um determinado conjunto de daos , descarta os primeiro e os últimos 10% dados, aproveitando apenas os 80% centrais.

function filtrar80(dados) {
    const starIndex = Math.round(dados.length * 10 / 100);
    const endeIndex = Math.floor(dados.length * 90 / 100);
    const fatia = dados.slice(starIndex, endeIndex);
    console.log(starIndex);
    console.log(endeIndex);
    console.log(fatia);
}


const dados = [0, 1, 5, 7, 10, 33, 55, 60, 57, 85, 45, 68, 49, 57, 89, 69, 57, 33, 24, 11, 5, 3, 1, 0, 0];

filtrar80(dados);