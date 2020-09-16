is.num = (arg) => typeof arg === "number";
is.nan = (arg) => Number.isNaN(arg);
is.str = (arg) => typeof arg === "string";
is.bool = (arg) => typeof arg === "boolean";
is.undef = (arg) => typeof arg === "undefined";
is.def = (arg) => typeof arg !== "undefined";
is.arr = (arg) => arg instanceof Array;
is.obj = (val) =>
  !Array.isArray(val) && typeof val === "object" && val !== null;
is.fun = (arg) => typeof arg === "function";
is.truthy = (arg) => true && arg;
is.falsy = (arg) => !arg;
