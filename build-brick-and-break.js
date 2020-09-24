// Create a function build which will create and display the given amount of bricks passed as argument:
// each brick has to be created as a div and added to the page at a regular interval of 100ms,
// each brick will receive a unique id property, like following:
//   <div id="brick-1"></div>
// Each one of the two emojis in the top-right corner fires a function on click:

// 🔨 triggers the function repair: write the body of that function, which receives any number of ids,
// and for each id, retrieves the HTML element and set a custom attribute repaired set to in progress
// if it is a brick situated in the middle column, and true if not
// 🧨 triggers the function destroy: write the body of that function, which removes the current last brick
// in the tower

export const build = (num) => {
  let c = 0;
  let b = 1;
  const last = document.querySelector("body");
  var timerInt = setInterval(() => {
    const newBrick = document.createElement("div");
    newBrick.id = "brick-" + (c + 1);
    newBrick.innerHTML = c + 1;
    if (b == c) {
      newBrick.dataset.foundation = true;
      b = c + 3;
    }
    last.append(newBrick);

    c++;
    if (c == num) {
      clearInterval(timerInt);
    }
  }, 100);
};
export const repair = (...ids) => {
  ids.forEach((val) => {
    let brick = document.querySelector("div#" + val);
    if (brick) {
      if (brick.hasAttribute("data-foundation")) {
        brick.dataset.repaired = "in progress";
      } else {
        brick.dataset.repaired = true;
      }
    }
  });
};
export const destroy = () => {
  let bricks = document.querySelectorAll("div");
  let ar0 = [];
  for (let each of bricks) {
    ar0.push(each);
  }
  bricks = ar0.slice(-1)[0];
  if (bricks) {
    bricks.remove();
  }
};
