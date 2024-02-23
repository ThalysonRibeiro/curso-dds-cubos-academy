let { identificadorAula, instrutores, aulas } = require('../banco-de-daos');

const cadastrarAula = (req, res) => {
    const { idInstrutor } = req.params;
    const { titulo, descricao } = req.body;

    const instrutor = instrutores.find(function (instrutor) {
        return instrutor.id === Number(idInstrutor);
    });

    if (!instrutor) {
        return res.status(404).json({ mensagem: "O instrutor não existe." });
    }

    const aula = {
        id: identificadorAula++,
        instrutor_id: Number(idInstrutor),
        titulo,
        descricao
    }

    aulas.push(aula);

    return res.status(201).json({ aula });

}

function listarAulas(req, res) {
    return res.status(200).json(aulas);
}

function obterAulas(req, res) {
    const { id } = req.params;

    const aula = aulas.find(function (aula) {
        return aula.id === Number(id);
    });

    if (!aula) {
        return res.status(404).json({ mensagem: 'Aula não encontrada.' });
    }

    return res.status(200).json(aula);
}

function obterAulasInstrutor(req, res) {
    const { idInstrutor } = req.params;

    const instrutor = instrutores.find(function (instrutor) {
        return instrutor.id === Number(idInstrutor);
    });

    if (!instrutor) {
        return res.status(404).json({ mensagem: "O instrutor não existe." });
    }

    const aulasEncontradas = aulas.filter(function (aula) {
        return aula.instrutor_id === instrutor.id;
    });

    return res.status(200).json(aulasEncontradas);
}

module.exports = {
    cadastrarAula,
    listarAulas,
    obterAulas,
    obterAulasInstrutor
}