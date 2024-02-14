//faça uma função que recebe parâmetros de tipo string e imprime na tela essa string invertida, ou seja, de trás pra frente.
//Dica: lembre-se que o metodo reverse() só pode ser chamado por arrays
const arrray = ["vai", "pra", "cima", "deles"];
function inevertendoTexto(reverte) {
    let revertendo = reverte.reverse();
    console.log(revertendo);
}
inevertendoTexto(arrray);


//função para inverter texto
{
    function inevertendoString(texto) {
        const arrayDeLetras = texto.split("");
        arrayDeLetras.reverse();
        let textoInvertido = "";
        for (const letra of arrayDeLetras) {
            // textoInvertido = textoInvertido + letra;
            textoInvertido += letra;// mesmo que a lina acima
        }
        console.log(textoInvertido);
    }
    inevertendoString("Cubos Academy");
}