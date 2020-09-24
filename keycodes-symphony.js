export const compose = () => {
  let del = (str) => {
    let arr = document.querySelectorAll("div");
    if (str === "Escape") {
      for (let each of arr) each.remove();
    }
    if (str === "Backspace") {
      let last = arr[arr.length - 1];
      if (last) last.remove();
    }
  };

  document.addEventListener(
    "keydown",
    (event) => {
      const keyName = event.key;
      if (keyName === "Backspace" || keyName === "Escape") {
        return del(keyName);
      }
      if (keyName.length === 1 && /[a-z]/.test(keyName)) {
        let note = document.createElement("div");
        note.className = "note";
        let color = "#" + (((1 << 24) * Math.random()) | 0).toString(16);
        note.style.background = color;
        note.textContent = keyName;
        document.querySelector("body").append(note);
      }
    },
    false
  );
};

// Write the function compose:

// Make it fire every time a key is pressed
// Create a new div with the class note when a letter of the lowercase alphabet is pressed,
// which has a unique background color generated using the key of the event, and
// displays the corresponding letter pressed
// If the pressed key is the Backspace one, delete the last note
// If the pressed key is the Escape one, clear all the notes
