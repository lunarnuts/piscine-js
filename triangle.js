function triangle(char, depth) {
  let text = "";
  let t = 1;
  for (let i = 0; i < depth; i++) {
    for (let j = 0; j < t; j++) {
      text += char;
    }
    if (t !== depth) {
      text += "\n";
    }
    t++;
  }
  return text;
}
