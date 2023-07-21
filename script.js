const menuOpen = document.querySelector(".menu-open");

const menu = document.querySelector(".mobile-menu");

const menuClose = document.querySelector(".menu-close");

const header = document.querySelector("header .container");

const cozy = document.querySelector(".cozy");

menuOpen.addEventListener("click", (e) => {
  menu.classList.add("visible");
  document.body.style.overflow = "hidden";
  header.style.transition = "1s";
  header.style.opacity = "0";
});

menuClose.addEventListener("click", (e) => {
  menu.classList.remove("visible");
  document.body.style.overflow = "visible";
  header.style.opacity = "1";
});

window.addEventListener("click", (e) => {
  if (e.target.contains(menu)) {
    menu.classList.remove("visible");
    document.body.style.overflow = "visible";
    header.style.opacity = "1";
  }
});
