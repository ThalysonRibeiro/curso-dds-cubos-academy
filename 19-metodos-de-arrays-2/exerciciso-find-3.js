// Crie uma função que receba o nome da marca de um carro e um array de objetos contendo as propiedades nome, marca, ano e cor. Afunção deve encontrar dados de carro, a partir do nome da marca, no array passado como argumento e deve exibir como retorno.

const carros = [
    { nome: 'opala', marca: 'chevrolet', ano: 1979, cor: 'preto' },
    { nome: 'uno', marca: 'fiat', ano: 2001, cor: 'amarelo' },
    { nome: 'fusca', marca: 'volkswagen', ano: 1981, cor: 'branco' },
    { nome: 'gol', marca: 'volkswagen', ano: 1992, cor: 'banco' },
];

const resultado = carros.find(function (carro) {
    return carro.marca === 'chevrolet';
});
console.log(resultado);

{
    function marcaDoCarro(marca, arrayCarros) {
        const resultado = arrayCarros.find(function (carro) {
            return carro.marca === marca;
        });
        console.log(resultado);
    }
    marcaDoCarro('fiat', carros);
}