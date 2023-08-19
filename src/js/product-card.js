const cardsBtn = document.querySelectorAll(".products__link");
const productsModal = document.querySelector("[data-modal=products]");
const modalImg = productsModal.querySelector(".modal__image");
const productsListItem = document.querySelectorAll(".modal-products-list__item");
const productsListIconsText = document.querySelectorAll(".modal-products-list__icons-text");

const GREEN = "#96af8c";
const YELLOW = "#efd478";
const BROWN = "#d6936d";
const IMG_GREEN = 'modal__image modal__image--green';
const IMG_YELLOW = 'modal__image modal__image--yellow';
const IMG_BROWN = 'modal__image modal__image--brown';

for (let item of cardsBtn) {
  item.addEventListener("click", (evt) => {
    // console.log(modalImg.className);
    
    // ice-cream
    if (evt.target.id === "ice-cream-btn") {
      productsModal.querySelector(".modal__title").textContent = "Chocolate icecream";
      modalImg.className = IMG_GREEN;

      for (let i = 0; i < productsListItem.length; i++) {
        productsListItem[i].style.borderColor = GREEN;
        productsListIconsText[i].style.backgroundColor = GREEN;
      }
    };     

    // ice-coffee    
    if (evt.target.id === "ice-coffee-btn") {
      productsModal.querySelector(".modal__title").textContent = "Ice Coffee";
      modalImg.className = IMG_YELLOW;

      for (let i = 0; i < productsListItem.length; i++) {
        productsListItem[i].style.borderColor = YELLOW;
        productsListIconsText[i].style.backgroundColor = YELLOW;
      }
    }; 
    
    // milkshake
    if (evt.target.id === "milkshakes-btn") {
      productsModal.querySelector(".modal__title").textContent = "Milkshake";
      modalImg.className = IMG_BROWN;
      
      for (let i = 0; i < productsListItem.length; i++) {
        productsListItem[i].style.borderColor = BROWN;
        productsListIconsText[i].style.backgroundColor = BROWN;
      }
    }; 

  })

}
