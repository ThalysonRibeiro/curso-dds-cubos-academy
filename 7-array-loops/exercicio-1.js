1 //crie um array com 5 nomes de países.
const nomeDePaises = ['mexico', 'brasil', 'alemanha', 'argentina', 'jamaica'];
2 //adicione um país ao fim da lista.
nomeDePaises.push('colombia');
3 //imprima na tela.
console.log(nomeDePaises);
4 //remova um país do fim da lista.
nomeDePaises.pop();
5 //imprima a lista na tela.
console.log(nomeDePaises);
6 //adicione um país ao inicio da lista.
nomeDePaises.unshift('colombia');
7 //imprima a lista na tela.
console.log(nomeDePaises);
8 //remova um pais do inicio da lista.
nomeDePaises.shift();
9 //imprima a lista na tela
console.log(nomeDePaises);
10 //imprima o ultima pais da lista tela.
console.log(nomeDePaises[4]);
const ultimo = nomeDePaises[nomeDePaises.length - 1];
console.log(ultimo);
11 //imprima o segundo pais da lista na tela.
console.log(nomeDePaises[1]);
12 //imprima o pais de indice 2 na tela.
console.log(nomeDePaises[2]);