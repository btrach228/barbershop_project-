let btnMap = document.querySelector(".index-button-a");
let modalMap = document.querySelector(".modal-map");

let closeModalLog = document.querySelector(".modal-close-log");
let closeModalMap = document.querySelector(".modal-close-map");

let btnLogin = document.querySelector(".user-login-item");
let modalLogin = document.querySelector(".modal-login");

let overlay = document.querySelector(".modal-overlay");

btnLogin.onclick = () => {
  modalLogin.classList.toggle("login-active");
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

closeModalLog.onclick = () => {
  modalLogin.classList.remove("login-active");
  overlay.classList.remove("modal-overlay-active");
};

closeModalMap.onclick = () => {
  modalMap.classList.remove("map-active");
  overlay.classList.remove("modal-overlay-active");
};

let img_slider1 = document.querySelector(".photo-slider-item1");
let img_slider2 = document.querySelector(".photo-slider-item2");
let img_slider3 = document.querySelector(".photo-slider-item3");

let mainImg1 = document.querySelector(".good-photo1");
let mainImg2 = document.querySelector(".good-photo2");
let mainImg3 = document.querySelector(".good-photo3");

img_slider1.addEventListener("click", function (e) {
  e.preventDefault();
  mainImg1.style.zIndex = "999";
  mainImg2.style.zIndex = "0";
  mainImg3.style.zIndex = "0";
});

img_slider2.addEventListener("click", function (e) {
  e.preventDefault();
  mainImg1.style.zIndex = "0";
  mainImg2.style.zIndex = "999";
  mainImg3.style.zIndex = "0";
});

img_slider3.addEventListener("click", function (e) {
  e.preventDefault();
  mainImg1.style.zIndex = "0";
  mainImg2.style.zIndex = "0";
  mainImg3.style.zIndex = "999";
});

window.addEventListener("keydown", (event) => {
  if (event.keyCode === 27) {
    modalLogin.classList.remove("login-active");
    modalMap.classList.remove("map-active");
    overlay.classList.remove("modal-overlay-active");
    modalLogin.classList.remove("modal-error");
  }
});
