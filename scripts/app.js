const headerBurgerBtn = document.querySelector(".header__btn");

const navListBurger = document.querySelector(".nav__list-burger");

const aboutBtn = document.querySelector(".aboutBtn");

//Event Handler functions

const cardButtonsHandler = (buttonElements, data) => {
  buttonElements.forEach(button => {
    button.addEventListener("click", e => {
      e.preventDefault();
      const innerModal = document.querySelector(".modal__inner");
      const outerModal = document.querySelector(".modal__outer");
      const modalHTML = renderModal(e.target.id, data);
      innerModal.innerHTML = "";
      innerModal.innerHTML = modalHTML;
      showElementsByClass(["modal__outer"]);
      innerModal.classList.add("modal__inner--show");
      outerModal.classList.add("modal__outer--open");
      document.body.style.overflow = "hidden";
    });
  });
};

const categoryCardLinksHandler = (linkElements, data) => {
  linkElements.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const academyContainer = document.querySelector(".academy__container");
      hideElementsByClass(["landing__page"]);
      showElementsByClass(["academy__container", "aside"]);

      const academyData = data.filter(item => item.id === e.target.id)[0];
      academyContainer.innerHTML = renderAcademy(academyData);

      const cardButtons = document.querySelectorAll(".card__button");
      cardButtonsHandler(cardButtons, academyData.academyContent);
    });
  });
};

const headerLogoHandler = () => {
  const headerLogo = document.querySelector(".header__logo");

  hideElementsByClass(["academy__container", "aside", "about__us-page"]);

  headerLogo.addEventListener("click", () => {
    hideElementsByClass(["academy__container", "aside", "about__us-page"]);
    showElementsByClass(["landing__page"]);
  });
};

const modalCloseHandler = () => {
  const modalOuter = document.querySelector(".modal__outer");

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
};

modalCloseHandler();
headerLogoHandler();

//Fetch call to get all academies data
fetch("http://localhost:3000/academies")
  .then(res => res.json())
  .then(data => {
    const landingPageContainer = document.querySelector(
      ".landing-cards__container"
    );

    landingPageContainer.innerHTML = data
      .map(academy => renderCategoryCard(academy))
      .join(" ");

    const categoryCardLinks = document.querySelectorAll(".ccard-link");

    categoryCardLinksHandler(categoryCardLinks, data);
  });

aboutBtn.addEventListener(`click`, e => {
  e.preventDefault();
  hideElementsByClass(["landing__page", "academy__container", "aside"]);
  showElementsByClass(["about__us-page"]);
});

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

const academiesButton = document.querySelector(".nav__list-academies");
const academiesSubmenu = document.querySelector(".nav__item-submenu");

let academiesSubmenuOpen = false;
academiesButton.addEventListener("click", () => {
  if (!academiesSubmenuOpen) {
    academiesButton.classList.add("open");
    academiesButton.style.color = "var(--tertiaryColor)";
    academiesSubmenu.style.height = "190px";
    academiesSubmenu.style.margin = "25px 0 0 10px";
    academiesSubmenuOpen = true;
  } else {
    academiesButton.classList.remove("open");
    academiesButton.style.color = "#fff";
    academiesSubmenu.style.height = "0";
    academiesSubmenu.style.margin = "0 0 0 10px";
    academiesSubmenuOpen = false;
  }
});

const navListItemClick = document.getElementById("nav__list-click");
const navListSubmenu = document.querySelector(".nav__list-subitem");
let academiesListMenuOpen = true;
navListItemClick.addEventListener("click", () => {
  if (!academiesListMenuOpen) {
    navListSubmenu.style.opacity = "0";
    academiesListMenuOpen = true;
  } else {
    navListSubmenu.style.opacity = "1";
    academiesListMenuOpen = false;
  }
});
