const fs = require('fs/promises');


(async function () {
    const arquivojson = await fs.readFile('teste.json');

    const pessoas = JSON.parse(arquivojson);

    // console.log(arquivojson.toString());
    pessoas.push({
        node: "rafa",
        idade: 32
    });

    const arrayJson = JSON.stringify(pessoas);

    console.log(pessoas[0].idade);
    console.log(pessoas);
    console.log(arrayJson);

})();