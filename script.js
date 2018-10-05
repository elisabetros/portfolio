const letters = document.querySelectorAll("span");

const about = document.querySelectorAll(".aboutwrapper>span");
const frontDiv = document.querySelector(".wrapper");
const aboutDiv = document.querySelector(".aboutwrapper");
const projectDiv = document.querySelector(".projectwrapper");
const contactDiv = document.querySelector(".contactwrapper");
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

    singleSpan.parentElement.appendChild(copies);
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

let projects = document.querySelectorAll(".project");
const nextBtn = document.querySelector(".next");
const backBtn = document.querySelector(".back");
let classes = ["one", "two", "three", "four", "five", "six"];
// let projectsArray = Array.from(projects);

//move all classes
function init() {
  for (let i = 0; i < projects.length; i++) {
    projects[i].classList.add(classes[i]);
    // console.log(projects[i].className);
  }
}
init();
nextBtn.addEventListener("click", moveRight);
backBtn.addEventListener("click", moveLeft);

function moveLeft() {
  for (let i = 0; i < projects.length; i++) {
    projects[i].classList.replace(classes[i], classes[i - 1]);
    if (projects[i].classList.contains(undefined)) {
      projects[i].classList.replace("undefined", classes[i]);
    }
  }
  let lastClass = classes.pop();
  classes.unshift(lastClass);
  // console.log(classes);
  init();
  projects[0].classList.remove(classes[1]);
}
function moveRight() {
  projects.className = "";
  for (let i = 0; i < projects.length; i++) {
    projects[i].classList.replace(classes[i], classes[i + 1]);
    // console.log(projects[i].className);
    if (projects[i].classList.contains(undefined)) {
      projects[i].classList.replace("undefined", classes[i]);
    }
  }
  let lastClass = classes.shift();
  classes.push(lastClass);
  // console.log(classes);
  init();
  projects[5].classList.remove(classes[4]);
}
