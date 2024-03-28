const { getCityFromZipcode, getStateFromZipcode } = require('utils-playground');

// getCityFromZipcode('59125102').then(cidade => {
//     console.log(cidade);
// }).catch((erro) => {
//     console.log(erro);
// })

// const cidade = getCityFromZipcode('59125102');

// cidade.then(cidade => {
//     console.log(cidade);
// });

// cidade.catch((erro) => {
//     console.log(erro.message);
// })

// console.log(cidade);

// getCityFromZipcode('59125102').then(cidade => {
//     console.log(cidade);
//     getStateFromZipcode('59125102').then(estado => {
//         console.log(estado);
//     }).catch((erro) => {
//         console.log(erro);
//     });

// }).catch((erro) => {
//     console.log(erro);
// });

//async / awaait

// (async function () {
//     const cidade = await getCityFromZipcode('59125102');

//     console.log(cidade);

//     const uf = await getStateFromZipcode('59125102');

//     console.log(uf);
// })();

//padrão função
// async function teste() {
//     return '123';
// }

// //arrow function
// const teste = async () => {

// }

// console.log(teste());