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
  let audio;
  const randomKey = Math.floor(Math.random() * 11) + 1;

  const octave = Math.round(Math.random());

  switch (randomKey) {
    case 1:
    case 2:
      // 1st
      audio = document.querySelector(`audio[name="f${octave}"]`);
      break;
    case 3:
    case 4:
      //3rd
      audio = document.querySelector(`audio[name="a${octave}"]`);
      break;
    case 5:
    case 6:
      //5th
      audio = document.querySelector(`audio[name="c${octave}"]`);
      break;
    case 7:
      //2nd
      audio = document.querySelector(`audio[name="g${octave}"]`);
      break;
    case 8:
      //4th
      audio = document.querySelector(`audio[name="bb${octave}"]`);
      break;
    case 9:
      //6th
      audio = document.querySelector(`audio[name="d${octave}"]`);
      break;
    case 10:
    case 11:
      //7th
      audio = document.querySelector(`audio[name="e${octave}"]`);
      break;
  }
  audio.currentTime = 0;
  audio.play();
  console.log(audio.attributes.name);
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

/// sound toggle

const icon = document.getElementById("icon");

const soundToggle = document.querySelector("#soundToggle");
soundToggle.addEventListener("click", () => {
  icon.classList.toggle("fa-volume-xmark");
  icon.classList.toggle("fa-music");
  icon.classList.toggle("active");
});
