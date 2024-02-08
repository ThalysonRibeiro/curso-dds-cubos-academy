//every()
//Testa se todos os elementos do arry passam pelo teste implementado nma função callback,l passada como argumento e retorna true ou false.


const numenros = [1, 2, 3, 4];
const resultadoNumeros = numenros.every((ElementoAtual) => {
    return ElementoAtual < 5;
})


const frutras = ['abacaxi', 'manga', 'maçancia'];

const resultado = frutras.every(function (ElementoAtual) {
    return ElementoAtual !== 'banana';
});

console.log(resultadoNumeros);
console.log(resultado);