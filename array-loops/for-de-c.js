//estrutura para percorrer todos os indices do array
const nomesDeEstudantes = ['jose', 'joao', 'maria', 'joana', 'andre'];
{
    //outra fomr ade percorrero array
    let indice = 0;
    while (indice < nomesDeEstudantes.length) { //enquanto
        console.log(nomesDeEstudantes[indice]);
        indice++;
    }
}
//i = indice abreviado
//usar abreviação da variavel quando for usar o <for de c> usar a primeira letra
{
    //forma clasica de percorrer o array
    for (let i = 0; i < nomesDeEstudantes.length; i++) {
        console.log(nomesDeEstudantes[i]);
    }
}
//primeira parte é antes de tudo
//segunda é a pergunta e depois vai pra execução
//terceira é o incremento