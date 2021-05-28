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
