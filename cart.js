const cartOverlay = document.getElementById('cart-overlay');
const closeCart = document.getElementById('close-cart');
const cartItemsContainer = document.getElementById('vasnihed');
const priceSpan = document.getElementById('price');
const taxSpan = document.getElementById('the-tax');
const totalSpan = document.getElementById('price-after-tax');
const checkoutButton = document.getElementById('checkout-button');
const errorText = document.getElementById('checkouterror');

let cart = []; 


function loadCart() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart); 
    }
    renderCart(); 
}


function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}


function addToCart(name, description, price, imageUrl) {
    cart.push({ name, description, price, imageUrl });
    saveCart();
    renderCart();
}


function removeFromCart(index) {
    cart.splice(index, 1); 
    saveCart();
    renderCart();
}


function renderCart() {
    cartItemsContainer.innerHTML = ''; 
    let subtotal = 0;

    cart.forEach((item, index) => {
        subtotal += item.price;

        const itemHTML = `
            <div class="flex items-center mb-4 pb-4 border-b border-[#3A3A3D]">
                <img src="${item.imageUrl}" alt="${item.name}" class="w-16 h-16 object-cover mr-4">
                <div class="flex-1">
                    <h3 class="font-medium">${item.name}</h3>
                    <p class="text-sm text-gray-400">${item.description}</p>
                    <p class="font-bold">$${item.price.toLocaleString()}</p>
                </div>
                <button class="text-[#f87171]" onclick="removeFromCart(${index})">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        `;
        cartItemsContainer.innerHTML += itemHTML;
    });

    const tax = subtotal * 0.2;
    const total = subtotal + tax;

    priceSpan.textContent = `$${subtotal}`;
    taxSpan.textContent = `$${tax}`;
    totalSpan.textContent = `$${total}`;

    if (cart.length === 0) {
        checkoutButton.textContent = 'Cart is empty';
        errorText.classList.remove('hidden');
    } else {
        checkoutButton.textContent = 'Checkout';
        errorText.classList.add('hidden');
    }
}

checkoutButton.addEventListener('click', () => {
    if (checkoutButton.textContent.trim() === "Checkout") {
        window.location.href = "payment.html";
    }
});


document.getElementById('cart').addEventListener('click', () => {
    cartOverlay.classList.remove('hidden');
});

closeCart.addEventListener('click', () => {
    cartOverlay.classList.add('hidden');
});


window.onload = loadCart;
