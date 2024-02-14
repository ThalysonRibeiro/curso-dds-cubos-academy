//Em alguns outros paies é comum que se ultilize virgul a ao invés de ponto para separação das casas decimais.
//faça um programa que altera uma string desse formato para o formato que estamos constumados no brasil com pornot.
//por exemplo, o numero 1,350,000 deve ser transformado para 1.350.000.

// {
//     let numero = "1,350,000";
//     numero = numero.replace(",", ".");
//     numero = numero.replace(",", ".");
//     numero = numero.replace(",", ".");
//     console.log(numero);
// }
function replaceAll(origninal, text, newText) {
    while (origninal !== origninal.replace(text, newText)) {
        origninal = origninal.replace(text, newText);
    }
    return origninal;
}
let numero = "1,350,000,000,000,000,00";
console.log(replaceAll(numero, ",", "."));


