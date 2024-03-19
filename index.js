// funçao de abertura e fechamento do popup

let editBtn = document.querySelector(".profile__edit-btn");
let closeBtn = document.querySelector(".popup__btn-close");
let popUp = document.querySelector(".popup");

function popupOpen() {
  popUp.style.display = "block";
}

editBtn.addEventListener("click", popupOpen);

function popupClose() {
  popUp.style.display = "none";
}

closeBtn.addEventListener("click", popupClose);

// funçção que altera a opacidade da page

let page = document.querySelector(".page");
function opacity() {
  page.style.opacity = "0.5";
}

editBtn.addEventListener("click", opacity);

function opaco() {
  page.style.opacity = "1";
}

closeBtn.addEventListener("click", opaco);

//função para os botoes de like dos cards

let btn = document.querySelector(".gallery__card-btn");
let blck = document.querySelector(".gallery__card-btn-blck");

let buttons = document.querySelectorAll(".gallery__card-btn");

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

// Vamos encontrar o formulário no DOM
let formElement = document.querySelector(".popup__form");

// Em seguida vem o handler do submit
// ainda não vai enviar para lugar nenhum

// Observe que o nome da função começa com um verbo
// e descreve exatamente o que a função faz
function handleProfileFormSubmit(evt) {
  // Esta linha impede o navegador
  // de enviar o formulário da forma padrão.
  evt.preventDefault();
  // Fazendo isso, podemos definir nossa própria forma de enviar o formulário.
  // Explicaremos em mais detalhes posteriormente.

  // Vamos encontrar os campos de formulário do DOM
  let nameInput = document.querySelector("#name");
  let jobInput = document.querySelector("#occupation");

  // Pegue os valores de cada campo do valor da propriedade correspondente
  let name = nameInput.value;
  let job = jobInput.value;
  // Selecione os elementos aos quais os valores dos campos serão inseridos
  let editedName = document.querySelector("#profile-name");
  let editedJob = document.querySelector("#profile-job");
  // Insira novos valores usando a
  // propriedade textContent

  editedName.textContent = name;
  editedJob.textContent = job;

  popUp.style.display = "none";
  page.style.opacity = "1";
}

// Conecte o handler ao formulário:
// ele vai observar o evento de submit

formElement.addEventListener("submit", handleProfileFormSubmit);
