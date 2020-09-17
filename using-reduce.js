/*
Create three functions : - adder that receives an array and adds its elements.

sumOrMul that receives an array and adds or multiplies its elements depending on whether the element is an odd or an even number.

funcExec that receives an array of functions and executes them.

All functions may or may not receive an extra argument that should be the initial value for the functions execution.

Example: js sumOrMul([1, 2, 3, 4], 5) // -> (((5 + 1) * 2) + 3) * 4 // -> 60 
*/
let adder = (arr, ext) =>
  ext !== undefined
    ? arr.reduce((acc, each) => acc + each, ext)
    : arr.reduce((acc, each) => acc + each, 0);
let sumOrMul = (arr, ext) =>
  ext !== undefined
    ? arr.reduce((acc, each) => (each % 2 === 1 ? acc + each : acc * each), ext)
    : arr.reduce((acc, each) => (each % 2 === 1 ? acc + each : acc * each), 0);
let funcExec = (func, x) => func.reduce((sum, current) => current(sum), x);
