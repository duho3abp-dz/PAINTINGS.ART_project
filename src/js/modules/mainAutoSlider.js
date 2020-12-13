'use strict';

const mainAutoSlider = ({
    slidesClass,
    sliderClass,
    slidesWrapClass,
    mailSrc,
    femaleSrc,
    vertical
}) => {

    const slider = document.querySelector(sliderClass);
    const slidesWrap = slider.querySelector(slidesWrapClass);
    const slides = slidesWrap.querySelectorAll(slidesClass);
    const quantitySlides = slides.length;
    const slideHeight = slides[0].clientHeight + 'px';
    const slideWidth = slides[0].clientWidth;

    if (
        !slider ||
        !slidesWrap ||
        !quantitySlides
    ) return;

    //-----------------STATE-----------------

    let position = 1;
    let height = position * 100;
    let gender = true;

    //-----------------LOGIC-----------------

    const resetOptions = (wrap) => {
        position = 1;
        height= position * 100;
        wrap.style.top = `-${height}%`;
    };

    const deleteLastSlide = () => {
        const slides = slidesWrap.querySelectorAll(slidesClass);
        slides[quantitySlides].remove();
    };

    const createGenderHTML = (slide, src) => slide.innerHTML = `<img src=${src} >`;

    const createNewSlide = (wrap) => {
        const newSlide = document.createElement('div');
        newSlide.classList.add(slidesClass.replace(/\./, ''));

        gender ? createGenderHTML(newSlide, femaleSrc) : createGenderHTML(newSlide, mailSrc) ;
        wrap.prepend(newSlide);

        gender = gender ? false : true ;
    };

    const animateSlider = (wrap) => {
        height--;
        wrap.style.top = `-${height}%`;

        if(height >= position * 100) {
            requestAnimationFrame(() => animateSlider(wrap));    
        } else {
            resetOptions(wrap);
            createNewSlide(wrap);
            deleteLastSlide();
            
            setTimeout(() => startAnimateSlider(wrap), 3000);
        }
    };

    const startAnimateSlider = (wrap) => {
        position--;
        animateSlider(wrap);
    };

    const setStartStyles = () => {
        slider.style.height = slideHeight;
        slider.style.overflow = 'hidden';
        slidesWrap.style.position = 'absolute';
        slidesWrap.style.top = `-${height}%`;
        slidesWrap.style.left = '0%';
    }

    //-----------------STYLE-----------------

    if (vertical) setStartStyles();
    
    //-----------------START-ANIMATE-----------------

    setTimeout(() => startAnimateSlider(slidesWrap), 3000);

};

export default mainAutoSlider;

// mainAutoSlider({
//     slidesClass: '.main-slider-item',
//     sliderClass: '.auto-slider',
//     slidesWrapClass: '.main-slider',
//     mailSrc: 'assets/img/main-1.png',
//     femaleSrc: 'assets/img/main-2.png',
//     vertical: true
// });