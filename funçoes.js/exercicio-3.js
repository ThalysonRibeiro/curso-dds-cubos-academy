

function determinandofaixaEtaria(idade) {
    if (idade <= 21) {
        return "Jovem";
    } else if (idade < 65) {
        return "Adulto(a)";
    } else {
        return "Idoso(a)";
    }


}

function apresentando(pessoa) {
    const faixaEtaria = determinandofaixaEtaria(pessoa.idade);
    console.log(`Sou ${pessoa.nome}, sou um(a) ${faixaEtaria} de ${pessoa.idade} anos e sou ${pessoa.profissao}`);
}
const pessoa1 = {
    nome: "Rafael",
    idade: 31,
    profissao: "DEV"
}
apresentando(pessoa1);



const apresentandopessoa = apresentando(pessoa1);
console.log(apresentandopessoa);