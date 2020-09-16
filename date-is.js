/*
isValid, this function must return false if its an Invalid Date
isAfter, this function will receive two valid dates and return true if the first date is bigger then the second date
isBefore, this function will receive two valid dates and return true if the first date is lesser then the second date
isFuture, will return true if it is a valid the date given as parameter is higher then the present date
isPast, will return true if it is a valid date given as parameter is less than the present date */

function isValid(date) {
  try {
    if (typeof date === "number" && !isNaN(date)) {
      return true;
    }
    if (typeof date.getTime() === "number" && !isNaN(date.getTime())) {
      return true;
    }
    return false;
  } catch {
    return false;
  }
}
function isAfter(a, b) {
  if (isValid(a) && isValid(b)) {
    if (typeof a !== "number") {
      a = a.getTime();
    } else {
    }
    if (typeof b !== "number") {
      b = b.getTime();
    }
    if (a > b) {
      return true;
    }
  }
  return false;
}
function isBefore(a, b) {
  if (isValid(a) && isValid(b)) {
    if (typeof a !== "number") {
      a = a.getTime();
    }
    if (typeof b !== "number") {
      b = b.getTime();
    }
    if (a < b) {
      return true;
    }
  }
}
function isFuture(a) {
  const today = new Date();
  if (isValid(a)) {
    if (typeof a !== "number") {
      a = a.getTime();
    }
    if (a > today.getTime()) {
      return true;
    }
  }
  return false;
}
function isPast(a) {
  const today = new Date();
  if (isValid(a)) {
    if (typeof a !== "number") {
      a = a.getTime();
    }
    if (a < today.getTime()) {
      return true;
    }
  }
  return false;
}
