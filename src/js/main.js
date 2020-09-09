'use strict';

import mainAutoSlider from './modules/mainAutoSlider';
import modal from './modules/modal';

window.addEventListener('load', () => {

    mainAutoSlider({
        slidesClass: '.main-slider-item',
        sliderClass: '.auto-slider',
        slidesWrapClass: '.main-slider',
        mailSrc: 'assets/img/main-1.png',
        femaleSrc: 'assets/img/main-2.png',
        slideHeight: '669px'
    });

    modal({
        btnsClass: '.button-design',
        modalClass: '.popup-design'
    });

    modal({
        btnsClass: '.button-consultation',
        modalClass: '.popup-consultation'
    });

});