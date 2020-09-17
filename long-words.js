/*
longWords that returns true if every element of the array is a string of at least 5 characters.

oneLongWord that returns true if at least one element of the array is a string of at least 10 characters.

noLongWords that returns true if there are no elements in the array that are a string with at least 7 characters.
*/
let longWords = (arr) => arr.every((elem) => elem.length > 4);
let oneLongWord = (arr) => arr.some((elem) => elem.length > 9);
let noLongWords = (arr) => arr.every((elem) => elem.length < 7);
