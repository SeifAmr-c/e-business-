document.addEventListener('DOMContentLoaded', function() {
    
    let slider = document.querySelector('.slider');
    let slideCount = document.querySelectorAll('.slide').length;
    let currentSlide = 0;
    let timer;
    
    function showNextSlide() {
        currentSlide = currentSlide + 1;
        
        if (currentSlide >= slideCount) {
            currentSlide = 0;
        }
        
        
        let moveAmount = currentSlide * 100;
        slider.style.transform = 'translateX(-' + moveAmount + '%)';
    }
    
    function startSlider() {
        timer = setInterval(showNextSlide, 3000);
    }
    
    
    function stopSlider() {
        clearInterval(timer);
    }
    
    slider.onmouseenter = stopSlider;
    slider.onmouseleave = startSlider;
    
    startSlider();
});


let email  = document.getElementById('email') ; 
const error_span = document.getElementById('error') ;

function validate () {
let emailinput  = document.getElementById('email').value ; 
if (emailinput === ""){
    error_span.classList.add('hidden') ; 
    email.classList.remove('border-red-600')
    email.classList.remove('border-green-600')
    return false ;
}
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const validation =  emailPattern.test(emailinput) ; 
if (!validation){
    error_span.classList.remove('hidden');
    email.classList.add('border-red-600') ;
    email.classList.remove('border-green-600') ; 

}
else {
    error_span.classList.add('hidden') ; 
    email.classList.remove('border-red-600') ;
    email.classList.add('border-green-600')
}
return validation ;
}
email.addEventListener('input',validate)
function handleSubmit(e) {
    if (!validate()) {
        e.preventDefault();
    }
}
document.querySelector('form').addEventListener('submit', handleSubmit);
const cart = document.getElementById('cart') ; 
const cart_overlay = document.getElementById('cart-overlay') ; 
const cart_close = document.getElementById('close-cart') ; 
const trash = document.getElementById('the-trash') ; 
const vanish = document.getElementById('vasnihed');
cart.addEventListener('click',function(){
cart_overlay.classList.add('visible') ; 
cart_overlay.classList.remove('hidden') ; 
})
cart_close.addEventListener('click' ,()=>{
cart_overlay.classList.add('hidden') ; 
cart_overlay.classList.remove('visible') ; 
})
trash.addEventListener('click', ()=> {
    vanish.classList.add('transform', 'translate-x-[200%]', 'transition-transform', 'duration-500');
        setTimeout(() => {
            vanish.classList.add('hidden'); 
            document.getElementById('price').textContent=('0.00') ;
            document.getElementById('the-tax').textContent=('0.00') ;
            document.getElementById('price-after-tax').textContent=('0.00') ;
            document.getElementById('checkout-button').textContent=('Cart is empty') ;
}, 500); 
})
document.getElementById('view-products').addEventListener('click', ()=>{
    window.location.href = "products.html" ; 
}) ; 