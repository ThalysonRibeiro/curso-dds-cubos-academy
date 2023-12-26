//usar string template
let x = 10, y = 2;

let resultado = x + y;
//let mensagem = "A soma de " + x + " e " + y + " é " + resultado;
console.log(`A soma de ${x} e ${y} é ${resultado}`); //A soma de 10 e 2 é 12

resultado = x - y; // A subtração de 10 e 2 é 8
//mensagem = "A subtração de " + x + " e " + y + " é " + resultado;
console.log(`A subtração de ${x} e ${y} é ${resultado}`);

resultado = x * y; // A multiplicação de 10 e 2 é 20
//mensagem = "A multiplicação de " + x + " e " + y + " é " + resultado;
console.log(`A multiplicação de ${x} e ${y} é ${resultado}`);

resultado = x / y; // A divisão de 10 e 2 é 5
//mensagem = "A divisão de " + x + " e " + y + " é " + resultado;
console.log(`A divisão de ${x} e ${y} é ${resultado}`);