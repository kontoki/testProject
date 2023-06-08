function moduleModal() {
  const button = document.querySelectorAll(".button");
  const modal = document.querySelector(".modal-wrapper");
  const form = document.querySelector(".modal__form");
  const close = document.querySelector(".modal__close");

  function closeModal() {
    modal.classList.remove("modal-wrapper-active");
  }

  function openModal() {
    modal.classList.add("modal-wrapper-active");
  }

  button.forEach((item) => {
    item.addEventListener("click", () => {
      openModal();
    });
  });

  modal.addEventListener("click", ({ target }) => {
    if (target.classList.contains("modal-wrapper-active")) {
      closeModal();
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    closeModal();
  });

  close.addEventListener("click", () => {
    closeModal();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key == "Escape") {
      closeModal();
    }
  });
}
moduleModal();
