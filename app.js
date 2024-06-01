document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll('.slide-container');
    const dots = document.querySelectorAll('.dot');
    let activeSlideNumber = 0;

    const arrowLeft = document.querySelector('.arrow-left');
    const arrowRight = document.querySelector('.arrow-right');

    const hideActiveSlide = () => {
        const activeElement = document.querySelector('.slide-container.active');
        if (activeElement) {
            activeElement.classList.remove('active');
        }
    };

    const showSlide = (slideNumber) => {
        hideActiveSlide();
        slides[slideNumber].classList.add('active');
        updateDots(slideNumber);
    };

    const showNextSlide = () => {
        if (activeSlideNumber === slides.length - 1) {
            activeSlideNumber = 0;
        } else {
            activeSlideNumber += 1;
        }
        showSlide(activeSlideNumber);
    };

    const showPreviousSlide = () => {
        if (activeSlideNumber === 0) {
            activeSlideNumber = slides.length - 1;
        } else {
            activeSlideNumber -= 1;
        }
        showSlide(activeSlideNumber);
    };

    const updateDots = (slideNumber) => {
        dots.forEach((dot, index) => {
            if (index === slideNumber) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    };

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            activeSlideNumber = index;
            showSlide(index);
        });
    });

    arrowRight.addEventListener('click', showNextSlide);
    arrowLeft.addEventListener('click', showPreviousSlide);

    // Initialize the first slide as active
    showSlide(activeSlideNumber);
});
