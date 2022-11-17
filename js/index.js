$(document).ready(function () {
  $(".banner__slider").owlCarousel({
    items: 1,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    loop: true,
  });
  $(".services__cards-evnt").owlCarousel({
    items: 3,
    dots: false,
    // autoplay: true,
    autoWidth: true,
    autoplayTimeout: 2000,
    loop: true,
    autoHeight: true,
    autoHeightClass: "owl-height",
  });
});

const tab__signup = document.querySelector(".tab__signup");
const tab__login = document.querySelector(".tab__login");
const form__signup = document.querySelector(".form__signup");
const form__login = document.querySelector(".form__login");
const overlay = document.querySelector(".overlay");
const form__container = document.querySelector(".form__container");
const btn__signup = document.querySelector(".btn__signup");

tab__signup.addEventListener("click", () => {
  tab__login.classList.remove("active");
  form__login.classList.remove("active");
  tab__signup.classList.add("active");
  form__signup.classList.add("active");
});

tab__login.addEventListener("click", () => {
  tab__signup.classList.remove("active");
  form__signup.classList.remove("active");
  tab__login.classList.add("active");
  form__login.classList.add("active");
});

overlay.addEventListener("click", () => {
  form__container.classList.remove("active");
  tab__login.classList.remove("active");
  form__login.classList.remove("active");
  tab__signup.classList.add("active");
  form__signup.classList.add("active");
  overlay.classList.remove("active");
});

btn__signup.addEventListener("click", () => {
  form__container.classList.add("active");
  overlay.classList.add("active");
});
