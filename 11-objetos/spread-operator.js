//O operador de espalhamento (spread operator) é um recurso do JavaScript que permite que um objeto iterável, como um array ou uma string, seja expandido em vários elementos individuais. Ele é representado por três pontos seguidos (...).

// spread (...), espalha o conteudo de um objeto, pode ser usao com array também
const pessoa = {
    nome: "José",
    idade: 1.73,
    cidade: "salvador",
    profissão: "Dev"
};

const endereço = {
    rua: "Aqui",
    numero: "32",
    bairo: "Bairro legal"
};

const objetoFundido = {
    ...pessoa,
    ...endereço
}
console.log(objetoFundido);