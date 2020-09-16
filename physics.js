function getAcceleration(arg) {
  if (!!(arg["f"] && arg["m"])) {
    return arg["f"] / arg["m"];
  }
  if (!!(arg["Δv"] && arg["Δt"])) {
    return arg["Δv"] / arg["Δt"];
  }
  if (!!(arg["d"] && arg["t"])) {
    return (2 * arg["d"]) / (arg["t"] * arg["t"]);
  }
  return "impossible";
}
