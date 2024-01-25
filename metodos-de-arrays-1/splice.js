//splice, bem complexo.
//Altera o conteúdo de uma lista, removendo o zero ou mais itens de uma array num determinado índice.
//Opcionalmente , pode-se inserir um pou mais itens no local onde outros foram deletados.
//não faz uma copia, ele modifica.
const lista = ["a", "b", "c", "d", "f"];
lista.splice(1, 2, "f");
console.log(lista);//["a", "f", "d", "e"];

//array.splice(indice[, deleteConunt[, elemento1[, ...[, elemento]]]]);
//array.splice(inidce); // SpiderMonker/firefox extension
//pesquisar no MDN
//indice - indice o que deve inicar a alterar a lista.
//deleteConunt - um inteiro o número de antigos elementos que devem ser removidos.

//o retorno é sempre uma lsita contendo os elementos removidos.


//Exemplo com splice().
array0 = ["a", "b", "c", "d", "f"];
lista.splice(1, 2, "f", "h", "g");
console.log(lista);//a f h g e

array1 = ["a", "b", "c", "d", "f"];
lista.splice(1, 0, "f");
console.log(array1);// a f b c d e

//lista1.push("f");
lista1 = ["a", "b", "c", "d", "f"];
lista1.splice(lista.length, 0, "f");
console.log(lista1);

//lisata2.pop();
lista2 = ["a", "b", "c", "d", "f"];
lista2.splice(lista2.length - 1, 1);
console.log(lista2);

//lista3.shift();
lista3 = ["a", "b", "c", "d", "f"];
lista3.splice(0, 1);
console.log(lista3);

//lista4unshift();
lista4 = ["a", "b", "c", "d", "f"];
lista4.splice(0, 0, "f");
console.log(lista4);