//Images slider for top of all listings page and home page

export function slider() {
  let images = [];
  let currentIndex = 0;

  function preloadImages() {
    for (let i = 0; i < slides.length; i++) {
      images[i] = new Image();
      images[i].src = slides[i].getAttribute("data-image");
    }
  }

  function showSlide(index) {
    slides[currentIndex].classList.remove("active");
    slides[index].classList.add("active");
    currentIndex = index;
  }

  function nextSlide() {
    let index = currentIndex + 1;
    if (index === slides.length) {
      index = 0;
    }
    showSlide(index);
  }

  let slides = document.querySelectorAll(".slide");
  if (slides.length > 0) {
    preloadImages();
    showSlide(0);
    setInterval(nextSlide, 5000);
  }
}
