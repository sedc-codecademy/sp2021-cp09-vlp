const headerBurgerBtn = document.querySelector(".header__btn");
const navList = document.querySelector(".nav__list");

//creating the different dynamic pages funcitons

let urlId = "";

window.addEventListener("load", e => {
  urlId = e.currentTarget.location.href.replace("http://localhost:3000/", "");
});

const urlIdHandler = (data, id) => {
  const pageIds = ["about-us", "contact", "tuition-fees"];
  const academyIds = data.map(academy => academy.id);
  const allIds = [...pageIds, ...academyIds];

  if (!id || id === "index.html") {
    showPageByClass("landing");
    return;
  }

  if (!allIds.find(item => item === id)) {
    showPageByClass("not-found");
    return;
  }

  if (id.startsWith("academy")) {
    createAcademyPage(data, id);
    showPageByClass("academy");
    asideItemSelectedHandler(id);
    return;
  }

  showPageByClass(urlId);
};

const createAcademyPage = (data, id) => {
  const academyContainer = document.querySelector(".academy__container");
  const academyData = data.find(item => item.id === id);
  academyContainer.innerHTML = renderAcademy(academyData);
  const cardButtons = document.querySelectorAll(".card__button");
  cardButtonsHandler(cardButtons, academyData.academyContent);
};

const createLandingPage = data => {
  const landingPageContainer = document.querySelector(
    ".landing-cards__container"
  );
  landingPageContainer.innerHTML = data
    .map(academy => renderCategoryCard(academy))
    .join(" ");
  const categoryCardLinks = document.querySelectorAll(".ccard-link");
  categoryCardLinksHandler(categoryCardLinks, data);
};

const createModalWindow = (id, data) => {
  const innerModal = document.querySelector(".modal__inner");
  const outerModal = document.querySelector(".modal__outer");
  const modalHTML = renderModal(id, data);

  innerModal.innerHTML = "";
  innerModal.innerHTML = modalHTML;
  showElementsByClass(["modal__outer"]);
  innerModal.classList.add("modal__inner--show");
  outerModal.classList.add("modal__outer--open");
  document.body.style.overflow = "hidden";
};

const createAsideMenu = academiesData => {
  const asideEl = document.querySelector(".aside");
  asideEl.innerHTML = renderAsideMenu(academiesData);
  const asideLinks = document.querySelectorAll(".aside__item-link");
  asideLinksHandler(asideLinks, academiesData);
};

showPageByClass("landing");
modalCloseHandler();
headerLogoHandler();
navLinksHandler();

//dynamic routing function

const routingHandler = data => {
  return e => {
    if (!e.state) {
      showPageByClass("landing");
    }

    if (e.state?.pageId) {
      showPageByClass(e.state.pageId);
    }

    if (e.state?.academyId) {
      createAcademyPage(data, e.state.academyId);
      showPageByClass("academy");
    }
  };
};

//Fetch call to get all academies data
fetch("https://borisovski-borche.github.io/cp-09-data/data/db.json")
  .then(res => res.json())
  .then(data => {
    createLandingPage(data.academies);
    createAsideMenu(data.academies);
    const test = renderSubMenuLinks(data.academies);
    console.log(test);
    window.onpopstate = routingHandler(data.academies);
    urlIdHandler(data.academies, urlId);
  });

//Hamburger Menu Logic

headerBurgerBtn.addEventListener("click", () => {
  navList.classList.toggle("nav__list--open");
});

const academiesButton = document.querySelector(".nav__list-academies");
const academiesSubmenu = document.querySelector(".nav__item-submenu");

// let academiesSubmenuOpen = false;
academiesButton.addEventListener("click", () => {
  academiesSubmenu.classList.toggle("nav__item-submenu--open");
});
