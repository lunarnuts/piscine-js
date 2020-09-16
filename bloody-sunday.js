function bloodySunday(date) {
  let d = new Date("0001-01-01");
  let newCal = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let diff = date - d;
  let oneDay = 1000 * 60 * 60 * 24;
  let day = Math.floor(diff / oneDay);
  return newCal[day % 6];
}
