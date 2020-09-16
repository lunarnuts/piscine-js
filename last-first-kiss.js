function first(arr) {
  if (typeof arr === "string" || typeof arr === "object") {
    return arr[0];
  }
}
function last(arr) {
  if (typeof arr === "string" || typeof arr === "object") {
    return arr[arr.length - 1];
  }
}
function kiss(arr) {
  if (typeof arr === "string" || typeof arr === "object") {
    return [last(arr), first(arr)];
  }
}
