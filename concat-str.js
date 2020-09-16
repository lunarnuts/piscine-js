function concatStr(arg1, arg2) {
  if (typeof arg1 === "string" && typeof arg2 === "string") {
    return arg1 + arg2;
  } else {
    return arg1.toString() + arg2.toString();
  }
}
