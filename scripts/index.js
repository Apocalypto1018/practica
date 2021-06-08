const menuIcon = document.querySelector(".menuIcon");
const menu = document.querySelector(".menu");

menuIcon.addEventListener("click", () => {
  menu.classList.toggle("spread");
});

window.addEventListener("click", (e) => {
  if (
    menu.classList.contains("spread") &&
    e.target != menu &&
    e.target != menuIcon
  ) {
    menu.classList.toggle("spread");
  }
});
