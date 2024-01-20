//em alguns outros paises é comum que se utilize ponto ao invés de virgula para separação das casas decimais.
//faça um programa que alteara uma string desse formato para o formato que estamos acostumados no brasil com virgula.
//por exmplo, o numero 97.50 deve ser transformado para 97,50.

const numero = "97.50";
const modificacao = numero.replace(".", ",");
console.log(numero);//não modificado
console.log(modificacao);//copia

//esse metodo só funciona com sttring, não com numeros, a não ser que faça os numero como string.

const numeroString = String(numero);