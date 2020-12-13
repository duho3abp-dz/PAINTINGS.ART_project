'use strict';

const slider = ({
    frameIdentifier,
    wrapIdentifier,
    verticalSlide,
    directionTurningSlides = 'next',
    transitionTime = 300,
    duration = 3000,
    startSlideNumber = 1
}) => {
    const frame = document.querySelector(frameIdentifier);
    const wrap = document.querySelector(wrapIdentifier);

    if (!frame || !wrap) return;

    const slides = wrap.children;
    const quantitySlides = slides.length;
    const translate = verticalSlide ? 'translateY' : 'translateX' ;
    const transition = `all ${transitionTime}ms ease`;

    let slideNumber = startSlideNumber;

    const createSlide = ({slideClass, body, direction}) => {
        const slide = document.createElement('div');
        slide.classList.add(slideClass);
        slide.innerHTML = body;
        if (direction === 'prev') wrap.prepend(slide);
        if (direction === 'next') wrap.append(slide);
    };

    const changeSlide = () => wrap.style.transform = `${translate}(-${slideNumber}00%)`;

    const startPosition = () => {
        createSlide({
            slideClass: slides[quantitySlides - 1].classList, 
            body: slides[quantitySlides - 1].innerHTML,
            direction: 'prev'
        });
        wrap.style.transition = transition;
        changeSlide();
    };

    const processingLastSlide = () => {
        wrap.style.transition = '0s';

        slideNumber--;
        createSlide({
            slideClass: slides[1].classList, 
            body: slides[1].innerHTML,
            direction: 'next'
        });
        slides[0].remove();
        changeSlide();
        console.log(slideNumber);

        setTimeout(() => wrap.style.transition = transition, 100);
    };

    const processingFirstSlide = () => {
        wrap.style.transition = '0s';

        slideNumber++;
        createSlide({
            slideClass: slides[quantitySlides - 1].classList, 
            body: slides[quantitySlides - 1].innerHTML,
            direction: 'prev'
        });
        slides[slides.length - 1].remove();
        changeSlide();
        console.log(slideNumber);
        
        setTimeout(() => wrap.style.transition = transition, 100);
    };

    const startAnimateSlider = () => {
        setInterval(() => {
            slideNumber = directionTurningSlides === 'next' ? slideNumber + 1 : slideNumber - 1 ;
            changeSlide();
            console.log(slideNumber);

            setTimeout(() => {
                if (slideNumber >= quantitySlides) processingLastSlide();
                if (slideNumber <= 0) processingFirstSlide();
            }, transitionTime + 1);
        },duration);
    };

    if (verticalSlide) {
        frame.style.height = `${slides[0].clientHeight}px`;
        wrap.style.height = `${slides[0].clientHeight}px`;
    }

    startPosition();
    startAnimateSlider();
};

export default slider;