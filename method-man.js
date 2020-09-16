function words() {
  let x = 0;
  let res = [];
  let last = 0;
  let str = arguments[0];
  let len = str.length;
  while (x < len) {
    if (str[x] === " ") {
      let temp = str.slice(last, x);
      res.push(temp);
      last = x + 1;
    }
    if (x + 1 === len) {
      res.push(str.slice(last, x + 1));
    }
    x++;
  }
  return res;
}
function sentence() {
  let len = arguments[0].length;
  let x = 0;
  let str = "";
  while (x < len) {
    if (x + 1 < len) {
      str = str + arguments[0][x] + " ";
    }
    x++;
  }
  return str + arguments[0][x - 1];
}
function yell(str) {
  return str.toUpperCase();
}
function whisper(str) {
  return "*" + str.toLowerCase() + "*";
}
function capitalize(str) {
  let i = 0;
  let newstr = "";
  for (i = 0; i < str.length; i++) {
    if (i == 0) {
      newstr += str[i].toUpperCase();
      continue;
    }
    newstr += str[i].toLowerCase();
  }
  return newstr;
}
