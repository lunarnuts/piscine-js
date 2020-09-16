function id(arg) {
  return arg;
}
function getLength(arg) {
  if (typeof arg === "string") {
    return arg.length;
  } else if (typeof arg === "object") {
    return arg.length;
  }
}
