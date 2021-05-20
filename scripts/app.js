// RM - Read more
//

const htmlCardBtn = document.querySelector("#html-card-btn");

const cssCardBtn = document.querySelector("#css-card-btn");

const jsCardBtn = document.querySelector("#js-card-btn");

const advancedJsCardBtn = document.querySelector("#ajs-card-btn");

const nodeJSCardBtn = document.querySelector("#nodejs-card-btn");

const advancedNodeJSCardBtn = document.querySelector("#anodejs-card-btn");

const finalNodeJSCardBtn = document.querySelector("#fnodejs-card-btn");

const oopCardBtn = document.querySelector("#oop-card-btn");

const advancedOopCardBtn = document.querySelector("#aoop-card-btn");

const appCardBtn = document.querySelector("#app-card-btn");

//Category cards logic
const webDevBtn = document.querySelector("#ccard-webdev-btn");
const headerLogo = document.querySelector(".header__logo");

hideElementsByClass(["academy__container", "aside"]);

headerLogo.addEventListener("click", () => {
  hideElementsByClass(["academy__container", "aside"]);
  showElementsByClass(["landing__page"]);
});

webDevBtn.addEventListener("click", () => {
  hideElementsByClass(["landing__page"]);
  showElementsByClass(["academy__container", "aside"]);
});

//Modal window logic

const modalCloseBtn = document.querySelector(".modal__close-btn");
const modalOuter = document.querySelector(".modal__outer");

htmlCardBtn.addEventListener("click", e => {
  e.preventDefault();
  showElementsByClass(["modal__outer"]);
  document.querySelector(".modal__inner").classList.add("modal__inner--show");
  document.body.style.overflow = "hidden";
  document.querySelector(".modal__outer").classList.add("modal__animation");
});

modalOuter.addEventListener("click", e => {
  if (
    e.target.classList.contains("modal__outer") ||
    e.target.classList.contains("modal__close-btn") ||
    e.target.classList.contains("modal__bottom-link")
  ) {
    document.body.style.overflow = "auto";
    hideElementsByClass(["modal__outer"]);
  }
});

jsCardBtn.addEventListener("click", () => {});

cssCardBtn.addEventListener("click", () => {});

jsCardBtn.addEventListener("click", () => {});

advancedJsCardBtn.addEventListener("click", () => {});

nodeJSCardBtn.addEventListener("click", () => {});

advancedNodeJSCardBtn.addEventListener("click", () => {});

finalNodeJSCardBtn.addEventListener("click", () => {});

oopCardBtn.addEventListener("click", () => {});

advancedOopCardBtn.addEventListener("click", () => {});

appCardBtn.addEventListener("click", () => {});
