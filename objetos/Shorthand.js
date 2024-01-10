const casa = {
    sala: 2,
    cozinha: 1,
    quartos: 2,
    banheiro: 3,
    garagem: 1,
}
const carro = {
    marca: "Toyota",
    modelo: "Etios",
    ano: 2020,
    potencia: 80
}

const pessoa = {
    nome: "José",
    altura: 1.73,
    pseo: 60,
}

const coisaDeUmaPessoa = {
    pessoa,
    casa,
    carro //= carro: carro, mas só quando a varivael com o mesmo nome for identico.
}
console.log(coisaDeUmaPessoa);

//Shorthand = atalho, quando o nome da propiedade e a variavel tem o mesmo nome o js da um  atalho.