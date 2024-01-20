// Exercicio - Slice

//quero obter apenas os dois digitos
//do estado de um cidade

const cidade = "Salvador-BA";
let estado = 0;
const penultimoIndex = cidade.length - 2;
cidade.slice(penultimoIndex);//faz o mesmo que o debaixo só que bem melhor e não vai dar erro e vai estar pronto para qualquer estado.
estado = cidade.slice(9, 11);

console.log(estado);