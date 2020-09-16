function get(key) {
  return sourceObject[key.toString()];
}
function set(key, val) {
  sourceObject[key.toString()] = val;
  return sourceObject[key.toString()];
}
