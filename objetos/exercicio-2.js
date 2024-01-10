//crie uma objeto que represente o cartão de ocnsumo de um cliente:

//nome do cliente
//idade do cliente
//produtos consumidos

//cada produto pode ter:

//nome do produto
// preço do produto
//quantidade comprada

//pode nvetar os daods. coloque pelo menos 3 produtos.
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
    produtosCosumidos
}
console.log(cartaoDocliente);
