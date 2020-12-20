'use strict';

import slider from './modules/slider';
import modal from './modules/modal';
import form from './modules/form';

document.addEventListener('DOMContentLoaded', () => {

    form({
        formsIdentifier: 'form',
        answerBlockClass: 'form-answer',
        orderButtonClass: '.button-order',
        answerStatus: {
            success: 'Данные отправлены успешно!',
            error: 'Что то пошло не так...'
        }
    });

    slider({
        frameIdentifier: '[data-main-slider-frame]',
        wrapIdentifier: '[data-main-slider-wrap]',
        verticalSlide: true,
        directionTurningSlides: 'prev'
    });

    slider({
        frameIdentifier: '[data-slider-frame]',
        wrapIdentifier: '[data-slider-wrap]',
        prevButtonIdentifier: '[data-slider-button-prev]',
        nextButtonIdentifier: '[data-slider-button-next]',
        duration: 7000,
        isModal: modal
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