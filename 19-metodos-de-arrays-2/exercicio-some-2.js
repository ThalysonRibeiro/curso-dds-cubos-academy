//Crie uma função que percorra um array com nomes de aquivos. A função deve verificar se possue um arquivo com a exteção".bat". Caso exista, deverá exibir a mensagem "Vírus detectado", caso contrário, deverá exibir a mensagem "Nenhum vírus encontrado".

const arquivos = [
    "derretendo.bat",
    "redação.txt",
    "scritp.js",
    "style.css",
    "index.html"
];
function analizandoArquivos(arrayArquivo) {
    const resultado = arquivos.some(function (arquivo) {
        const existeExtencao = arquivo.indexOf('.bat');
        return existeExtencao !== -1;
    });
    if (resultado) {
        console.log("Vírus detectado");
    } else {
        console.log("Nenhum vírus encontrado");

    }
}
analizandoArquivos(arquivos);