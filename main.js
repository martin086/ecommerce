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

// Agregar el total de productos al carrito cuando se presiona el botón ADD TO CART.
const addToCartBtn = document.querySelector('.details__button');
let cartNotification = document.querySelector('.header__cart--notification');
let lastQuantity = parseInt(cartNotification.innerText);

// Calculamos el precio final con el descuento en forma dinámica.
let price = document.querySelector('.details__before');
let discount = document.querySelector('.details__discount');
let currentPrice = parseFloat(price.innerText.slice(1));
let currentDiscount = parseFloat("0." + (parseInt(discount.innerText)));

let actualPrice = currentPrice * currentDiscount;

addToCartBtn.addEventListener('click', ()=>{
    lastQuantity = lastQuantity + userInputNumber;

    cartNotification.innerText = lastQuantity;
    cartNotification.style.display = 'block';
    drawProductInModal();
    
});

// Mostrar el modal con el detalle del carrito.
const cartIconBtn = document.querySelector('.header__cart');
const cartModal = document.querySelector('.cart-modal');
const productContainer = document.querySelector('.cart-modal__checkout-container');

cartIconBtn.addEventListener('click', ()=>{
    cartModal.classList.toggle('show');

    if (lastQuantity === 0){
        productContainer.innerHTML = '<p class="cart-empty">Your cart is empty</p>';
    } else {
        drawProductInModal();
    }
    
});

// Borrar el contenido del carrito.
function deleteProduct(){
    const deleteProductBtn = document.querySelector('.cart-modal__delete');
    deleteProductBtn.addEventListener('click', ()=>{
        productContainer.innerHTML = '<p class="cart-empty">Your cart is empty</p>';
        lastQuantity = 0;
        cartNotification.innerText = lastQuantity;
    });
}

// Cambiar imagenes cuando se presionen las flechas.
const imageContainer = document.querySelector('.gallery__image-container');
const previousGalleryBtn = document.querySelector('.gallery__previous');
const nextGalleryBtn = document.querySelector('.gallery__next');
let imgIndex = 1;

nextGalleryBtn.addEventListener('click', ()=>{
    changeNextImage(imageContainer);
})

previousGalleryBtn.addEventListener('click', ()=>{
    changePreviousImage(imageContainer);
})

// Mostrar el modal de imagenes cuando hago click en la imagen principal.
const imageModal = document.querySelector('.modal-gallery__background');
const closeModalBtn = document.querySelector('.modal-gallery__close');

imageContainer.addEventListener('click', ()=>{
    imageModal.style.display = 'grid';
});

closeModalBtn.addEventListener('click', ()=>{
    imageModal.style.display = 'none';
});

// Cambiar las imagenes principales desde los thumbnails.
let thumbnails = document.querySelectorAll('.gallery__thumbnail');
thumbnails = [...thumbnails];

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', event=>{
        imageContainer.style.backgroundImage = `url('./images/image-product-${event.target.id}.jpg')`;
    });
});

// Cambiar las imagenes principales desde los thumbnails en el Modal.
let modalthumbnails = document.querySelectorAll('.modal-gallery__thumbnail');
const modalImageContainer = document.querySelector('.modal-gallery__image-container');
modalthumbnails = [...modalthumbnails];

modalthumbnails.forEach(modalthumbnail => {
    modalthumbnail.addEventListener('click', event=>{
        modalImageContainer.style.backgroundImage = `url('./images/image-product-${event.target.id.slice(1)}.jpg')`;
    });
});

// Cambiar imagen principal del Modal desde las flechas.
const previousModalBtn = document.querySelector('.modal-gallery__previous');
const nextModalBtn = document.querySelector('.modal-gallery__next');

nextModalBtn.addEventListener('click', ()=>{
    changeNextImage(modalImageContainer);
})

previousModalBtn.addEventListener('click', ()=>{
    changePreviousImage(modalImageContainer);
})

// Mostrar el navbar cuando presiono menu hamburguesa.
const headerMenu = document.querySelector('.header__menu');
const modalNavbar = document.querySelector('.modal-navbar__background');
const modalNavbarClose = document.querySelector('.modal-navbar__close-icon');

headerMenu.addEventListener('click', ()=>{
    modalNavbar.style.display = 'block';
});

modalNavbarClose.addEventListener('click', ()=>{
    modalNavbar.style.display = 'none';
});


// FUNCIONES
function drawProductInModal(){
    productContainer.innerHTML = `
        <div class="cart-modal__details-container">
            <img class="cart-modal__image" src="./images/image-product-1-thumbnail.jpg" alt="thumbnail">
            <div>
            <p class="cart-modal__product">Autumn Limited Edition...</p>
            <p class="cart-modal__price">$125.00 x 3 <span>$375.00</span></p>
            </div>
            <img class="cart-modal__delete" src="./images/icon-delete.svg" alt="delete">
        </div>
        <button class="cart-modal__checkout">Checkout</button>`
    deleteProduct();
    let priceModal = document.querySelector('.cart-modal__price');
    priceModal.innerHTML = `$${actualPrice} x ${lastQuantity} <span>$${lastQuantity * actualPrice}</span>`;
}

function changeNextImage(imgContainer){
    if(imgIndex === 4){
        imgIndex = 1;
    } else {
        imgIndex++;
    }
    imgContainer.style.backgroundImage = `url('./images/image-product-${imgIndex}.jpg')`;
}

function changePreviousImage(imgContainer){
    if(imgIndex === 1){
        imgIndex = 4;
    } else {
        imgIndex--;
    }
    imgContainer.style.backgroundImage = `url('./images/image-product-${imgIndex}.jpg')`;
}
