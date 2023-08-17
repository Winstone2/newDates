// Creates a Date object with the current date and time from the
// user's browser
var now = new Date();
console.log(now.toString() === 'Mon Apr 11 2016 16:10:41 GMT-0500 (Central Daylight Time)'); // true

// Creates a Date object at the Unix Epoch (i.e., '1970-01-01T00:00:00.000Z')
var epoch = new Date(0);
console.log(epoch.toISOString() === '1970-01-01T00:00:00.000Z'); // true

// Creates a Date object with the date and time 2,012 milliseconds
// after the Unix Epoch (i.e., '1970-01-01T00:00:02.012Z').
var ms = new Date(2012);
console.log(ms.toISOString() === '1970-01-01T00:00:02.012Z'); // true

// Creates a Date object with the first day of February of the year 2012
// in the local timezone.
var one = new Date(2012, 1);
console.log(one.toString() === 'Wed Feb 01 2012 00:00:00 GMT-0600 (Central Standard Time)'); // true

// Creates a Date object with the first day of the year 2012 in the local
// timezone.
// (Months are zero-based)
var zero = new Date(2012, 0);
console.log(zero.toString() === 'Sun Jan 01 2012 00:00:00 GMT-0600 (Central Standard Time)'); // true

// Creates a Date object with the first day of the year 2012, in UTC.
var utc = new Date(Date.UTC(2012, 0));
console.log(utc.toString() === 'Sat Dec 31 2011 18:00:00 GMT-0600 (Central Standard Time)'); // true
console.log(utc.toISOString() === '2012-01-01T00:00:00.000Z'); // true

// Parses a string into a Date object (ISO 8601 format added in ECMAScript 5.1)
// Implementations should assume UTC because of ISO 8601 format and Z designation
var iso = new Date('2012-01-01T00:00:00.000Z');
console.log(iso.toISOString() === '2012-01-01T00:00:00.000Z'); // true

// Parses a string into a Date object (RFC in JavaScript 1.0)
var local = new Date('Sun, 01 Jan 2012 00:00:00 -0600');
console.log(local.toString() === 'Sun Jan 01 2012 00:00:00 GMT-0600 (Central Standard Time)'); // true

// Parses a string in no particular format, most of the time. Note that parsing
// logic in these cases is very implementation-dependent, and therefore can vary
// across browsers and versions.
var anything = new Date('11/12/2012');
console.log(anything.toString() === 'Mon Nov 12 2012 00:00:00 GMT-0600 (Central Standard Time)'); // true

// Roll values outside a specified range to the next value.
var rollover = new Date(2012, 12, 32, 25, 62, 62, 1023);
console.log(rollover.toString() === 'Sat Feb 02 2013 02:03:03 GMT-0600 (Central Standard Time)'); // true

// Special dates for years in the range 0-99
var special1 = new Date(12, 0);
console.log(special1.toString() === 'Mon Jan 01 1912 00:00:00 GMT-0600 (Central Standard Time)'); // true

// If you actually wanted to set the year to the year 12 CE, you'd need to use the
// setFullYear() method:
special1.setFullYear(12);
console.log(special1.toString() === 'Sun Jan 01 0012 00:00:00 GMT-0600 (Central Standard Time)'); // true
