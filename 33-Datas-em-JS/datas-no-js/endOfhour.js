const { endOfHour } = require('date-fns');
const resultado = endOfHour(new Date(2014, 8, 2, 11, 55));
console.log(resultado);