function corrigirProva(prova) {
    if (!prova.questoes || prova.questoes.length === 0) {
        console.error("A prova não possui questões.");
        return;
    }

    let questCorreta = 0;

    for (const quest of prova.questoes) {
        if (quest.resposta === quest.correta) {
            questCorreta++;
        }
    }

    if (prova.questoes.length === 0) {
        console.error("A prova não possui questões para corrigir.");
        return;
    }

    const valorPorQuest = prova.valor / prova.questoes.length;
    const notaDaProva = (valorPorQuest * questCorreta).toFixed(2);

    console.log(`O aluno(a) ${prova.aluno} acertou ${questCorreta} questões e obteve nota ${notaDaProva}`);
}

const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        { resposta: "a", correta: "b" },
        { resposta: "c", correta: "c" },
        { resposta: "e", correta: "b" },
        { resposta: "b", correta: "b" },
        { resposta: "c", correta: "c" }
    ]
};

corrigirProva(prova);
