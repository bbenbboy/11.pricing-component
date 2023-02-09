"use strict";

const button = document.querySelector("input");

button.addEventListener("click", function () {
  const basicPrice = document.querySelector(".basic");
  const proPrice = document.querySelector(".professional");
  const masterPrice = document.querySelector(".master");

  //   const defaultBasic = basicPrice.innerHTML;
  //   const defaultPro = proPrice.innerHTML;
  //   const defaultMaster = masterPrice.innerHTML;

  let click = false;

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
