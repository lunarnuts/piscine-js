function slice(arg, i, f) {
  if (i < 0) {
    i = arg.length + i;
  }
  if (f < 0) {
    f = arg.length + f;
  }
  if (f < i) {
    let temp = i;
    i = f;
    f = temp;
  }
  let res = "";
  switch (typeof arg) {
    case "string":
      res = "";
      if (f === undefined) {
        for (let ind = i; ind < arg.length; ind++) {
          res += arg[ind];
        }
        return res;
      }
      for (let ind = i; ind < f; ind++) {
        res += arg[ind];
      }
      return res;
    case "object":
      res = [];
      if (f === undefined) {
        for (let ind = i; ind < arg.length; ind++) {
          res.push(arg[ind]);
        }
        return res;
      }
      for (let ind = i; ind < f; ind++) {
        res.push(arg[ind]);
      }
      return res;
  }
}
