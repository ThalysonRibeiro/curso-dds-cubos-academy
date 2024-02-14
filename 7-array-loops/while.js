//while = enquanto for verdade ele fica executando
const nomesDeEstudantes = ['jose', 'joao', 'maria', 'joana', 'andre'];
let indice = 0;

while (indice < nomesDeEstudantes.length) { //enquanto
    console.log(nomesDeEstudantes[indice]);
    indice++;
}
//ou assim

while (indice < 5) {
    //5 não tem nada pois o indeice só´vai ate 4 pois começa do 0
    console.log(nomesDeEstudantes[indice]);
    indice++;
}


