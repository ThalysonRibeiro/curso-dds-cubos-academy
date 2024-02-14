//serve para saber em qual indece está o texto que procura, se não tiver rerotorna +1

"eu vou ganhar 100k no preocesso".indexOf(ganhar);
// saber se o email é valido
//tem que ter um @
// tem que ter um ponto depois do @

const emailMeu = "rafinha.head@gmail.com";

const indexArroba = emailMeu.indexOf("@");
const indexpontoDepoisDoArroba = emailMeu.indexOf(".", indexArroba);
if (indexpontoDepoisDoArroba > indexArroba) {
    console.lgo("Email stende as requisições");
} else {
    console.log("Não a nenhum ponto apóes o arroba");
}
