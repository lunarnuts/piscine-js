function multiply(a, b) {
  let sum = 0;
  if (b > 0) {
    for (let i = 0; i < b; i++) {
      sum += a;
    }
  } else {
    for (let i = b; i < 0; i++) {
      sum -= a;
    }
  }
  return sum;
}
function divide(a, b) {
  let res = 0;
  if (b > 0) {
    if (a > 0) {
      while (a - b > 0) {
        res++;
        a -= b;
        console.log(a);
      }
    } else {
      while (a + b < 0) {
        res--;
        a += b;
      }
    }
  } else {
    if (a > 0) {
      while (a + b > 0) {
        a += b;
        res--;
      }
    } else {
      while (a - b < 0) {
        a -= b;
        res++;
      }
    }
  }
  return res;
}
function modulo(a, b) {
  return a - multiply(divide(a, b), b);
}
