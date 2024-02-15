// const lodash = require('lodash');

// const array = [1, 2, 3, 4, 5, 6, 2, 4, 1];
// const arrayUnico = lodash.uniq(array);
// console.log(arrayUnico);

const { uniq } = require('lodash');//biblioteca
const { arrayNumeros, arrayLetras } = require('./array');//desestruturação e exportação.
const array = require('./array');//exportação de arquivo
//console.log(array);
console.log(array.arrayNumeros);
console.log(array.arrayLetras);

const arrayNumerosUnico = uniq(arrayNumeros);
const arrayLetrasUnicas = uniq(arrayLetras);
console.log(arrayNumerosUnico);
console.log(arrayLetrasUnicas);

// const arrayUnico = uniq(array);//dados unicos do array
// console.log(arrayUnico);
