//ternario é uma forma mas simples de se fazer uma condoção, consegue fazer tudo em uma linha só.
{
    const saldo = 10;
    if (saldo === 1) {
        console.log(`você tem ${saldo}real`);
    } else {
        console.log(`você tem ${saldo}reais`);
    }
}
//Primeiro de tudo do ternario é a condição, se for verdade vai ficar guardado na variavel real bota uma ? e depois bota o que eu quero que seja retonrado no começo se a condição for verdade que neste caso é o string real. se não bota : para botar o que vai ser retornado caso a condição não seja verdade que a string reais. é resolvido da direita pra esquerda.
const saldo = 10;
const unidade = (saldo === 1 ? "real" : "reais");
console.log(`você tem ${saldo} ${unidade}`);
//é o mesmo que o exemplo abaixo
if (saldo === 1) {
    unidade = "real"
} else {
    unidade = "reais"
}
