function isPositive(num) {
  if (num > 0) {
    return true;
  }
  return false;
}
function abs(num) {
  if (isPositive(num)) {
    return num;
  }
  if (num === 0) {
    return 0;
  }
  return num * -1;
}
