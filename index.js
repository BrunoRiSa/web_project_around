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
