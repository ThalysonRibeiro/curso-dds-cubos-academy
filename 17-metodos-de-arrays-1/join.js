//Junta todos do elementos de um array em uma string, separando-os com virgula, e retorna esta string.
//Opcionalamente, pode-se passar uma string como argumento para ser colocada entre os intes.

const opcoes = ["Uma", "Outra"];

let resultado = opcoes.join();
console.log(resultado);// Uma, Outra
resultado = opcoes.join("");
console.log(resultado); //Umaoutra
resultado = opcoes.join(" ou ");
console.log(resultado);// Uma ou Outra



function inevertendoString(texto) {
    const arrayDeLetras = texto.split("");
    arrayDeLetras.reverse();
    const textoInvertido = arrayDeLetras.join("");//se deixar vazio, vai por uma virgulça entre as letras.
    console.log(textoInvertido);
}
inevertendoString("Cubos Academy");