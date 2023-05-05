function initiateCarousel() {
  let elem = document.querySelector(".main-gallery");
  let flkty = new Flickity( elem, {
    cellAlign: "center",
    contain: true,
    freeScroll: true,
    wrapAround: true,
    initialIndex: 1
  });
}
initiateCarousel();

// add documentation and arrow function notation