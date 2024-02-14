//delcare uma variavel que armazena um objeto contendo as seguintes propiedades: nome, idade, tem cnh e aplidos.

//depois , faça um programa que imprime na tela o belo texo abaixo, subistituindo so dados pessoais pelos dados do objetos:

// "José tem 30 anos, 1.73m de altura, possui CNH e os seguintes apelidos:-Jr - Juninho"

const meusDados = {
    nome: 'Thalyson',
    idade: 31,
    temCNH: false,
    apelidos: ['-Rafa boy', '-Rafinha']
};
meusDados.nome = "José";
meusDados.idade = 30;
meusDados.altura = 1.73;
meusDados.temCNH = true;
meusDados.apelidos = ['Jr', 'Juninho'];
let textCNH = "";
if (meusDados.temCNH) {
    textCNH = "possui CNH"
} else {
    textCNH = "não possui CNH";
}

console.log(`${meusDados.nome} tem ${meusDados.idade} anos, ${meusDados.altura}m de altura,${textCNH}, e os seguintes apelidos:
-${meusDados.apelidos[0]}
-${meusDados.apelidos[1]}`);