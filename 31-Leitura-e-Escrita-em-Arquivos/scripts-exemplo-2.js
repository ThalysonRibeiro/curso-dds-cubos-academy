const fsPromises = require('fs/promises');
const fs = require('fs');

console.log('antes de ler');

// const teste = fsPromises.readFile('teste.txt');

// teste.then(function (data) {
//     console.log(data.toString());
// });

// teste.catch(function (erro) {
//     console.log(erro);
// })

// console.log(teste);
(async function () {
    const teste = await fsPromises.readFile('teste.txt');
    console.log(teste);
    console.log(teste.toString());
})();


console.log('depopis de ler');
