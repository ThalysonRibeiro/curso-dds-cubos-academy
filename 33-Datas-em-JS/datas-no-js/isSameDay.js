const { isSameDay } = require('date-fns');
let resultado = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0));
console.log(resultado);