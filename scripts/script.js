`use strict`;

//#region ATTRIBUTES
let text =
  "We are a new way of thinking about proteins. Through decades of research, we've uncovered nature's hidden rules. We build Natural-Machines to help world-changers actually change the world.";

const helper = [`thinking`, `research,`, `rules.`, `Natural-Machines`, `world-changers`];
const textFlowUp = [`odd`, `even`];
const color = ["blueT", "pinkT", "yellowT", "greenT", "orangeT"];

let currentTextFlowUp = textFlowUp[0];

const preloader = `
      <div id="preloader">
        <div class="logo-container"></div>
        <svg class="load-logo" width="400" height="400" viewBox="100 -10 90 90">
        <path
          class="logo-line"
          d="M23,54 
                      L65,24 L107,54 
                      L150,24 L192,54 
                      L234,24 L276,54 
                      L234,24 L192,54 
                      L150,24 L107,54 
                      L65,24 L23,54 Z"
        ></path>

        <g class="logo-dots">
          <circle cx="23" cy="54" r="23"></circle>
          <polygon class="logo-letters"
            points="31,60 16,60 16,54 29,54 16,54 16,48 31,48 16,48 16,60"
          ></polygon>
        </g>
        <g class="logo-dots">
          <circle cx="65" cy="24" r="23"></circle>
          <polygon class="logo-letters" points="58,17 65.5,30 72.5,17 65.5,30"></polygon>
        </g>
        <g class="logo-dots">
        <circle cx="107" cy="54" r="23"></circle>
        <ellipse class="logo-letters" cx="107" cy="54" rx="8" ry="6.5"></ellipse>
        </g>
        <g class="logo-dots">
        <circle cx="150" cy="24" r="23"></circle>
          <polygon class="logo-letters"
          points="141,17 157,17 157,20 142,29 142,31 158,31 142,31 142,29 157,20 157,17"
          ></polygon>
        </g>
        <g class="logo-dots">
          <circle cx="192" cy="54" r="23"></circle>
          <polygon class="logo-letters"
            points="185,47 191.5,53.66 198,47 191.5,53.66 191.5,61 191.5,53.66"
          ></polygon>
        </g>
        <g class="logo-dots">
          <circle cx="234" cy="24" r="23"></circle>
          <polygon class="logo-letters"
            points="226,19 226,31 226,17 227,17 241,30 242,30 242,16 242,30 241,30 227,18"
          ></polygon>
        </g>
        <g class="logo-dots">
          <circle cx="276" cy="54" r="23"></circle>
          <polygon class="logo-letters"
              points="269,48 284,48 269,48 269,54 282,54 269,54 269,60 284,60 269,60"
          ></polygon>
        </g>
      </svg>
      </div>`;
const header = `
<header>
  <div class="frame">
    <div class="outer-container">
      <svg class="logo" width="300" height="105" viewbox="0 -25 450 125">
        <path
          class="logo-line"
          d="M23,54 
                      L65,24 L107,54 
                      L150,24 L192,54 
                      L234,24 L276,54 
                      L234,24 L192,54 
                      L150,24 L107,54 
                      L65,24 L23,54 Z"
        ></path>

        <g class="logo-dots">
          <circle cx="23" cy="54" r="23"></circle>
          <polygon class="logo-letters"
            points="31,60 16,60 16,54 29,54 16,54 16,48 31,48 16,48 16,60"
          ></polygon>
        </g>
        <g class="logo-dots">
          <circle cx="65" cy="24" r="23"></circle>
          <polygon class="logo-letters" points="58,17 65.5,30 72.5,17 65.5,30"></polygon>
        </g>
        <g class="logo-dots">
        <circle cx="107" cy="54" r="23"></circle>
        <ellipse class="logo-letters" cx="107" cy="54" rx="8" ry="6.5"></ellipse>
        </g>
        <g class="logo-dots">
        <circle cx="150" cy="24" r="23"></circle>
          <polygon class="logo-letters"
          points="141,17 157,17 157,20 142,29 142,31 158,31 142,31 142,29 157,20 157,17"
          ></polygon>
        </g>
        <g class="logo-dots">
          <circle cx="192" cy="54" r="23"></circle>
          <polygon class="logo-letters"
            points="185,47 191.5,53.66 198,47 191.5,53.66 191.5,61 191.5,53.66"
          ></polygon>
        </g>
        <g class="logo-dots">
          <circle cx="234" cy="24" r="23"></circle>
          <polygon class="logo-letters"
            points="226,19 226,31 226,17 227,17 241,30 242,30 242,16 242,30 241,30 227,18"
          ></polygon>
        </g>
        <g class="logo-dots">
          <circle cx="276" cy="54" r="23"></circle>
          <polygon class="logo-letters"
              points="269,48 284,48 269,48 269,54 282,54 269,54 269,60 284,60 269,60"
          ></polygon>
        </g>
      </svg>

      <div>
        <p class="logo-text">natural machines</p>
      </div>
    </div>

    <button>
      <span class="menu-btn"> menu </span>
    </button>
  </div>
</header>`;

const svg = `
      <svg class="load-logo" viewBox="25 -5 80 80" width="450" height="450>
        <path class="logo-line"
          d="M11.75,27.15 
          L32.9,12.15 L53.95,27.15 
          L75.1,12.15 L96,27.15 
          L117.15,12.15 L138.21,27.15 
          L117.15,12.15 L96,27.15 
          L75.1,12.15 L53.95,27.15 
          L32.9,12.15 L11.75,27.15 Z" >
        </path>
        <g class="logo-dots">
          <circle cx="11.75" cy="27.15" r="11.75"></circle>
          <circle cx="32.9" cy="12.15" r="11.75"></circle>
          <circle cx="53.95" cy="27.15" r="11.75"></circle>
          <circle cx="75.1" cy="12.15" r="11.75"></circle>
          <circle cx="96" cy="27.16" r="11.75"></circle>
          <circle cx="117.15" cy="12.15" r="11.75"></circle>
          <circle cx="138.21" cy="27.15" r="11.75"></circle>
        </g>
        <g class="logo-letters">
          <polygon points="9,24 16,24 9,24 9,27 15,27 9,27 9,30 16,30 9,30 9,27"/>
          <polygon points="28.9,9 32.5,16 33.3,16 36.9,9 33.3,16 32.5,16"/>
          <ellipse cx="53.95" cy="27.15" rx="5" ry="4"/>
          <polygon points="71,9 79,9 79,10 72,15 72,16 80,16 72,16 72,15 79,10 79,9 71,9"/>
          <polygon points="92,24 96,30 100,24 96,30 96,33 96,30"/>
          <polyline points="113.15,9 113.15,16 113.15,9 114.15,9 120.15,15 121.15,15 121.15,8 121.15,15 120.15,15"/>
          <polygon points="135,24 142,24 135,24 135,27 141,27 135,27 135,30 142,30 135,30 135,27"/>
        </g>
      </svg>`;

const mainFrame = `
      <main>
        <div class="container">
        </div>
      </main>
      <hr>`;

const footer = `
      <footer>
        <div class="main-footer-container">
          <div class="first-sub-container">
            <div class="about box">
              <h3 class="link">About<h3>
                  <h3 class="link">Careers</h3>
                  <h3 class="link">Contact</h3>
            </div>
            <div class="social box">
              <h3 class="link">Linkedin</h3>
              <h3 class="link">Twitter</h3>
            </div>
          </div>
          <div class="second-sub-container">
            <div class="privacy box">
              <p>© 2022 Evozyne, All Rights Reserved</p>
              <p><u class="link">Privacy policy</u></p>
              <p><u class="link">Terms of use</u></p>
            </div>
            <div class="by box">
              <p> Website by <u class="link">Team-3</u></p>
            </div>
          </div>
        </div>
      </footer>`;

const dotContainer = `      
      <div class="dots_container">
        <div class="movedot yellow"></div>
        <div class="movedot purple"></div>
        <div class="movedot blue"></div>
        <div class="movedot green"></div>
        <div class="movedot pink"></div>
        <div class="movedot navy"></div>
        <div class="movedot orange"></div>
      </div>`;

//#endregion
//#region METHODS

//normal text markdown => TODO: change to differenciate anchor on it!!
let root = null;
let dot = null;
let dotAll = null;
let main = null;
let loader = null;
let timer = null;
let logo = null;
let logoDots = null;

initPage();

function initPage() {
  root = document.getElementById(`root`);
  root.innerHTML = ``;
  root.insertAdjacentHTML("beforeend", preloader + header + mainFrame + footer);

  let result = SplitString(text.split(` `));
  main = root.querySelector(`.container`);
  main.insertAdjacentHTML("beforeend", result.join(`\n`));
  loader = document.getElementById("preloader");

  onAddListeners();
  addDotColors();
  addEventForMouseMove();
}

window.addEventListener("load", function () {
  setTimeout(function () {
    loader.style.display = "none";
    root.insertAdjacentHTML(`beforeend`, dotContainer);
    loadDotMovement();
  }, 3200);
});

function SplitString(stringArray) {
  return stringArray.map((string, i) => mainMarkdown(string, i));
}

function mainMarkdown(word, i) {
  let tag = helper.includes(word) ? `a` : `div`;
  let modWord = word;

  const mainMd = `
    <${tag} class="wordWrapper ${word + " re"} ${tag === "a" ? "highlighted" : currentTextFlowUp}" id="${tag === "a" ? word : ""}" href="#">
      <div class='word'>${modWord}</div>
      ${tag === "a" ? `<span class="dot"></span>` : ""}
    </${tag}>`;

  currentTextFlowUp = currentTextFlowUp === `odd` ? `even` : `odd`;

  return mainMd;
}

//SHAEK EFFEKT ON LOGO
function onAddListeners() {
  logo = document.querySelector(`.logo`);
  logoDots = logo.querySelectorAll(`.logo-dots`);
  dotAll = document.querySelectorAll(`.dot`);

  logo.addEventListener(`mouseenter`, startShakingEffectOnLogo);
  logo.addEventListener(`mouseleave`, stopShakingEffectOnLogo);
}

function startShakingEffectOnLogo(e) {
  if (!e) return;
  timer = setInterval((e) => {
    logoDots.forEach((logo) => {
      const multiply = 4;
      let cx = Math.random() * multiply;
      let cy = Math.random() * multiply;
      logo.style.transform = `matrix(1, 0, 0, 1, ${cx}, ${cy})`;
    });
  }, 70);
}
function stopShakingEffectOnLogo(e) {
  if (!timer) return;
  clearInterval(timer);
}
//END SHAKE EFFEKT LOGO

//ADD EVENTS
function addDotColors() {
  dotAll.forEach((dot, i) => dot.classList.add(color[i]));
}

function addEventForMouseMove() {
  let wordElement = document.querySelectorAll(".word");
  let elements = [...wordElement];

  elements.forEach((word) => {
    let w = word.textContent.replaceAll(" ", "");
    if (helper.includes(w)) {
      word.addEventListener("mouseenter", dotInit);
      word.addEventListener("mousemove", dotMove);
      word.addEventListener("mouseleave", dotReset);
    }
  });
}

function dotInit(event) {
  if (!event) return;
  const parent = event.target.closest(`.wordWrapper`);
  dot = parent.querySelector(`.dot`);
}

function dotMove(event) {
  if (!event) return;
  let targetX = event.clientX;
  let targetY = event.clientY;

  const dotRect = dot.getBoundingClientRect();
  let dotX = dotRect.x;
  let dotY = dotRect.y;

  let difVectorX = targetX - dotX;
  let difVectorY = targetY - dotY;

  dot.style.transform = `translate(${difVectorX}px, ${difVectorY}px)`;
}

function dotReset(event) {
  dot.style.transform = `translate(-50%, -50%)`;
}

// loadDotMovement();
function loadDotMovement() {
  const moveDots = document.querySelectorAll(".movedot");

  moveDots.forEach((dotMove) => {
    //Mozgo buborékok
    if (dotMove.classList.contains("yellow")) DirectionTranslate(dotMove, "yellow", "yellowT");
    if (dotMove.classList.contains("blue")) DirectionTranslate(dotMove, "blue", "blueT");
    if (dotMove.classList.contains("pink")) DirectionTranslate(dotMove, "pink", "pinkT");
    if (dotMove.classList.contains("green")) DirectionTranslate(dotMove, "green", "greenT");
    if (dotMove.classList.contains("orange")) DirectionTranslate(dotMove, "orange", "orangeT");

    //Eltűnő buborékok
    if (dotMove.classList.contains("navy")) DirectionLostDots(dotMove);
    if (dotMove.classList.contains("purple")) DirectionLostDots(dotMove);
  });

  function DirectionTranslate(dotMove, color, colorT) {
    //Mozgo buborék Rect-e.
    const rect = dotMove.getBoundingClientRect();
    let moveX = rect.x;
    let moveY = rect.y;

    //Target bubik init.
    let targetDot = null;
    dotAll.forEach((d) => {
      if (d.classList.contains(colorT)) targetDot = d;
    });

    //Target buborék Rect-e.
    const rectTargetDot = targetDot.getBoundingClientRect();
    let targetX = rectTargetDot.x;
    let targetY = rectTargetDot.y;

    //Különbségvektk.
    let difVectorX = targetX - moveX;
    let difVectorY = targetY - moveY;

    //Mozgás.
    dotMove.style.transform = `translate(${difVectorX}px, ${difVectorY}px)`;
  }

  function DirectionLostDots(dotMove) {
    const rect = dotMove.getBoundingClientRect();
    let moveX = rect.x;
    let moveY = rect.y;

    let targetX = -30;
    let targetY = Math.random() * 1300;

    let difVectorX = targetX - moveX;
    let difVectorY = targetY - moveY;

    dotMove.style.transform = `translate(${difVectorX}px, ${difVectorY}px)`;
  }

  dot = document.querySelector(`.dot`);
  const dotRect = dot.getBoundingClientRect();

  let dotX = dotRect.x;
  let dotY = dotRect.y;
}

//#endregion
