let editBtn = document.querySelector(".profile__edit-btn");
let closeBtn = document.querySelector(".popup__btn-close");
let popUp = document.querySelector(".popup");

function popup() {
  popUp.style.display = "block";
}

editBtn.addEventListener("click", popup);

function popUpClose() {
  popUp.style.display = "none";
}

closeBtn.addEventListener("click", popUpClose);

let vtnc = document.querySelector(".vtnc");
let btn = document.querySelector(".gallery__card-btn");
let blck = document.querySelector(".gallery__card-btn-blck");

var buttons = document.querySelectorAll(".gallery__card-btn");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    if (button.classList.contains("gallery__card-btn")) {
      button.classList.remove("gallery__card-btn");
      button.classList.add("gallery__card-btn-blck");
    } else {
      button.classList.add("gallery__card-btn");
      button.classList.remove("gallery__card-btn-blck");
    }
  });
});

// function active() {
//   vtnc.style.backgroundImage = "url(./images/vectors/blck-heart.svg)";
// }

// function inactive() {
//   vtnc.style.backgroundImage = "url(./images/vectors/like-btn.svg";
// }
