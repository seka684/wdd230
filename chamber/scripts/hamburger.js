const burger = document.getElementsByClassName("hamburger")[0];
const navlinks = document.getElementsByClassName("links")[0];

burger.addEventListener("click", () => {
  navlinks.classList.toggle("active");
});
