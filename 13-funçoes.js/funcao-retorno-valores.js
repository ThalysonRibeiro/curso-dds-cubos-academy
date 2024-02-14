function verificarMaiorDeIdade(idade) {
    if (idade > - 18) {
        //é maior de idade
        return true;
    } else {
        //não é maior de idade
        return false;
    }
}

const valorRetornaddoPelaFuncao = verificarMaiorDeIdade(20);