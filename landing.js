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


    document.getElementById('view-products').addEventListener('click', function() {
        window.location.href = "products.html";
    });
});
