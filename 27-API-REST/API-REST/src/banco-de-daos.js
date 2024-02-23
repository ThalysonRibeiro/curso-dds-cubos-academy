const bandoDeDados = {
    identificadorInstrutor: 3,
    identificadorAula: 2,
    instrutores: [
        {
            id: 1,
            nome: 'Rafa',
            email: 're.h@gmail.com',
            status: true
        },
        {
            id: 2,
            nome: 'Parzival',
            email: 'Parze.h@gmail.com',
            status: false
        },
    ],
    aulas: [
        {
            id: 1,
            instrutor_id: 1,
            titulo: 'primeiro servidor',
            descricao: 'construindo primeiro servidor'
        }
    ]

}

module.exports = bandoDeDados;