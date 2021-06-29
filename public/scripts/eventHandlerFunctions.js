//Event Handler Functions

const cardButtonsHandler = (buttonElements, data) => {
  buttonElements.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      createModalWindow(e.target.id, data);
    });
  });
};

const asideItemSelectedHandler = (id) => {
  const asideLinks = document.querySelectorAll(".aside__item-link");
  asideLinks.forEach((link) => {
    link.classList.remove("aside__item-link--selected");
    if (link.id.slice(6) === id) {
      link.classList.add("aside__item-link--selected");
    }
  });
};

const categoryCardLinksHandler = (linkElements, data) => {
  linkElements.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const academyId = e.target.id.slice(6);
      asideItemSelectedHandler(academyId);
      createAcademyPage(data, academyId);
      window.history.pushState({ academyId }, "", `/${academyId}`);

      showPageByClass("academy");
    });
  });
};

const asideLinksHandler = (linkElements, data) => {
  linkElements.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const academyId = e.target.id.slice(6);
      asideItemSelectedHandler(academyId);
      createAcademyPage(data, academyId);
      window.history.pushState({ academyId }, "", `/${academyId}`);
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

  modalOuter.addEventListener("click", (e) => {
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

const navLinksHandler = () => {
  const headerLinks = document.querySelectorAll(".nav__list-item");
  headerLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      if (!e.target.id) return;
      showPageByClass(e.target.id);
      window.history.pushState({ pageId: e.target.id }, "", `/${e.target.id}`);
    });
  });
};
