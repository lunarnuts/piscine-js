function reverse(arr) {
  let neww;
  if (typeof arr === "object") {
    neww = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      neww.push(arr[i]);
    }
    return neww;
  }
  neww = "";
  for (let i = arr.length - 1; i >= 0; i--) {
    neww += arr[i];
  }
  return neww;
}
