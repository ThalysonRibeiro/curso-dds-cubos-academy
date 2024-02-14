//simbolo de identico é ===
//=== tem que ter o mesmo conteudo e ser do mesmo tipo
//tring e string ou number e number
// !== simbolo de não é identico
//== verifica apenas o conteudo
//=== verifica o conteudo e o tipo
//!==verifica se é diferente
// basicamente thru é sim e false é não
{
    const ehIdentico = 18 === 18;
    console.log(ehIdentico); //thrue
}
{
    const ehIdentico = "18" === 18;
    console.log(ehIdentico); //false
}
{
    const ehIdentico = "18" == 18;
    console.log(ehIdentico); //thrue
}

{
    const ehIdentico = "18" === "18";
    console.log(ehIdentico); //thue
}

{
    const ehIdentico = "18" !== "18";
    console.log(ehIdentico);// false
}