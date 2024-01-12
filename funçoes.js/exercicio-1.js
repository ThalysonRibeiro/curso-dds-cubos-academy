//Declare uma variavel que armazena um objeto contendo dados de uma pessoa: nome, idade, profissão e altura.

//Faça uma função que tem um parâmetro e não retorna valores. Essa função deve imprimir na tela a apresentação de uma pesso a, seguindo o modelo abaixo.

//"Olá! Meu nome é João, sou um jovem de 12 anos, 1.4m de altura e sou esturandde."


const pessoa = {
    nome: "João",
    idade: 12,
    profissao: "estudante"
};

function apresentando(pessoa, altura) {
    console.log(`Olá! Meu nome é ${pessoa.nome}, sou um jovem de ${pessoa.idade} anos, ${altura}m de altura e sou esturandde.`);
};

apresentando(pessoa, 1.4);