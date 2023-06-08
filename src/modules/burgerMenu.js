function burgerMenu() {
  const burger = document.querySelector(".header-media__burger");
  const menu = document.querySelector(".header-media__menu");
  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
  });
}
burgerMenu();
