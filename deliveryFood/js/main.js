const cartButton = document.querySelector("#cart-button");
const modal =document.querySelector(".modal");
const close =document.querySelector(".close");

cartButton.addEventListener('click', toggleModal);

close.addEventListener('click', toggleModal);

function toggleModal() {
  modal.classList.toggle("is-open");
}

const markup = `<div class="modal-body">
                  <div class="food-row">
                      <span class="food-name">Ролл угорь стандарт</span>
                      <strong class="food-price">250 ₽</strong>
                      <div class="food-counter">
                          <button data-click="minus" class="counter-button">-</button>
                          <span class="counter">1</span>
                          <button data-click="plus" class="counter-button">+</button>
                      </div>
                  </div>
                </div>`

new WOW().init();