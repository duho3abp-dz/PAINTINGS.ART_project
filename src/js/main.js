'use strict';

import slider from './modules/slider';
import modal from './modules/modal';
import form from './modules/form';
import inputMask from './modules/inputMask';
import checkTextInput from './modules/checkTextInput';
import stylesBlocks from './modules/stylesBlocks';
import calculator from './modules/calculator';
import filterElements from './modules/filterElements';

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

    stylesBlocks({
        loadingButtonIdentifier : '[data-styles-button]',
        stylesBlocksIdentifier: '.styles-2'
    });

    calculator({ 
        selectsIdentifier: '[data-calculator-select]',
        totalPriceBlockIdentifier: '.calc-price-into',
        activeTotalPriceBlock: 'calc-price-into--active',
        promoInputIdentifier: '[data-promo-input]',
        promoWord: 'IWANTPOPART',
        discount: 30
    });

    filterElements({
        parentButtonsIdentifier: '[data-filter-buttons]',
        parentElementsIdentifier: '[data-filter-elements]',
        activeButtonClass: 'active',
        noContentBlockIdentifier: '.portfolio-no'
    });

    inputMask({ inputNameIdentifier: 'phone' });
    checkTextInput({ inputNameIdentifier: 'name' });
    checkTextInput({ inputNameIdentifier: 'message' });

});