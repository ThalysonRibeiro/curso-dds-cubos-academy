//Dado o array de carros abaixo, crie uma função que receba dois argumnetos, o array de carros e o campo a ser ordenados. A função deve retornar os resultados ordenados de acordo com o campo informado no segundo argumento.

const carros = [
    { nome: 'corola', marca: 'toyota', ano: '2020', cor: 'prata' },
    { nome: 'argo', marca: 'fiat', ano: '2021', cor: 'preto' },
    { nome: 'ranger', marca: 'ford', ano: '2021', cor: 'prata' },
    { nome: 'hilux', marca: 'toyota', ano: '2018', cor: 'branco' },
];
function ordenandoCarros(arrayCarros, campoOrdenado) {
    arrayCarros.sort(function (primeiro, segundo) {
        return primeiro[campoOrdenado].localeCompare(segundo[campoOrdenado]);
    });
    console.log("Ordenado carros = ", arrayCarros);
}

ordenandoCarros(carros, 'nome');
//resultado:
// Ordenado carros =  [
//     { nome: 'argo', marca: 'fiat', ano: '2021', cor: 'preto' },
//     { nome: 'corola', marca: 'toyota', ano: '2020', cor: 'prata' },
//     { nome: 'hilux', marca: 'toyota', ano: '2018', cor: 'branco' },
//     { nome: 'ranger', marca: 'ford', ano: '2021', cor: 'prata' }
//   ]