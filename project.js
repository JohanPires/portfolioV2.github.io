const project = document.querySelectorAll(".project");

const navProject = document.querySelectorAll(".nav-project a");

const projectContainer = document.querySelector(".project-container");

const navUl = document.querySelector("nav ul");
const homeNav = document.querySelector("nav");
const burgerButton = document.querySelector(".burger-button");

const background = document.querySelector(".background");

window.addEventListener("scroll", () => {
  project.forEach((pro) => {
    let top = window.scrollY;
    let offset = pro.offsetTop - 150;
    let height = pro.offsetHeight;
    let id = pro.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navProject.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector(`.nav-project a[href*="${id}"] `)
          .classList.add("active");
      });
    }
  });
});

burgerButton.addEventListener("click", () => {
  navUl.classList.toggle("phone-nav");
  background.classList.toggle("blur");
});
