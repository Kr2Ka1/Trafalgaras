let slideIndex = 0;


const slides = document.querySelectorAll('.card');
const dots = document.querySelectorAll('.dot');
const prevArrow = document.querySelector('.prev');
const nextArrow = document.querySelector('.next');


if(slides.length > 0){
    slides[slideIndex].classList.add('active');
    dots[slideIndex].classList.add('active');

    slideIndex++
}
function showSlides(slideIndex){
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
    }); 
    dots.forEach((dot, i) => {
        dot.classList.remove('active'); //slides[slideIndex].classList.add('active');
});

slides[slideIndex].classList.add('active');
dots[slideIndex].classList.add('active');

}



setInterval(function(){
    if(slideIndex >= slides.length){
        slideIndex = 0;
    }
    showSlides(slideIndex);
    slideIndex++;
}, 5000); 

prevArrow.addEventListener('click', () => {
    slideIndex--;
    if(slideIndex < 0){
        slideIndex = slides.length - 1;
    }
    showSlides(slideIndex);
});

nextArrow.addEventListener('click', () => {
    slideIndex++;
    if(slideIndex >= slides.length){
        slideIndex = 0;
    }
    showSlides(slideIndex);
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        slideIndex = index;
        showSlides(slideIndex);
    });
});