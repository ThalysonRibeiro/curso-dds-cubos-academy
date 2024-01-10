//faça um programa que imprime uma mensagem amigavel (que inclui chamar o cliente pelo nome) que iforma o valor que ele deve pagar.

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

let totalAPagar = 0;
for (produto of produtosCosumidos) {
    totalAPagar += produto.precoUnitario * produto.quantidade;
}
const totalFormatado = (totalAPagar / 100).toFixed(2);
console.log(`Ola, Sr(a) ${cartaoDocliente.nome} o valor consumido é de R$ ${totalFormatado} reais`);