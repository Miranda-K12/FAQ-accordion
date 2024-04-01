"use strict";

function displayAnswer(element) {
  if (element.style.display === "block") {
    element.style.display = "none";
  } else {
    element.style.display = "block";
  }
}

function secondAnswer() {
  let element = document.getElementById("second-Paragraph");
  displayAnswer(element);
}
function thirdAnswer() {
  let element = document.getElementById("third-Paragraph");
  displayAnswer(element);
}

function fourthAnswer() {
  let element = document.getElementById("fourth-Paragraph");
  displayAnswer(element);
}

function firstAnswer() {
  let element = document.getElementById("first-Paragraph");
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}

function changeButtonFirst() {
  let btnImage = document.getElementById("buttonImage");
  if (btnImage.src.includes("images/icon-plus.svg")) {
    btnImage.src = "images/icon-minus.svg";
  } else {
    btnImage.src = "images/icon-plus.svg";
  }
}

let btnImage = document.getElementById("minus_Button");
btnImage.addEventListener("click", changeButtonFirst);

function changeButtonSecond() {
  let buttonImage1 = document.getElementById("buttonImage1");
  if (buttonImage1.src.includes("images/icon-minus.svg")) {
    buttonImage1.src = "images/icon-plus.svg";
  } else {
    buttonImage1.src = "images/icon-minus.svg";
  }
}

let myButton = document.getElementById("change-Minus-first");
myButton.addEventListener("click", changeButtonSecond);

function changeButtonThird() {
  let myButtonSecond = document.getElementById("plusImage");
  if (plusImage.src.includes("images/icon-minus.svg")) {
    plusImage.src = "images/icon-plus.svg";
  } else {
    plusImage.src = "images/icon-minus.svg";
  }
}

let myButtonSecond = document.getElementById("change-Minus-second");
myButtonSecond.addEventListener("click", changeButtonThird);

function changeButtonFourth() {
  let myButtonFourth = document.getElementById("plusSvg");
  if (plusSvg.src.includes("images/icon-minus.svg")) {
    plusSvg.src = "images/icon-plus.svg";
  } else {
    plusSvg.src = "images/icon-minus.svg";
  }
}

let myButtonFourth = document.getElementById("change-Minus-third");
myButtonFourth.addEventListener("click", changeButtonFourth);
