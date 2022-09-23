// Cambio de cantidad de ítems ingresado por el usuario.
const minusBtn = document.querySelector('.input__minus');
const plusBtn = document.querySelector('.input__plus');
let userInput = document.querySelector('.input__number');

let userInputNumber = 0;

plusBtn.addEventListener('click', ()=>{
    userInputNumber++;
    userInput.value = userInputNumber;
    console.log(userInputNumber);
});

minusBtn.addEventListener('click', ()=>{
    userInputNumber--;
    if(userInputNumber <= 0) {
        userInputNumber = 0;
    }
    userInput.value = userInputNumber;
    console.log(userInputNumber);
});

// Agregar el total de productos al carrito cuando se presiona el botón ADD TO CART
const addToCartBtn = document.querySelector('.details__button');
let cartNotification = document.querySelector('.header__cart--notification');

addToCartBtn.addEventListener('click', ()=>{
    let lastValue = parseInt(cartNotification.innerText);
    lastValue = lastValue + userInputNumber;

    cartNotification.innerText = userInputNumber;
    cartNotification.style.display = 'block';
});




