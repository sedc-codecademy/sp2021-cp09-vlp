const headerBurgerBtn = document.querySelector(".header__btn");

const navListBurger = document.querySelector(".nav__list-burger");

const aboutBtn = document.querySelector(".aboutBtn");

const paymentBtn = document.querySelector(".paymentBtn");

const contactBtn = document.querySelector(".contactBtn");

//creating the different dynamic pages funcitons

let urlId = ""

window.addEventListener("load", e => {

  urlId = e.currentTarget.location.href.replace("http://localhost:3000/","")

  if (urlId.startsWith("academy")) {
    showPageByClass("academy")
  }
  
})

const urlIdHandler = (data,id) => {
  const pageIds = ["about-us","contact","tuition-fees"]

  const academyIds = data.map(academy => academy.id)

  const allIds = [...pageIds, ...academyIds]

  if(!id) {
    showPageByClass("landing")
    return
  }

  if (!allIds.find(item => item === id)) {
    showPageByClass("not-found")
    return
  }


  if(id.startsWith("academy")){
    createAcademyPage(data,id)
    showPageByClass("academy")
    return
  }

  showPageByClass(urlId)

}


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

//Event Handler functions

const cardButtonsHandler = (buttonElements, data) => {
  buttonElements.forEach(button => {
    button.addEventListener("click", e => {
      e.preventDefault();
      createModalWindow(e.target.id, data);
    });
  });
};

const categoryCardLinksHandler = (linkElements, data) => {
  linkElements.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();

      const academyId = e.target.id.slice(6);

      createAcademyPage(data, academyId);

      window.history.pushState({academyId}, "", `/${academyId}`);

      showPageByClass("academy");
    });
  });
};

const headerLogoHandler = () => {
  const headerLogo = document.querySelector(".header__logo");

  headerLogo.addEventListener("click", () => {
    showPageByClass("landing");
    window.history.pushState("", "", "/");
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

showPageByClass("landing");
modalCloseHandler();
headerLogoHandler();

//dynamic routing function

const routingHandler = data => {
  return e => {
    if (!e.state) {
      showPageByClass("landing");
    }

    if (e.state?.pageId) {
      showPageByClass(e.state.pageId);
    }

    if (e.state.academyId) {
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

    urlIdHandler(data.academies,urlId)

    window.onpopstate = routingHandler(data.academies);
  });

aboutBtn.addEventListener(`click`, e => {
  e.preventDefault();
  showPageByClass(e.target.id);

  window.history.pushState({ pageId: e.target.id }, "", `/${e.target.id}`);
});

paymentBtn.addEventListener(`click`, e => {
  e.preventDefault();
  showPageByClass(e.target.id);

  window.history.pushState({ pageId: e.target.id }, "", `/${e.target.id}`);
});

contactBtn.addEventListener("click", e => {
  e.preventDefault();
  showPageByClass(e.target.id);

  window.history.pushState({ pageId: e.target.id }, "", `/${e.target.id}`);
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
