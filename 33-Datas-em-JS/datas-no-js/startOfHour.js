const { startOfHour } = require('date-fns');
const resultado = startOfHour(new Date(2014, 8, 2, 11, 55));
console.log(resultado);