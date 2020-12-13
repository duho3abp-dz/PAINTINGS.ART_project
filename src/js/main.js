'use strict';

import mainAutoSlider from './modules/mainAutoSlider';
import slider from './modules/slider';
import modal from './modules/modal';

document.addEventListener('DOMContentLoaded', () => {

    slider({
        frameIdentifier: '[data-main-slider-frame]',
        wrapIdentifier: '[data-main-slider-wrap]',
        verticalSlide: true,
        directionTurningSlides: 'prev'
    });

    modal({
        btnsClass: '.button-design',
        modalClass: '.popup-design'
    });

    modal({
        btnsClass: '.button-consultation',
        modalClass: '.popup-consultation'
    });

    modal({
        btnsClass: '[data-present-open]',
        modalClass: '.popup-gift',
        removeButtonAfterOpening: true
    });

});