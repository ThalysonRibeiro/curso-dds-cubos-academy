const valorDaCompra = 100;
const numeroDeParcelas = 3;

if (numeroDeParcelas === 1) {
    //a vista - 10% de desconto
    const desconto = valorDaCompra * 10 / 100;
    const valorAPagar = valorDaCompra - desconto;
    console.log(`Vocer deve pagar R$ ${valorAPagar}, pois a vista tem 10% de desconto.`);
} else if (numeroDeParcelas >= 2 && numeroDeParcelas <= 6) {
    //parcelado sem juros
    const valorDParcela = (valorDaCompra / numeroDeParcelas).toFixed(2);
    console.log(`Você deve pagar em ${numeroDeParcelas}x sem juros de R$ ${valorDParcela}`);
} else if (numeroDeParcelas >= 7 && numeroDeParcelas <= 12) {
    //parcelado com juros
    const valorApagarComJuros = (valorDaCompra * (1 + 1 / 100) ** numeroDeParcelas).toFixed(2);
    const valorDParcela = (valorApagarComJuros / numeroDeParcelas).toFixed(2);
    console.log(`Você deve pargar em ${numeroDeParcelas}x de R$ ${valorDParcela} totalozando  R$ ${valorApagarComJuros} devido a incidencia de juros`);
} else {
    //número de parcelas inválido
    console.log("Número de parcelas inválido.")
}

