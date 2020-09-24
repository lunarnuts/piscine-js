export const horizontalLim = (posX) => {
  let box = document.querySelector("div.box");
  let rect = box.getBoundingClientRect();
  if (posX >= rect.left + 1 && posX <= rect.left + box.clientWidth - 49) {
    return true;
  }
  return false;
};
export const verticalLim = (posY) => {
  let box = document.querySelector("div.box");
  let rect = box.getBoundingClientRect();
  if (posY >= rect.top + 1 && posY <= rect.top + box.clientHeight - 49) {
    return true;
  }
  return false;
};
export const insideBox = () => {
  let box = document.querySelector("div.box");
  let lastCircle = getLast();
  if (!lastCircle) return false;
  let rect = box.getBoundingClientRect();
  let cl = lastCircle.getBoundingClientRect();
  if (
    cl.top >= rect.top &&
    cl.top <= rect.top + box.clientHeight - lastCircle.clientHeight &&
    cl.left >= rect.left &&
    cl.left <= rect.left + box.clientWidth - lastCircle.clientWidth
  ) {
    return true;
  }
};
export const setBox = () => {
  let box = document.createElement("div");
  box.className = "box";
  document.querySelector("body").append(box);
};
export const createCircle = () => {
  document.addEventListener("mousedown", (e) => {
    let circle = document.createElement("div");
    circle.className = "circle";
    circle.style.left = `${e.clientX - 25}px`;
    circle.style.top = `${e.clientY - 25}px`;
    circle.style.backgroundColor = `white`;
    if (horizontalLim(e.clientX - 25) && verticalLim(e.clientY - 25)) {
      circle.dataset.trapped = true;
      circle.style.backgroundColor = "var(--purple)";
    }
    document.querySelector("body").append(circle);
  });
};
export const getLast = () => {
  let divs = document.querySelectorAll("div.circle");
  let lastCircle;
  for (let each of divs) lastCircle = each;
  return lastCircle;
};
export const moveCircle = () => {
  document.addEventListener("mousemove", (e) => {
    let lastCircle = getLast();
    if (lastCircle) {
      if (horizontalLim(e.clientX - 25) && verticalLim(e.clientY - 25)) {
        lastCircle.dataset.trapped = true;
        lastCircle.style.backgroundColor = "var(--purple)";
      }
      if (lastCircle.dataset.trapped !== "true") {
        lastCircle.style.left = `${e.clientX - 25}px`;
        lastCircle.style.top = `${e.clientY - 25}px`;
      } else {
        let box = document.querySelector("div.box");
        let rect = box.getBoundingClientRect();

        if (horizontalLim(e.clientX - 25)) {
          lastCircle.style.left = `${e.clientX - 25}px`;
        } else {
          e.clientX < rect.left + 26
            ? (lastCircle.style.left = `${rect.left + 1}px`)
            : (lastCircle.style.left = `${rect.left + box.clientWidth - 49}px`);
          if (verticalLim(e.clientY - 25))
            lastCircle.style.top = `${e.clientY - 25}px`;
        }
        if (verticalLim(e.clientY - 25)) {
          lastCircle.style.top = `${e.clientY - 25}px`;
        } else {
          e.clientY < rect.top + 26
            ? (lastCircle.style.top = `${rect.top + 1}px`)
            : (lastCircle.style.top = `${rect.top + box.clientHeight - 49}px `);
          if (horizontalLim(e.clientX - 25))
            lastCircle.style.left = `${e.clientX - 25}px`;
        }
      }
    }
  });
};
