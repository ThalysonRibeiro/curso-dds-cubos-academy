//Preenche uma string, colocando text no inicio dela (várias vezes se necessário) até que a string antinja o tamanho length.
const ultimos4dig = "2345";
//const numCartao = ultimos4dig.padEnd(19, "**** ");
const numCartao = ultimos4dig.padStart(19, "**** ");
console.log(numCartao);