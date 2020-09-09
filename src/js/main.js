'use strict';

import mainAutoSlider from './modules/mainAutoSlider';

window.addEventListener('DOMContentLoaded', () => {

    mainAutoSlider({
        slidesClass: '.main-slider-item',
        sliderClass: '.auto-slider',
        slidesWrapClass: '.main-slider',
        mailSrc: 'assets/img/main-1.png',
        femaleSrc: 'assets/img/main-2.png'
    });

});