/*
* Toggles the visibilty of the mobile-menu and changes the menu icon
*/
const mobileMenu = () => {
  const menu = document.getElementById("mobileNav");
  const icon = document.getElementById("menuIcon");

  if (icon.getAttribute('src') === "/assets/img/icons/menu-icon-white.png") {
    icon.src = "/assets/img/icons/close-icon-white.png";
    menu.style.left = '0';
  } else {
    icon.src = "/assets/img/icons/menu-icon-white.png";
    menu.style.left = '-100%';
  }
};