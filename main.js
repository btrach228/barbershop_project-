let btnMap = document.querySelector(".index-button-a");
let btnMapFooter = document.querySelector(".index-button-b");

let modalMap = document.querySelector(".modal-map");

let closeModalLog = document.querySelector(".modal-close-log");
let closeModalMap = document.querySelector(".modal-close-map");
let modalClose = document.querySelector(".modal-close-feedback");

let btnLogin = document.querySelector(".user-login-item");
let modalLogin = document.querySelector(".modal-login");

let overlay = document.querySelector(".modal-overlay");

let loginInp = modalLogin.querySelector("[type=email]");

let storageLog = localStorage.getItem("login");

// close modal on button keyboaed push (ESC)

window.addEventListener("keydown", (event) => {
  if (event.keyCode === 27) {
    modalLogin.classList.remove("login-active");
    modalMap.classList.remove("map-active");
    overlay.classList.remove("modal-overlay-active");
    feedbackBlock.classList.remove("feedback-active");
    modalLogin.classList.remove("modal-error");
  }
});

//on mouse click
btnLogin.onclick = (e) => {
  // e.preventDefault();
  e.preventDefault();
  modalLogin.classList.toggle("login-active");
  overlay.classList.add("modal-overlay-active");
  loginInp.focus();

  if (storageLog) {
    emailValue.value = storageLog;
    passValue.focus();
  } else {
    emailValue.focus();
  }
};

btnMapFooter.onclick = (e) => {
  e.preventDefault();

  modalMap.classList.toggle("map-active");
  overlay.classList.add("modal-overlay-active");
};

btnMap.onclick = () => {
  event.preventDefault();

  modalMap.classList.toggle("map-active");
  overlay.classList.add("modal-overlay-active");
};

closeModalLog.onclick = () => {
  event.preventDefault();

  modalLogin.classList.remove("login-active");
  overlay.classList.remove("modal-overlay-active");
  modalLogin.classList.remove("modal-error");
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
// };\

// show green light if pass or email is correct

// let logData = document.querySelectorAll(".log-data");

// let emailValue = logData.querySelectorAll("type=email");

// let checkValue = () => {
//   return {
//     if(emailValue) {
//       logData.classList.add("correct-data");
//     },
//   };
// };

let logForm = document.querySelector(".log-form");
let emailValue = modalLogin.querySelector("[type=email]");
let passValue = modalLogin.querySelector("[type=password]");

let isStorageSupport = true;

logForm.addEventListener("submit", (e) => {
  try {
    storageLog = localStorage.getItem("login");
    storageLog = localStorage.getItem("password");
  } catch (err) {
    isStorageSupport = false;
  }

  e.preventDefault();

  if (!emailValue.value || !passValue.value) {
    modalLogin.classList.add("modal-error-log");
    emailValue.style.borderColor = "#f00000";
    passValue.style.borderColor = "#f00000";
  } else if (emailValue.value || passValue.value) {
    modalLogin.classList.remove("modal-error-log");
    emailValue.style.borderColor = "#000";
    passValue.style.borderColor = "#000";
  } else {
    localStorage.setItem("login", emailValue.value);
    if (isStorageSupport) {
      localStorage.setItem("login", emailValue.value);
    }
  }
});

// FEEDBACK

let feedbackBlock = document.querySelector(".feedback-block");
let showFeedbackBlocoBtn = document.querySelector(".feedbackBtn");
let closeFeedbackBlock = document.querySelector(".modal-close-feedback");

showFeedbackBlocoBtn.addEventListener("click", (e) => {
  e.preventDefault();
  feedbackBlock.classList.add("feedback-active");
  overlay.classList.add("modal-overlay-active");
});

closeFeedbackBlock.addEventListener("click", (e) => {
  e.preventDefault();
  feedbackBlock.classList.remove("feedback-active");
  overlay.classList.remove("modal-overlay-active");
});
