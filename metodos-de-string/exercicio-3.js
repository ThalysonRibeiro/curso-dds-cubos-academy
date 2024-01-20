//faça uma função chamada imprimir data que tem 3 parêmetros: dia, mês e ano.
//essa função deve imprimir na tela a data passada como argumenteo no seguinte formantod, de modo que ela sempre tenha 8 digitos no total:]
// 01/01/2021
// 18/02/1991
//ultilize o padStar para garantir que isso aconteceça sempre passae argumento do tipo nunber.

function imprimirData(dia, mes, ano) {
    //duas opçoes de se transformar number em string
    const diaFormatado = String(dia).padStart(2, "0");
    const mesFormatado = `${mes}`.padStart(2, "0");
    console.log(`${diaFormatado}/${mesFormatado}/${ano}`);
}
imprimirData(1, 1, 2021);