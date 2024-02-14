//escopo é uma região do codigo onde as variaveis exitem.
//serve para separar partes do codigo.
//possivel usar variaveis com mesmo nome em excopos diferentes.
//variaveis criada fora do escopo podem ser usadas dentro do escopo, o contrario não pode ser usado. criando dentro não pode usar fora.
//o escopo separa para partes do codigo.

//ex:
const idade = 31;
console.log(idade);

{
    const idade = 31;
    console.log(idade);
}