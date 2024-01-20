//transfomar "Jose Messias Pereira"
//em Jose Messias Pereira

const nomeCompleto = "jose messias pereira";
const arrayDeNomes = nomeCompleto.split(" ");
let formatado = "";
for (const nomes of arrayDeNomes) {
    let primeiraLetra = nomes.slice(0, 1);
    let restanteDoNome = nomes.slice(1);

    formatado += primeiraLetra.toUpperCase() + restanteDoNome + " ";
}
console.log(formatado.trim());

