//pegar uma fatia do string
const nome = "Ricardo";

// omitindo fimSlice
console.log(nome.slice(0)); // retorna 'Ricardo'

// undefined fimSlice
let i; // variável criada sem atribuir valor
console.log(nome.slice(0, i)); // retorna 'Ricardo'

// passando número maior que o tamanho da string
console.log(nome.slice(0, 7)); // retorna 'Ricardo'


var str1 = "A manhã está sobre nós", // o tamanho de str1 é 22
    str2 = str1.slice(3, 10),
    str3 = str1.slice(2, -2),
    str4 = str1.slice(13),
    str5 = str1.slice(22);
console.log(str2); // retorna 'anhã es'
console.log(str3); // retorna 'manhã está sobre n'
console.log(str4); // retorna 'sobre nós'
console.log(str5); // retorna <empty string>'