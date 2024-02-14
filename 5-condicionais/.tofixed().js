//Determinando o número de casas decimais - .toFixed().
const valorDaCompra = 100;
const numeroDeParcelas = 3;

if (numeroDeParcelas === 1) {
    //a vista - 10% de desconto
    const desconto = valorDaCompra * 10 / 100;
    const valorAPagar = valorDaCompra - desconto;
    console.log(`Vocer deve pagar R$ ${valorAPagar}, pois a vista tem 10% de desconto.`);
} else {
    //parcelado
    const valorDParcela = (valorDaCompra / numeroDeParcelas).toFixed(2);
    console.log(`Você deve pagar ${numeroDeParcelas} parcelas de R$ ${valorDParcela}`);
}