function getURL(data) {
  var re = /(http[s]?\:\/\/)[^\s][^\s]*(?=([\s]))/g;
  return data.match(re);
}
function greedyQuery(data) {
  let arr = getURL(data);
  let arr2 = [];
  var re = /([^=]*[=]){3,}/g;
  for (let elem of arr) {
    if (elem.match(re) !== null) {
      arr2.push(elem);
    }
  }
  return arr2;
}
function notSoGreedy(data) {
  let arr = getURL(data);
  let arr2 = [];
  var re = /[=]/g;
  for (let elem of arr) {
    if (
      elem.match(re) !== null &&
      elem.match(re).length >= 2 &&
      elem.match(re).length <= 3
    ) {
      arr2.push(elem);
    }
  }
  return arr2;
}
