/*
_____________
Create the following functions: 
- isFriday returns true if the date is a friday 
- isWeekend returns true if the date is a day of the weekend 
- isLeapYear returns true if the year is a leap year 
- isLastDayOfMonth returns true if the date is the last day of the month
_____________ 
*/
function isFriday(date) {
  return date.getDay() === 5;
}
function isWeekend(date) {
  return date.getDay() === 6 || date.getDay() === 0;
}
function isLeapYear(date) {
  return new Date("02-29-" + date.getFullYear()).getMonth() === 1;
}
function isLastDayOfMonth(date) {
  let a = new Date(date);
  a.setDate(date.getDate() + 1);
  return a.getMonth() !== date.getMonth();
}
