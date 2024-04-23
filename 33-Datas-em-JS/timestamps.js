//Um número que representa um momento da história. Esse número é a quantidade de milissegundos que passaram desde promeiro de janeiro de 1970, a 00:00:00:.000 em Greenwich

const finalDaCopa = new Date(2002, 5, 30, 8);

// const timestamp = finalDaCopa.getTime
const finalMaisUmaHora = +finalDaCopa + 1000 * 60 * 60;//add uma hora
const maisUmaHoraDate = new Date(finalMaisUmaHora);

console.log(finalDaCopa, maisUmaHoraDate);