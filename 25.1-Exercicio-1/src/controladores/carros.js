const carros = require('../bamcoDeDados');

function listarCarros(requisicao, resposta) {
    const { marca, cor } = requisicao.query;
    let resultado = carros;
    if (marca) {
        resultado = resultado.filter(function (carro) {
            return carro.marca === marca;
        });
    }
    if (cor) {
        resultado = resultado.filter(function (carro) {
            return carro.cor === cor;
        });
    }
    resposta.send(resultado);

}

function filtrarCarro(requisicao, resposta) {
    const { id } = requisicao.params;
    const carroEncontrado = carros.find(function (carro) {
        return carro.id === Number(id);
    });
    resposta.send(carroEncontrado);
}

module.exports = {
    listarCarros,
    filtrarCarro
}