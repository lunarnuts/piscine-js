function indexOf(arr, val, fromIndex) {
  if (fromIndex === undefined) {
    for (let i = 0; i < arr.length; i++) {
      if (val === arr[i]) {
        return i;
      }
    }
    return -1;
  }
  for (let i = fromIndex; i < arr.length; i++) {
    if (val === arr[i]) {
      return i;
    }
  }
  return -1;
}
function lastIndexOf(arr, val, fromIndex) {
  if (fromIndex === undefined) {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (val === arr[i]) {
        return i;
      }
    }
    return -1;
  }
  for (let i = fromIndex; i >= 0; i--) {
    if (val === arr[i]) {
      return i;
    }
  }
  return -1;
}
function includes(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (val === arr[i]) {
      return true;
    }
  }
  return false;
}
