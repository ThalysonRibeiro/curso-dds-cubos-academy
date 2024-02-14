// ou  || qualquer uma já da verdadeira
const temIngresso = true;
const censura = 16;
const idade = 14;
const estsComOsPais = true;
// tem infresso E
// tem idade maior ou igual a censura OU está com os pais.
//o que está dentro do s parentes do if, ele já tenta tranformar em verdaderio ou falso.
if (temIngresso) {
    if (idade >= censura || estsComOsPais) {
        console.log("Pode entrar");
    } else {
        console.log("Barrada");
    }
} else {
    console.log("Barrada");
}