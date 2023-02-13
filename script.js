"use strict";
const menuButton = document.querySelector(".menu-button");
const menuList = document.querySelector(".menu-list");
const menuCloseButton = document.querySelector(".menu-close-button");

let isMenuOpen = false;
menuButton.addEventListener("click", (e) => {
  let movileView = screen.width < 376 ? true : false;
  if (movileView) {
    isMenuOpen = true;
    menuList.style.visibility = "visible";
  }
});

menuCloseButton.addEventListener("click", (e) => {
  if (isMenuOpen) {
    isMenuOpen = false;
    menuList.style.visibility = "hidden";
  }
});
