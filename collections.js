function arrToSet(arr) {
  let set = new Set();
  for (let elem of arr) {
    set.add(elem);
  }
  return set;
}
function arrToStr(arr) {
  let str = "";
  for (let elem of arr) {
    str += elem;
  }
  return str;
}
function setToArr(set) {
  let arr = [];
  for (let value of set) {
    arr.push(value);
  }
  return arr;
}
function setToStr(set) {
  let str = "";
  for (let value of set) {
    str += value;
  }
  return str;
}
function strToArr(str) {
  let arr = [];
  for (let elem of str) {
    arr.push(elem);
  }
  return arr;
}
function strToSet(str) {
  let set = new Set();
  for (let elem of str) {
    set.add(elem);
  }
  return set;
}
function mapToObj(map) {
  let obj = {};
  for (let key of map.keys()) {
    obj[key] = map.get(key);
  }
  return obj;
}
function objToArr(obj) {
  let arr = [];
  for (let key in obj) {
    arr.push(obj[key]);
  }
  return arr;
}
function objToMap(obj) {
  let map = new Map();
  for (let key in obj) {
    map.set(key, obj[key]);
  }
  return map;
}
function arrToObj(arr) {
  let obj = {};
  for (let ind in arr) {
    obj[ind] = arr[ind];
  }
  return obj;
}
function strToObj(str) {
  let obj = {};
  for (let ind in str) {
    obj[ind] = str[ind];
  }
  return obj;
}
function superTypeOf(arg) {
  switch (typeof arg) {
    case "number":
      return "Number";
    case "string":
      return "String";
    case "boolean":
      return "Boolean";
    case "undefined":
      return "undefined";
    case "object":
      if (arg instanceof Array) {
        return "Array";
      }
      if (arg instanceof Set) {
        return "Set";
      }
      if (arg instanceof Map) {
        return "Map";
      }
      if (arg === null) {
        return "null";
      }
      return "Object";
    case "function":
      return "Function";
    default:
      return typeof arg;
  }
}
