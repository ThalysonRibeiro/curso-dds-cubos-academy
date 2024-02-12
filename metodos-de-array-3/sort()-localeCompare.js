//Comparar strings com o localeCompare
// Retorna um número que indica se a string de referência vem antes, depois ou se é igual a string comparda.

//ex:
const letraA = 'a';
const letraC = 'c';

letraA.localeCompare(letraC);
// 'a' vem antes de 'c'
//resulta em um valor negativo

letraC.localeCompare(letraA);
// 'c' vem depois de 'a'
//resulta em um vlaor positivo

letraC.localeCompare(letraC);
//'c' é igual a 'c'
//o resultado é zero
