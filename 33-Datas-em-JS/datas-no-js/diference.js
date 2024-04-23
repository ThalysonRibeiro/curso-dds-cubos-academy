const { differenceInMilliseconds } = require('date-fns');

let result = differenceInMilliseconds(
    new Date(2014, 6, 2, 12, 30, 20, 600),
    new Date(2014, 6, 2, 12, 30, 20, 600)
);
//=> 1100