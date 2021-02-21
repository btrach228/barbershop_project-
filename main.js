let btnMap = document.querySelector(".index-button-a");
let btnMapFooter = document.querySelector(".index-button-b");

let modalMap = document.querySelector(".modal-map");

let closeModalLog = document.querySelector(".modal-close-log");
let closeModalMap = document.querySelector(".modal-close-map");

let btnLogin = document.querySelector(".user-login-item");
let modalLogin = document.querySelector(".modal-login");

let overlay = document.querySelector(".modal-overlay");

let loginInp = modalLogin.querySelector("[type=email]");

btnLogin.onclick = (e) => {
  // e.preventDefault();
  e.preventDefault();
  modalLogin.classList.toggle("login-active");
  overlay.classList.add("modal-overlay-active");
  loginInp.focus();
};

btnMapFooter.onclick = (e) => {
  e.preventDefault();

  modalMap.classList.toggle("map-active");
  overlay.classList.add("modal-overlay-active");
};

btnMap.onclick = () => {
  modalMap.classList.toggle("map-active");
  overlay.classList.add("modal-overlay-active");
};

closeModalLog.onclick = () => {
  modalLogin.classList.remove("login-active");
  overlay.classList.remove("modal-overlay-active");
};

closeModalMap.onclick = () => {
  modalMap.classList.remove("map-active");
  overlay.classList.remove("modal-overlay-active");
};

//checkbox-checker

let checkbox = document.querySelector(".checkbox-indicator");

checkbox.onclick = () => {
  checkbox.classList.toggle("checkbox-indicator-active");
};

//YANA
// let slider1 = document.querySelector(".slider-item1");
// let slider2 = document.querySelector(".slider-item2");

// let btn1_1 = document.querySelector(".btn-slider1");
// let btn1_2 = document.querySelector(".btn-slider2");

// btn1_1.onclick = () => {
//   slider1.style.zIndex = "999";
//   btn1_1.style.outline = "none";
//   slider2.style.zIndex = "0";
// };

// btn1_2.onclick = () => {
//   slider2.style.zIndex = "999";
//   slider1.style.zIndex = "0";
//   btn1_2.style.outline = "none";
// };
