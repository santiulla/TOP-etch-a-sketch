//get width and height
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

const totalArea = windowWidth * windowHeight;
let usedArea = 0;

// total rows

// create elements
const container = document.querySelector("#container");
let div;

while (usedArea < totalArea) {
  // create the first row

  let rows = document.createElement("div");
  rows.style.display = "flex";
  rows.style.width = "100vw";

  // create 10 divs inside the row
  for (let i = 0; i < 10; i++) {
    div = document.createElement("div");
    div.className = "divs";

    rows.appendChild(div);
  }

  container.appendChild(rows);
  // add used area

  usedArea += rows.offsetWidth * rows.offsetHeight;
}

// give random colors

let divs = document.querySelectorAll(".divs");

divs.forEach((square) => {
  let randomColor =
    "#" + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, "0");

  square.addEventListener("mouseover", () => {
    square.style.backgroundColor = randomColor;
    square.style.boxShadow = "0 0 20px" + randomColor;
    square.style.zIndex = "10";
    playSound();
  });
  square.addEventListener("mouseout", () => {
    square.style.backgroundColor = "inherit";
    square.style.boxShadow = "inherit";
    square.style.zIndex = "0";
  });
});

// play sound

const playSound = () => {
  const randomKey = "key" + (Math.round(Math.random() * 14) + 1);
  const audio = document.querySelector(`audio[id="${randomKey}"]`);
  audio.currentTime = 0;
  audio.play();
};
