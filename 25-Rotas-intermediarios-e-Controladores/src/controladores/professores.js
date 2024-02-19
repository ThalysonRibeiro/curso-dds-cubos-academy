const professores = require('../bancoDeDados');

const filtrarProfessores = function (requisicao, resposta) {
    // console.log(requisicao);
    // console.log(requisicao.query);
    const { stack } = requisicao.query; //desestruturação
    let resultado = professores;

    console.log("Cheguei no controlador de listagem do professor")

    if (stack) {
        resultado = professores.filter(function (professor) {
            return professor.stack === stack;
        });
    }
    resposta.send(resultado);
}

const encontrarUmProfessor = function (requisicao, resposta) {
    console.log("rota para encotrar um professor")
    // console.log(requisicao.params.id);
    const professorEncontrado = professores.find(function (professor) {
        return professor.id === Number(requisicao.params.id);
    });
    resposta.send(professorEncontrado);
}

module.exports = {
    filtrarProfessores,
    encontrarUmProfessor
}