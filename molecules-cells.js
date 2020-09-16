/*DNA | RNA
 G  -  C
 C  -  G
 T  -  A
 A  -  U */
function RNA(str) {
  let rna = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "G") {
      rna += "C";
    } else if (str[i] == "C") {
      rna += "G";
    } else if (str[i] == "T") {
      rna += "A";
    } else {
      rna += "U";
    }
  }
  return rna;
}
function DNA(str) {
  let dna = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "G") {
      dna += "C";
    } else if (str[i] == "C") {
      dna += "G";
    } else if (str[i] == "A") {
      dna += "T";
    } else {
      dna += "A";
    }
  }
  return dna;
}
