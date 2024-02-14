const temIngresso = true;
const censura = 16;
const idade = 14;
// se ela tem ingresso, passa nessa primiera condição
// se ela tem mais de 16 anos ela passa na segunda condição então pode engtrar no cinema.
if (temIngresso === true) {
    if (idade >= censura) {
        console.log("Pode entrar");
    } else {

        console.log("Barrada pela censura");
    }

} else {
    console.log("Foi barrada por falta de ingressso");
}