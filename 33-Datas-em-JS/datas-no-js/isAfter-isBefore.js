const { isAfter, isBefore } = require('date-fns');
let resultado = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11));
console.log(resultado);
let resultado2 = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11));
console.log(resultado2);
