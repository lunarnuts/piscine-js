function isLeapYear(date) {
  return new Date("02-29-" + date.getFullYear()).getMonth() === 1;
}
function countLeapYears(date) {
  let datesince = new Date();
  let a = 1;
  let leapYears = 0;
  datesince.setFullYear(1);
  while (date.getFullYear() !== datesince.getFullYear()) {
    if (isLeapYear(datesince)) {
      leapYears++;
    }
    datesince.setFullYear(a++);
  }
  return leapYears;
}
