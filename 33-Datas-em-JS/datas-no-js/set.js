const { set } = require('date-fns');
let resultado = set(new Date(2014, 8, 20),
    {
        year: 2015,
        month: 9,
        date: 20
    });
console.log(resultado);

let resultado2 = set(new Date(2014, 8, 1, 1, 23, 45),
    {
        hours: 12
    });
console.log(resultado2);