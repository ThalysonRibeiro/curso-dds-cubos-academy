//função dentro do objeto
const pessoa = {
    nome: "João",
    idade: 12,
    profissao: "estudante",
    aprentar: function () {
        const faixaEtaria = this.determinandofaixaEtaria(this.idade);
        console.log(`Sou ${this.nome}, sou um(a) ${faixaEtaria} de ${this.idade} anos e sou ${this.profissao}`);
    },
    determinarFaixaEtaria: function () {
        if (this.idade <= 21) {
            return "Jovem";
        } else if (this.idade < 65) {
            return "Adulto(a)";
        } else {
            return "Idoso(a)";
        }

    }
};
pessoa.aprentar();
console.log(pessoa.determinarFaixaEtaria());


const console = {
    num_de_caracteres: 40,
    log: function (texto) {
        //faz o codigo imprimir as coisas no terminal.
    }
}


