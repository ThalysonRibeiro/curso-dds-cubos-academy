const { getCityFromZipcode, getPackageDescriptionNpm } = require("utils-playground");

const busacarCidade = async (req, res) => {
    // const cidade = await getCityFromZipcode('78040190');
    const cidade1 = getCityFromZipcode('78040190');
    const cidade2 = getCityFromZipcode('59125102');

    const promise = await Promise.all([cidade1, cidade2]);


    // console.log(promise);

    const [res1, res2] = promise;

    res.send(`A cidade encontrada foi: ${res1} e ${res2} `);//só funciona com string template

}

async function descricaoDoPacote(req, res) {
    const { nomePacote } = req.params;

    const descricaoPacote = await getPackageDescriptionNpm(nomePacote);

    return res.send(descricaoPacote);
}

module.exports = {
    busacarCidade,
    descricaoDoPacote
}