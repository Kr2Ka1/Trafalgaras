let slideIndex = 0;
let sliderInterval;


const slides = document.querySelectorAll('.card');
const dots = document.querySelectorAll('.dot');
const prevArrow = document.querySelector('.prev');
const nextArrow = document.querySelector('.next');
const totalSlides = slides.length;


function firstSlideShow() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add('active');
        dots[slideIndex].classList.add('active');

        // slideIndex++
    }
}

function showSlides(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[index].classList.add('active');
    dots[index].classList.add('active');
}


function autoSlide() {
    slideIndex = (slideIndex + 1) % totalSlides;
    showSlides(slideIndex);

}

function startSlider() {
    sliderInterval = setInterval(autoSlide, 5000);
}

function stopSlider() {
    clearInterval(sliderInterval);
}

prevArrow.addEventListener('click', () => {
    stopSlider();
    slideIndex--;
    slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
    showSlides(slideIndex);
});

nextArrow.addEventListener('click', () => {
    stopSlider();

    slideIndex = (slideIndex + 1) % totalSlides;

    showSlides(slideIndex);

});

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        stopSlider();
        slideIndex = index;
        showSlides(slideIndex);

    })
});

function autoSlides() {
    stopSlider();
    setTimeout(() => startSlider(), 3000);
};

[prevArrow, nextArrow, ...dots].forEach(element => {
    element.addEventListener('click', autoSlides);
});

firstSlideShow()
startSlider()