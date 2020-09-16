function citiesOnly(arr) {
  const newMap = new Map();
  newMap.set("cities", []);
  for (let elem of arr) {
    let arr1 = newMap.get("cities");
    arr1.push(elem["city"]);
    newMap.set("cities", arr1);
  }
  return newMap.get("cities");
}
