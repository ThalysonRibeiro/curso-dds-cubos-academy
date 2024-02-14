

const produtosCosumidos = [
    {
        nome: 'cerveja',
        precoUnitario: 1000,
        quantidade: 7,
    },
    {
        nome: 'agua',
        precoUnitario: 700,
        quantidade: 3,
    },
    {
        nome: 'churrasco',
        precoUnitario: 1600,
        quantidade: 7,
    }
]
const cartaoDocliente = {
    nome: "Rafael",
    idade: 31,
    produtosCosumidos//shorthand
}
console.log(cartaoDocliente);

//imprima o nome do cliente
console.log(cartaoDocliente.nome); //rafael

//imprima a idade do cliente
console.log(cartaoDocliente.idade);//31

// modifique a idade do cliente
cartaoDocliente.idade = 32;//32

//imprima a nova idade do cliente
console.log(cartaoDocliente.idade);//32

//imprima o nome do primiero produto consumido
console.log(cartaoDocliente.produtosCosumidos[0].nome);//cerveja

//imprima o preço unitario do ultimo produto consumido por ele
console.log(cartaoDocliente.produtosCosumidos[produtosCosumidos.length - 1].precoUnitario);//1000