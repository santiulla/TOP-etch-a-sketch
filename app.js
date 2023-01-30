//get width and height
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

const totalArea = windowWidth * windowHeight;
let usedArea = 0;

// create elements
const container = document.querySelector("#container");

while (usedArea < totalArea) {
  // create the first row

  let rows = document.createElement("div");
  rows.style.display = "flex";
  rows.style.width = "100vw";

  // create 10 divs inside the row
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

  usedArea += rows.offsetWidth * rows.offsetHeight;
}

console.log(rows.offsetWidth);
