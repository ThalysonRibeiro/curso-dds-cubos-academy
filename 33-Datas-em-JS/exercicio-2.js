//A final foi vencida pelo Brasil con dois Gols de Ronaldo Fenômeno:
//1. O primeiro aos 22 minutos do segundp tempo
//2. O segundo aos 34 minutos do segundo tempo  Sabendo que um tempo tem 45 minutos e que são 15 minutos de intervalo, crie dois objetos com datas que ocorreram cada um dos gols. Use Timestamps.

const finalDaCopa = new Date(2002, 5, 30, 8);
const inicioTimestamp = +finalDaCopa;

const primeiroGolTimestamp = inicioTimestamp + (45 + 15 + 22) * 60 * 1000;
const primeiroGolDate = new Date(primeiroGolTimestamp);

console.log("primeir gol ", primeiroGolDate);

console.log("segundo gol ", new Date(+finalDaCopa + (45 + 15 + 34) * 60 * 1000));


