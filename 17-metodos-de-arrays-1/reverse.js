{
    //reverse, modifica o origina
    //Inverte a ordem dos items de um array.
    //Os ultimo s serão os primeiros.
    const opcoes = ["Eu", "Tu", "Eles"];
    const resultado = opcoes.reduce();
    console.log(resultado);//['ele', 'você', 'Eu']
}

const numeros = [1, 2, 3, 4, 5];
const resultado = numeros.reverse();
console.log("Original", numeros);
console.log("Resultado", resultado);
resultado.pop();
console.log(numeros);
