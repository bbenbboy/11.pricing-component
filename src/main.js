"use strict";

const button = document.querySelector("input");
const basicPrice = document.querySelector(".basic");
const proPrice = document.querySelector(".professional");
const masterPrice = document.querySelector(".master");
let click = false;

button.addEventListener("click", function () {
  if (!click) {
    basicPrice.innerHTML = "199.99";
    proPrice.innerHTML = "249.99";
    masterPrice.innerHTML = "399.99";
    click = true;
  } else {
    basicPrice.innerHTML = "19.99";
    proPrice.innerHTML = "24.99";
    masterPrice.innerHTML = "39.99";
    click = false;
  }
});
