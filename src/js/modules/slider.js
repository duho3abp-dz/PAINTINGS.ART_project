'use strict';

const slider = ({
    frameIdentifier,
    wrapIdentifier,
    verticalSlide,
    directionTurningSlides = 'next',
    transitionTime = 1000,
    duration = 4000,
    startSlideNumber = 1
}) => {
    const frame = document.querySelector(frameIdentifier);
    const wrap = document.querySelector(wrapIdentifier);

    if (!frame || !wrap) return;

    const slides = wrap.children;
    const quantitySlides = slides.length;
    const translate = verticalSlide ? 'translateY' : 'translateX' ;
    const transition = `all ${transitionTime}ms ease`;
    const widthSlide = !verticalSlide ? slides[0].clientWidth : null ;

    let slideNumber = startSlideNumber;

    const createSlide = ({slideClass, body, direction}) => {
        const slide = document.createElement('div');
        slide.classList.add(slideClass);
        slide.innerHTML = body;
        if (direction === 'prev') wrap.prepend(slide);
        if (direction === 'next') wrap.append(slide);
    };

    const changeSlide = () => {
        const result = verticalSlide ? `${slideNumber}00%` : `${slideNumber * widthSlide}px` ;
        wrap.style.transform = `${translate}(-${result})`
    };

    const startPosition = () => {
        createSlide({
            slideClass: slides[quantitySlides - 1].classList, 
            body: slides[quantitySlides - 1].innerHTML,
            direction: 'prev'
        });
        changeSlide();
        setTimeout(() => wrap.style.transition = transition, transitionTime);
    };

    const processingSlide = (backwards) => {
        wrap.style.transition = '0s';

        slideNumber = !backwards ?  slideNumber - 1 : slideNumber + 1;
        createSlide({
            slideClass: !backwards ? slides[1].classList : slides[quantitySlides - 1].classList, 
            body: !backwards ? slides[1].innerHTML : slides[quantitySlides - 1].innerHTML,
            direction: !backwards ? 'next' : 'prev'
        });
        slides[!backwards ? 0 : slides.length - 1].remove();
        changeSlide();

        setTimeout(() => wrap.style.transition = transition, 100);
    };

    const startAnimateSlider = () => {
        setInterval(() => {
            slideNumber = directionTurningSlides === 'next' ? slideNumber + 1 : slideNumber - 1 ;
            changeSlide();
            console.log(slideNumber);

            setTimeout(() => {
                if (slideNumber >= quantitySlides) processingSlide();
                if (slideNumber <= 0) processingSlide(true);
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