const date = new Date(2021, 0, 1, 13);
console.log(date);
console.log(+date);

console.log(date.getUTCHours());

const { zoneTimeToUtc, utcToZonedTime, format } = require('date-fns-tz');

//set the to "2018-09-01T16:01:36.386z"
const utcDate = zoneTimeToUtc('2018-09-01 18:01:36.386', 'Europ/Berlin');

//obtain a Date instance that will render the equivalent Berlin time fot the UTC date
const daete = new Date('018-09-01 18:01:36.386z');
const timeZone = 'Europe/Berlin';
const zoneDate = utcToZonedTime(date, timeZone);
// zoneDate cloud be used ti initiable a date picker or display the formatted local date/time

// Set the output to "1.9.2018 18:01:386 GMT+02:00 (CEST"
const pattern = 'd.M.yyy HH:mm.SSS \'GMT\' XXX (z)';
const output = format(zoneDate, pattern, { timeZone: 'Europe/Berlin' });
console.log(output);