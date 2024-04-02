const fs = require('fs');

console.log('antes de ler');


//leitura de arquivo síncrono
//const teste = fs.readFileSync('teste.txt').toString();
//console.log(teste);

fs.readFile('teste.txt', function (erro, data) {
    if (erro) {
        console.log(erro);
    } else {
        console.log(data.toString());
    }
});
fs.readFile('tes.txt', (erro, data) => {
    if (erro) {
        console.log(erro);
    } else {
        console.log(data.toString());
    }
});



console.log('depopis de ler');