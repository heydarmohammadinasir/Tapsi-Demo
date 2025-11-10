const toggler = document.querySelector(".nav__toggle");
const nav__header = document.querySelector(".nav__header");

toggler.addEventListener("click", (e) => {
  nav__header.classList.toggle("nav__expanded");
});
