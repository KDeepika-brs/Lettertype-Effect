/** 
Author: Build Rise Shine with Nyros (BRS) 
Created: 2023 
Library / Component: Script file
Description: Letter Type Effect
(c) Copyright by BRS with Nyros. 
**/

/* Get Our Elements */
const containerDiv = document.getElementById("content");
const resetBtn = document.getElementById("resetBtn");

// Default theme
let chathams_blue = "#1A4B84";

// function that sets the content
function setContent() {
  const content = `
  <div class="container">
  <div class="row">
    <h2 data-type data-type-min="100" data-type-max="300">
     Main Heading
    </h2>
    <p class="text-start lh-lg" data-type data-type-min="1" data-type-max="6">
    JavaScript (JS) is a cross-platform, object-oriented programming language used by developers to make web pages interactive. 
    It allows developers to create dynamically updating content, use animations, pop-up menus, clickable buttons, control multimedia, etc.
    It is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much
    everything else. (Okay, not everything, but it is amazing what you can achieve with a few lines of JavaScript code.)
    It is a programming language used primarily by Web browsers to create a dynamic and interactive experience for the user. Most of the
    functions and applications that make the Internet indispensable to modern life are coded in some form of JavaScript.
    It is ightweight, cross-platform, single-threaded, and interpreted compiled programming language. It is also known as the scripting
    language for webpages. It is well-known for the development of web pages, and many non-browser environments also use it.
    It can update and change both HTML and CSS. JavaScript can calculate, manipulate and validate data.
    </p>
  </div>
</div>
  `;
  containerDiv.innerHTML = content;
}

// delay
function wait(ms = 0) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// get random number
function getRandomBetween(min = 20, max = 150, randomNumber = Math.random()) {
  return Math.floor(randomNumber * (max - min) + min);
}

// recursion
function draw(el) {
  let index = 1;
  const text = el.textContent;
  const { typeMin, typeMax } = el.dataset;

  async function drawLetter() {
    el.textContent = text.slice(0, index);
    index += 1;
    const amountOfTimeToWait = getRandomBetween(typeMin, typeMax);
    await wait(amountOfTimeToWait);
    if (index <= text.length) {
      drawLetter();
    }
  }

  drawLetter();
}

// restart the effect
function restartTypeEffect(params) {
  containerDiv.innerHTML = "";
  setContent();
  document.querySelectorAll("[data-type]").forEach(draw);
}

// event listener for restart
resetBtn.addEventListener("click", restartTypeEffect);

// Init content 
setContent();
document.querySelectorAll("[data-type]").forEach(draw);

// theme
function setTheme(theme) {
  document.documentElement.style.setProperty("--primary-color", theme);
  localStorage.setItem("movie-theme", theme);
}
setTheme(localStorage.getItem("movie-theme") || chathams_blue);
