//crie uma função que recebe um objetos de usuario que comtém as propiedades nome e idade. A função ddeve validar se todos os usuaios são maiores de idade. caso todos os usuarios sejam maiores, deverá exibir a mensagem "Festa liberada!", caso contrario , deverá exibir a mensagem  "Possui menor de idade".

const usuarios = [
    {
        nome: " Rafael",
        idade: 31
    },
    {
        nome: " Jhonson",
        idade: 19
    },
    {
        nome: " Thalyel",
        idade: 22
    },
    {
        nome: " Olivia",
        idade: 18
    }
];

function fiscalizacaoDaFesra(array) {


    const checagemDeIdade = usuarios.every(function (ElementoAtual) {
        return ElementoAtual.idade > 17;


    });

    if (checagemDeIdade) {
        console.log('Festa liberada!');
    } else {
        console.log('Possui menor de idade');

    }
}

fiscalizacaoDaFesra(usuarios);