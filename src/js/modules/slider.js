'use strict';

const slider = ({
    frameIdentifier,
    wrapIdentifier,
    verticalSlide,
    directionTurningSlides,
    duration,
    startSlideNumber = 1
}) => {
    const frame = document.querySelector(frameIdentifier);
    const wrap = document.querySelector(wrapIdentifier);

    if (!frame || !wrap) return;

    const slides = wrap.children;
    const quantitySlides = slides.length;
    const translate = verticalSlide ? 'translateY' : 'translateX' ;

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

        changeSlide();
    };

    const processingLastSlide = () => {
        createSlide({slideClass, body, direction});
    };

    const processingFirstSlide = () => {};

    const startAnimateSlider = () => {
        setInterval(() => {
            slideNumber = directionTurningSlides === 'next' ? slideNumber + 1 : slideNumber - 1 ;
            // changeSlide();
            console.log(slideNumber);

            if (slideNumber >= quantitySlides) processingLastSlide();
            if (slideNumber <= 0) processingLastSlide();
        },duration);
    };

    if (verticalSlide) wrap.style.height = `${slides[0].clientHeight}px`;

    startPosition();
    startAnimateSlider();
};

export default slider;