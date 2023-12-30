//minha tentativa
{
    const valorDaCompra = 100;
    const numeroDeParcelas = 2;

    const desconto = valorDaCompra * 90 / 100;

    if (numeroDeParcelas === 1) {
        console.log(`Se pagar a vista tem 10% de desconto  e pargará R$ $R ${desconto} `);
    } else if (numeroDeParcelas > 1) {
        const valorParcelado = valorDaCompra / numeroDeParcelas;
        console.log(`se caso for pagar parcelado irá pagar ${numeroDeParcelas} parcelas de R$ ${valorParcelado}`);
    }
}
//resposta
const valorDaCompra = 100;
const numeroDeParcelas = 2;

if (numeroDeParcelas === 1) {
    //a vista - 10% de desconto
    const desconto = valorDaCompra * 10 / 100;
    const valorAPagar = valorDaCompra - desconto;
    console.log(`Vocer deve pagar R$ ${valorAPagar}, pois a vista tem 10% de desconto.`);
} else {
    //parcelado
    const valorDParcela = valorDaCompra / numeroDeParcelas;
    console.log(`Você deve pagar ${numeroDeParcelas} parcelas de R$ ${valorDParcela}`);
}