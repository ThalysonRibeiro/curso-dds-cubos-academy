//Testa se ao mesnos um dos elemen tos do array passam pelo teste implementado na função callback, passada como argumneto e retorna true ou false
const letras = ['a', 'b', 'c'];

letras.some(function (elementoAtual) {
    return elementoAtual === 'c';
});
// return true

{
    const letras = ['a', 'b', 'c'];

    {
        function minhaFuncaoCallnack(nome) {
            return nome === "Camila";
        }
        const resultado = letras.some(minhaFuncaoCallnack);
    }
    {
        const letras = ['Maria', 'Rafael', 'Camila'];
        const resultado = letras.some(function (nome) {
            return nome === "Camila";
        });

        console.log(resultado);
    }
}

{
    const numenros = [1, 2, 2, 4, 5];

    {
        function minhaFuncaoCallnack(numero) {
            return numero % 2 === 0;

        }
        const resultado = numenros.some(minhaFuncaoCallnack);
    }
    {
        const resultado = numenros.some(function (numero) {
            return numero % 2 === 0;
        });
        console.log(resultado);

    }
}