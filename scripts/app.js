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

const headerBurgerBtn = document.querySelector(".header__btn");

const navListBurger = document.querySelector(".nav__list-burger");

const aboutBtn = document.querySelector(".aboutBtn");




//Category cards logic
const webDevBtn = document.querySelector("#ccard-webdev-btn");
const headerLogo = document.querySelector(".header__logo");

hideElementsByClass(["academy__container", "aside"]);
hideElementsByClass(["about__us-page"]);

headerLogo.addEventListener("click", () => {
  hideElementsByClass(["academy__container", "aside"]);
  showElementsByClass(["landing__page"]);
  hideElementsByClass(["about__us-page"]);
});

webDevBtn.addEventListener("click", () => {
  hideElementsByClass(["landing__page"]);
  showElementsByClass(["academy__container", "aside"]);
});

aboutBtn.addEventListener(`click`, e => {
  e.preventDefault();
  hideElementsByClass(["landing__page", "academy__container", "aside"]);
  showElementsByClass(["about__us-page"]);
});

//Modal window logic

const modalCloseBtn = document.querySelector(".modal__close-btn");
const modalOuter = document.querySelector(".modal__outer");

htmlCardBtn.addEventListener("click", e => {
  e.preventDefault();
  showElementsByClass(["modal__outer"]);
  document.querySelector(".modal__inner").classList.add("modal__inner--show");
  document.querySelector(".modal__outer").classList.add("modal__outer--open");
  document.body.style.overflow = "hidden";
});

showElementsByClass(["modal__outer"]);
modalOuter.addEventListener("click", e => {
  if (
    e.target.classList.contains("modal__outer") ||
    e.target.classList.contains("modal__close-btn") ||
    e.target.classList.contains("modal__bottom-link")
  ) {
    document.body.style.overflow = "auto";
    document
      .querySelector(".modal__inner")
      .classList.remove("modal__inner--show");
    document
      .querySelector(".modal__outer")
      .classList.remove("modal__outer--open");
  }
});

jsCardBtn.addEventListener("click", () => {});

// cssCardBtn.addEventListener("click", () => {});

jsCardBtn.addEventListener("click", () => {});

advancedJsCardBtn.addEventListener("click", () => {});

nodeJSCardBtn.addEventListener("click", () => {});

advancedNodeJSCardBtn.addEventListener("click", () => {});

finalNodeJSCardBtn.addEventListener("click", () => {});

oopCardBtn.addEventListener("click", () => {});

advancedOopCardBtn.addEventListener("click", () => {});

appCardBtn.addEventListener("click", () => {});

//Hamburger Menu Logic

let menuOpen = false;

headerBurgerBtn.addEventListener("click", () => {
  if (!menuOpen) {
    headerBurgerBtn.classList.add("open");
    navListBurger.style.opacity = "1";
    navListBurger.style.transform = "scaleX(1) scaleY(1)";
    menuOpen = true;
  } else {
    headerBurgerBtn.classList.remove("open");
    navListBurger.style.opacity = "0";
    navListBurger.style.transform = "scaleX(0) scaleY(0)";
    menuOpen = false;
  }
});

const academiesButton = document.querySelector('.nav__list-academies')
const academiesSubmenu = document.querySelector('.nav__item-submenu')

let academiesSubmenuOpen = false
academiesButton.addEventListener('click',()=>{
  if(!academiesSubmenuOpen){
    academiesButton.classList.add('open')
    academiesButton.style.color = "var(--tertiaryColor)"
    academiesSubmenu.style.height = "190px"
    academiesSubmenu.style.margin = "25px 0 0 10px"
    academiesSubmenuOpen = true
  }else{
    academiesButton.classList.remove('open')
    academiesButton.style.color = "#fff"
    academiesSubmenu.style.height = "0"
    academiesSubmenu.style.margin = "0 0 0 10px"
    academiesSubmenuOpen = false
  }

})

const navListItemClick = document.getElementById('nav__list-click')
const navListSubmenu = document.querySelector('.nav__list-subitem')
let academiesListMenuOpen = true
navListItemClick.addEventListener('click',()=>{
  if(!academiesListMenuOpen){
    navListSubmenu.style.opacity = '0'
    academiesListMenuOpen = true
  }else {
    navListSubmenu.style.opacity = '1'
    academiesListMenuOpen = false
  }
})



