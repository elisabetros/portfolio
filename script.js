const letters = document.querySelectorAll(".wrapper>span");
const about = document.querySelectorAll(".aboutwrapper>span");
const frontDiv = document.querySelector(".wrapper");
let zCounter = -1;
let svg = document.querySelector("svg");

letters.forEach(singleSpan => {
  // let spanPosX = singleSpan.offsetLeft;
  // let spanPosY = singleSpan.offsetTop;
  let counter = 0;
  var plusOrMinus = Math.random() < 0.5 ? -3 : 3;

  singleSpan.addEventListener("mouseover", function() {
    let copies = singleSpan.cloneNode(true);
    copies.classList.add("copySpan");
    counter += plusOrMinus;
    console.log("hover!");
    copies.style.left = singleSpan.offsetLeft + counter + "px";
    copies.style.top = singleSpan.offsetTop + counter + "px";
    copies.style.zIndex = zCounter--;
    // console.log(copies.offsetLeft);
    // console.log(counter);

    frontDiv.appendChild(copies);
  });
});

function lettersRandom() {
  about.forEach(singleSpan => {
    let copies = singleSpan.cloneNode(true);
    copies.classList.add("aboutcopy");
  });
}

let menuOpen = false;
let menuIcon = document.querySelector(".menuIcon");
let menu = document.querySelector(".menu");
let bars = menuIcon.querySelectorAll("rect");
menuIcon.addEventListener("click", toggleMenu);

function toggleMenu() {
  menuOpen = !menuOpen;
  bars[0].classList.toggle("rotateDown");
  bars[1].classList.toggle("fadeOut");
  bars[2].classList.toggle("rotateUp");
  menu.classList.toggle("hidden");
}
