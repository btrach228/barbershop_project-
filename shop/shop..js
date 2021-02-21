let modal_basket = document.querySelector(".modal-basket");
let baksetBtn = document.querySelector(".backet-item-a");
let closeBasketBtn = document.querySelector(".modal-close-basket");

baksetBtn.onclick = () => {
  modal_basket.classList.toggle("basket-modal-active");
};

closeBasketBtn.onclick = () => {
  modal_basket.classList.remove("basket-modal-active");
};
