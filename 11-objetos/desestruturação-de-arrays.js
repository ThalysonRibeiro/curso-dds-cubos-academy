const array = [1, 2, 3, 4, 5, 6];

// const a = array[0];
// const b = array[1];
// const [a, ...resto, b] = array; // não funciona
//o resto quem quser o ultimo
const [a, b, ...resto] = array;

console.log(a, b, resto);