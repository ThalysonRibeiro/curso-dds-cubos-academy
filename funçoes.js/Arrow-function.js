//guarda uma funçao dentro da variavel isso se chama arrow function
//declaração tradicional
function somra(x, y) {
    const resultado = x + y;
    return resultado;
}

console.log(soma(5, 2));

//declaração com arrow function. ela não faz o hoisting
//ex abaixo
const soma = (x, y) => {
    const resultado = x + y;
    return resultado;
}
//não da pra chamra essa função antes de declarar
