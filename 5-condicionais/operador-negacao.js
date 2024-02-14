const temIngresso = false;

{
    if (temIngresso === true) {

    } else {
        console.log("Pessoa tem ingresso.");
    }
}

{
    if (temIngresso === true) {
        console.log("Pessoa sem ingresso.");
    }
}
//! inverte o valor da variavel(se vora verdadeiro tranforma em falso  e vice e versa), mas não salva na variavel
{
    if (!temIngresso) {
        console.log("Pessoa sem ingresso.");
    }
    console.log(`varivael temIngresso: ${temIngresso}`);
}