const formContainer = document.querySelector(".form-container");
const cross = document.getElementById("cross");
const contact = document.getElementById("contact");
const navUl = document.querySelector("nav ul");
const background = document.querySelector(".background");

const burgerButton = document.querySelector(".burger-button");

cross.addEventListener("click", () => {
  formContainer.style.top = "-1000px";
});

contact.addEventListener("click", () => {
  formContainer.style.top = "50%";
});

burgerButton.addEventListener("click", () => {
  navUl.classList.toggle("phone-nav");
  background.classList.toggle("blur");
});
