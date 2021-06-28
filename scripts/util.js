//This file is for utility functions
const hideElementsByClass = elements => {
  elements.forEach(element => {
    document.querySelector(`.${element}`).classList.add("element-hide");
  });
};
const showElementsByClass = elements => {
  elements.forEach(element => {
    document.querySelector(`.${element}`).classList.remove("element-hide");
  });
};

const showPageByClass = pageClass => {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.add("element-hide");
  });
  document
    .querySelector(`.${pageClass}__page`)
    .classList.remove("element-hide");
};
