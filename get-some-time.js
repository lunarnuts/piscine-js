function addWeeks(weeks, date) {
  weeks--;
  date.setDate(date.getDate() + weeks * 7);
  return date;
}
function firstDayWeek(week, datey) {
  let date = new Date(datey);
  date = addWeeks(week, date);
  if (+date === +new Date(datey)) {
    return formatDate(date);
  }
  let year = date;
  while (date.getDay() > 1) {
    date.setDate(date.getDate() - 1);
  }
  if (date.getYear() !== year.getYear()) {
    return formatDate(year);
  }
  return formatDate(date);
}
function formatDate(date) {
  let day, month, year;
  year = date.getFullYear();
  day = date.getDate();
  month = date.getMonth() + 1;
  if (date.getDate() < 10) {
    day = "0" + date.getDate();
  }
  if (date.getMonth() < 9) {
    month = "0" + (date.getMonth() + 1);
  }
  if (date.getFullYear() < 10) {
    year = "0" + year;
  }
  if (date.getFullYear() < 100) {
    year = "0" + year;
  }
  if (date.getFullYear() < 1000) {
    year = "0" + year;
  }
  return day + "-" + month + "-" + year;
}
