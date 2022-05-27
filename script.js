"use strict";

const menu = document.querySelector(".menu-container");
const navigation = document.querySelector(".navigation");

menu.addEventListener("click", function () {
  menu.classList.toggle("opened");
  navigation.classList.toggle("opened");
});

const dropdowns = document.querySelectorAll(".dropdown");
const dropdownFirst = document.querySelector(".dropdown-first");
const dropdownSecond = document.querySelector(".dropdown-second");

const dropdownFirstContent = document.querySelector(".dropdown-first-content ");
const dropdownSecondContent = document.querySelector(
  ".dropdown-second-content"
);

dropdowns.forEach(function (dropdown) {
  dropdown.addEventListener("click", function () {
    dropdown.classList.toggle("opened");
  });
});

dropdownFirst.addEventListener("click", function () {
  dropdownFirstContent.classList.toggle("opened");
});

dropdownSecond.addEventListener("click", function () {
  dropdownSecondContent.classList.toggle("opened");
});
