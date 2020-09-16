/*
______
matchCron('9 * * * *', new Date('2020-05-30 18:09:00')) // -> true
matchCron('9 * * * *', new Date('2020-05-30 19:09:00')) // -> true
matchCron('9 * * * *', new Date('2020-05-30 19:21:00')) // -> false
//         | | | | |
//         | | | | +- Day of the Week   (range: 1-7, 1 standing for Monday)
//         | | | +--- Month of the Year (range: 1-12)
//         | | +----- Day of the Month  (range: 1-31)
//         | +------- Hour              (range: 0-23)
//         +--------- Minute            (range: 0-59)
*/
function aux(val, str) {
  if (str == "*" || val == str) {
    return true;
  }
  return false;
}
function matchCron(str, date) {
  let arr = str.split(" ");
  if (arr.length == 5) {
    if (
      aux(date.getMinutes(), arr[0]) &&
      aux(date.getHours(), arr[1]) &&
      aux(date.getDate(), arr[2]) &&
      aux(date.getMonth() + 1, arr[3]) &&
      aux(date.getDay(), arr[4])
    ) {
      return true;
    }
  }
  return false;
}
