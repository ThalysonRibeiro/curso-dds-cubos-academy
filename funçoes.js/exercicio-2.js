//faça uma função que tem um parâmentro chamando idade e quq determine a faixa etária de uma pessoa a paritir dessa idade.

//21 anos ou menos -> jovem
//22 a 65 anos -> Adulto(a)
//66 ou mais anos -> idoso(a)

//sua função deverá retonar um string que informa se a pessoa é jovem , adulto(a) ou idoso(a)


function determinandofaixaEtaria(idade) {
    if (idade <= 21) {
        return "Jovem";
    } else if (idade < 65) {
        return "Adulto(a)";
    } else {
        return "Idoso(a)";
    }


}

const verificandoIdade = determinandofaixaEtaria(77);

console.log(verificandoIdade);