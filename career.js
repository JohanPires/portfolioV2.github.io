const navUl = document.querySelector("nav ul");
const background = document.querySelector(".background");
const burgerButton = document.querySelector(".burger-button");

burgerButton.addEventListener("click", () => {
  navUl.classList.toggle("phone-nav");
  background.classList.toggle("blur");
});
