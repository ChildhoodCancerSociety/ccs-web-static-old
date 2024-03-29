/**
 * Initializes a Flickity carousel using the element with the class "main-gallery"
 */
const initiateCarousel = () => {
    const elem = document.querySelector(".main-gallery");
    const flkty = new Flickity(elem, {
      cellAlign: "center",
      contain: true,
      wrapAround: true,
      autoPlay: 3000,
      pauseAutoPlayOnHover: false,
      initialIndex: 1
    });
  };
  
  initiateCarousel();