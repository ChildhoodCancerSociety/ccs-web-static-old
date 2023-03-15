function mobileMenu() {
    var menu = document.getElementById("mobileNav");
    var icon = document.getElementById("menuIcon");
    if (icon.getAttribute('src') == "/assets/img/menu-icon-white.png") {
      icon.src = "../assets/img/close-icon-white.png";
      menu.style.left = '0';
    } else {
      icon.src = "/assets/img/menu-icon-white.png";
      menu.style.left = '-100%';
    }
  }