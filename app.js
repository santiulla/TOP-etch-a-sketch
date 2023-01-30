//get width and height
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

const totalArea = windowWidth * windowHeight;
let usedArea = 0;

// create elements
const container = document.querySelector("#container");

// multiply div to fill the screen

let rows = document.createElement("div");
rows.style.display = "flex";
rows.style.width = "100vw";

// rows.style.flexDirection = "row";

for (let i = 0; i < 10; i++) {
  let divs = document.createElement("div");
  divs.style.height = divs.style.height;
  divs.style.flexGrow = "1";
  divs.style.backgroundColor = "pink";
  divs.style.aspectRatio = "1/1";
  divs.innerText = "test";
  rows.appendChild(divs);
}

container.appendChild(rows);

// add used area

usedArea += parseInt(rows.style.width) * parseInt(rows.style.height);
