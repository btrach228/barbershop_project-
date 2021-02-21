let btnMap = document.querySelector(".index-button-a");
let modalMap = document.querySelector(".modal-map");

let closeModalLog = document.querySelector(".modal-close-log");
let closeModalMap = document.querySelector(".modal-close-map");

let btnLogin = document.querySelector(".user-login-item");
let modalLogin = document.querySelector(".modal-login");

let overlay = document.querySelector(".modal-overlay");

btnLogin.onclick = (e) => {
  e.preventDefault();

  modalLogin.classList.toggle("login-active");
  overlay.classList.add("modal-overlay-active");
};

btnMap.onclick = (e) => {
  e.preventDefault();
  modalMap.classList.toggle("map-active");
  overlay.classList.add("modal-overlay-active");
};

closeModalLog.onclick = () => {
  modalLogin.classList.remove("login-active");
  overlay.classList.remove("modal-overlay-active");
};

closeModalLog.onclick = () => {
  modalLogin.classList.remove("login-active");
  overlay.classList.remove("modal-overlay-active");
};

closeModalMap.onclick = () => {
  modalMap.classList.remove("map-active");
  overlay.classList.remove("modal-overlay-active");
};
