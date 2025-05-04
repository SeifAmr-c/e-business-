const cart = document.getElementById('cart');
const cartOverlay = document.getElementById('cart-overlay');
const closeCart = document.getElementById('close-cart');
const trash = document.getElementById('the-trash');
const vanish = document.getElementById('vasnihed');

cart.addEventListener('click', function() {
    cartOverlay.classList.remove('hidden');
});

closeCart.addEventListener('click', function() {
    cartOverlay.classList.add('hidden');
});

trash.addEventListener('click', function() {
    vanish.classList.add('transform', 'translate-x-[200%]', 'transition-transform', 'duration-500');
    setTimeout(() => {
        vanish.classList.add('hidden');
        document.getElementById('price').textContent = '$0.00';
        document.getElementById('the-tax').textContent = '$0.00';
        document.getElementById('price-after-tax').textContent = '$0.00';
        document.getElementById('checkout-button').textContent = 'Cart is empty';
        buttonerror.classList.remove('hidden') ; 
    }, 500);
});

const button = document.getElementById('checkout-button') ;
const buttonerror = document.getElementById('checkouterror') ; 

button.addEventListener('click' , () => {
    if (button.textContent.trim() === "Checkout") {
        window.location.href = "payment.html";
    }
})