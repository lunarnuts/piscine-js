function dayOfTheYear(date) {
  let datesince = new Date();
  let days = 1;
  let year = date.getFullYear();
  datesince.setFullYear(year, 0, days);
  while (date > datesince) {
    days++;
    datesince.setDate(datesince.getDate() + 1);
  }

  return days;
}
