function pyramid(char, depth) {
  let text = "";
  let t = 1;
  let spaces = depth * char.length;
  for (let i = 0; i < depth; i++) {
    for (let j = char.length; j < spaces; j++) {
      text += " ";
    }
    for (let j = 0; j < t; j++) {
      text += char;
    }
    t += 2;
    spaces -= char.length;
    if (i !== depth - 1) {
      text += "\n";
    }
  }
  return text;
}
