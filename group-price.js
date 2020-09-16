function groupPrice(str) {
  var re = /(USD)\d*\.\d*|[$]\d*\.\d*/g;

  var re1 = /\d*(?=\.)/;
  var re2 = /\d*$/;
  let arr = str.match(re);
  let res = [];
  if (arr !== null) {
    for (let elem of arr) {
      let newarr = [];
      newarr.push(elem);
      newarr.push(re1.exec(elem)[0]);
      newarr.push(re2.exec(elem)[0]);
      res.push(newarr);
    }
  }
  return res;
}
