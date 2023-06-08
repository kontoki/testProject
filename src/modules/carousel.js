function carousel(index = 1) {
  function showSlide() {
    const slides = document.querySelectorAll(".carousel__wrapper");
    const counter = document.querySelector(".counter");

    if (index > slides.length) {
      index = 1;
    }
    if (index < 1) {
      index = slides.length;
    }
    counter.innerHTML = `${index} <span>/4</span>`;

    slides.forEach((item) => {
      item.style.display = "none";
    });
    slides[index - 1].style.display = "flex";
  }
  showSlide();

  const prev = document.querySelector(".arrow-left");
  const next = document.querySelector(".arrow-right");

  prev.addEventListener("click", () => {
    showSlide((index -= 1));
  });
  next.addEventListener("click", () => {
    showSlide((index += 1));
  });
}

carousel();
