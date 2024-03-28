const { getCityFromZipcode } = require('utils-playground');

//síncrono
// console.log('inicio');

// for (let index = 1; index <= 5; index++) {
//     console.log(index);
// }
// console.log('fim');

//asssíncrono
// console.log('inicio');

// getCityFromZipcode('78040190').then(cidade => {
//     console.log(cidade);
// });

// console.log('fim');

const cidade = getCityFromZipcode('59125102');
console.log(cidade);

// Promise { <pending> }