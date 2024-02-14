//condição se "if"
//condição else "se não"
const idade = 29;

if (idade >= 18) {
    //executado caso a condição seja verdadeira. Executa o que está dentro do s parentes.
    console.log("É maior de idade");
} else {
    //só vai ser executado se a condição for falsa
    console.log("É menor de idade");
}
console.log("Fim do codigo");


//possibilidade alternativa não recomendada

{
    const idade = 29;

    if (idade >= 18)

        console.log("É maior de idade");
    else

        console.log("É menor de idade");

    console.log("Fim do codigo");
    //sem chaves só pode ser usada uma linha de codigo.
}