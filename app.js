//get width and height
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

const totalArea = windowWidth * windowHeight;

// total rows

let numberRows = 10;

// create elements
const container = document.querySelector("#container");
let div;

const beggin = () => {
  container.innerHTML = "";
  let usedArea = 0;

  while (usedArea < totalArea) {
    // create the first row

    let rows = document.createElement("div");
    rows.style.display = "flex";
    rows.style.width = "100vw";

    // create 10 divs inside the row
    for (let i = 0; i < numberRows; i++) {
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

      // toggle sound on and off
      if (icon.classList.contains("active")) playSound();
    });

    square.addEventListener("transitionend", () => {
      square.style.backgroundColor = "inherit";
      square.style.boxShadow = "inherit";
      square.style.zIndex = "0";
    });
  });
};
beggin();

// play sound

const playSound = () => {
  const randomKey = "key" + (Math.round(Math.random() * 14) + 1);
  const audio = document.querySelector(`audio[id="${randomKey}"]`);
  audio.currentTime = 0;
  audio.play();
};

// change number of rows

const lessRows = document.querySelector("#lessRows");
lessRows.addEventListener("click", () => {
  if (numberRows > 3) {
    numberRows--;
    beggin();
  }
});

const moreRows = document.querySelector("#moreRows");
moreRows.addEventListener("click", () => {
  if (numberRows < 30) {
    numberRows++;
    beggin();
  }
});

const icon = document.getElementById("icon");

const soundToggle = document.querySelector("#soundToggle");
soundToggle.addEventListener("click", () => {
  icon.classList.toggle("fa-volume-xmark");
  icon.classList.toggle("fa-music");
  icon.classList.toggle("active");
});
