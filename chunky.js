function chunk(arr, size) {
  let arrel = [];
  for (let i = 0; i < arr.length; i += size) {
    arrel.push(arr.slice(i, i + size));
  }
  return arrel;
}
