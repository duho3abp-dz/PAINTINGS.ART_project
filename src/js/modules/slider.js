'use strict';

const slider = ({
    frameIdentifier,
    wrapIdentifier,
    verticalSlide,
    prevButtonIdentifier,
    nextButtonIdentifier,
    directionTurningSlides = 'next',
    transitionTime = 1000,
    duration = 4000,
    startSlideNumber = 1,
    isModal
}) => {
    const frame = document.querySelector(frameIdentifier);
    const wrap = document.querySelector(wrapIdentifier);
    const prevButton = prevButtonIdentifier ? document.querySelector(prevButtonIdentifier) : null ;
    const nextButton = nextButtonIdentifier ? document.querySelector(nextButtonIdentifier) : null ;

    if (!frame || !wrap) return;

    const slides = wrap.children;
    const quantitySlides = slides.length;
    const translate = verticalSlide ? 'translateY' : 'translateX' ;
    const transition = `all ${transitionTime}ms ease`;
    const widthSlide = !verticalSlide ? slides[0].clientWidth : null ;

    let slideNumber = startSlideNumber;
    let change = true;

    const createSlide = ({slideClass, body, direction}) => {
        const slide = document.createElement('div');
        slide.classList.add(slideClass);
        slide.innerHTML = body;
        if (direction === 'prev') wrap.prepend(slide);
        if (direction === 'next') wrap.append(slide);
        
        if (isModal) isModal({
            btnsClass: `.${slideClass}`,
            modalClass: '.popup-design'
        });
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

        setTimeout(() => {
            wrap.style.transition = transition;
            change = true;
        }, 100);
    };

    const changeAndCheckSlide = () => {
        changeSlide();
        setTimeout(() => {
            if (slideNumber >= quantitySlides) { processingSlide(); }
            else if (slideNumber <= 0) { processingSlide(true); }
            else change = true;
        }, transitionTime + 1);
    };

    const startAnimateSlider = () => {
        setInterval(() => {
            if (change) {
                change = false;
                slideNumber = directionTurningSlides === 'next' ? slideNumber + 1 : slideNumber - 1 ;
                changeAndCheckSlide();
            }
        },duration);
    };

    const clickEvent = key => {
        if (change) {
            change = false;
            slideNumber = key === 'next' ? slideNumber + 1 : slideNumber - 1 ;
            changeAndCheckSlide();
        }
    }

    const addClickEventOnTheButton = () => {
        nextButton.addEventListener('click', e => clickEvent('next'));
        prevButton.addEventListener('click', e => clickEvent('prev'));
    };

    if (verticalSlide) {
        frame.style.height = `${slides[0].clientHeight}px`;
        wrap.style.height = `${slides[0].clientHeight}px`;
    }

    startPosition();
    startAnimateSlider();
    
    if (prevButton && nextButton) addClickEventOnTheButton();
};

export default slider;