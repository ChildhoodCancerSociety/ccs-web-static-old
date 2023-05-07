/**
 * Initializes a Flickity carousel using the element with the class "main-gallery"
 */
const initiateCarousel = () => {
  const elem = document.querySelector(".main-gallery");
  const flkty = new Flickity(elem, {
    cellAlign: "center",
    contain: true,
    freeScroll: true,
    wrapAround: true,
    initialIndex: 1
  });
};

initiateCarousel();