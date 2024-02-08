//De acordo com o array de produtos abaixo, crie uma novo array de produtos contendo nome, prelo e desconto. O valor de desconto, será de 10% com base no valor de cada produto.

const Produtos = [
    { nome: "arroz", preço: 500 },
    { nome: "macarrão", preço: 700 },
    { nome: "molho de tomate", preço: 125 },
    { nome: "treloso", preço: 320 },
];

const newArray = Produtos.map(function (produto) {
    return {
        nomeDoProduto: `${produto.nome}, preço: ${(produto.preço / 100).toFixed(2)
            }`, totalComDeDesconto: ((produto.preço * 10 / 100) / 100).toFixed(2)
    }
});
console.log(newArray);

//reposta
[
    { nomeDoProduto: 'arroz, preço: 5.00', totalComDeDesconto: '0.50' },
    { nomeDoProduto: 'macarrão, preço: 7.00', totalComDeDesconto: '0.70' },
    { nomeDoProduto: 'molho de tomate, preço: 1.25', totalComDeDesconto: '0.13' },
    { nomeDoProduto: 'treloso, preço: 3.20', totalComDeDesconto: '0.32' }
]  