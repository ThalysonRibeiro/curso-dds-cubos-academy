const fs = require('fs/promises');
const { texto } = require('../banco-de-dados/dados');


async function escritaDeArquivos(req, res) {
    await fs.writeFile('./src/banco-de-dados/b.txt', texto);
    res.json('ok');

}
async function escritajson(req, res) {
    const { nome, idade } = req.body;

    try {
        const teste = await fs.readFile('./src/banco-de-dados/usuarios.json');

        const pessoas = JSON.parse(teste);

        pessoas.push({ nome, idade });
        // console.log(pessoas);
        const pessoasStringfy = JSON.stringify(pessoas);
        // console.log(pessoasStringfy);

        await fs.writeFile('./src/banco-de-dados/usuarios.json', pessoasStringfy);

        return res.json('Pessoa cadastrada com sucesso!');

    } catch (erro) {

        return res.json(`Deu erro: ${erro.message}`);

    } finally {

        console.log('Isso sempre será executado!');

    }


}
module.exports = {
    escritaDeArquivos,
    escritajson
}