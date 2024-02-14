function apresentando(pessoa) {
    if (pessoa.idade < 25) {
        return `Sou ${pessoa.nome}, sou um(a) jovem de ${pessoa.idade} anos e sou ${pessoa.profissao}`;
    } else if (pessoa.idade < 65) {
        return `Sou ${pessoa.nome}, sou um(a) adulto de ${pessoa.idade} anos e sou ${pessoa.profissao}`;
    } else {
        return `Sou ${pessoa.nome}, sou um(a) idosa de ${pessoa.idade} anos e sou ${pessoa.profissao}`;
    }
}
const pessoa1 = {
    nome: "Rafael",
    idade: 31,
    profissao: "DEV"
}
apresentando(pessoa1);
const pessoa2 = {
    nome: "jones",
    idade: 35,
    profissao: "cozinheiro"
}
apresentando(pessoa2);
const pessoa3 = {
    nome: "Amelia",
    idade: 1716,
    profissao: "vampira"
}
apresentando(pessoa3);


const apresentandopessoa = apresentando(pessoa1);
console.log(apresentandopessoa);