"use strict";
const myBody = document.querySelector("body");
const menuButton = document.querySelector(".menu-button");
const menuList = document.querySelector(".menu-list");
const dimLayer = document.querySelector(".dim-layer");

let isMenuOpen = false;

menuButton.addEventListener("click", (e) => {
  if (!isMenuOpen) {
    menuList.style.visibility = "visible";
    menuList.style.animation = "slideFromRight 0.5s ease-in";

    dimLayer.style.visibility = "visible";

    menuButton.style.backgroundImage = "url(assets/images/icon-menu-close.svg)";
    menuButton.style.width = "35px";
    menuButton.style.height = "35px";

    myBody.style.overflowY = "hidden";

    isMenuOpen = true;
  } else {
    menuList.style.animation = "slideToRight 0.5s ease-in";
    setTimeout(function () {
      menuList.style.visibility = "hidden";
    }, 490);

    dimLayer.style.visibility = "hidden";

    menuButton.style.backgroundImage = "url(assets/images/icon-menu.svg)";

    menuButton.style.width = "40px";
    menuButton.style.height = "17px";

    myBody.style.overflowY = "visible";

    isMenuOpen = false;
  }
});
