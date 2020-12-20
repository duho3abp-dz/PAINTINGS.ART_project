'use strict';

import closeModal from './closeModal';

const modal = ({
    btnsClass,
    modalClass,
    removeButtonAfterOpening,
    closeBtnsClass = '.popup-close'
}) => {

    const btns = document.querySelectorAll(btnsClass);
    const modal = document.querySelector(modalClass);
    const closeBtns = document.querySelectorAll(closeBtnsClass);

    if (!btns.length || !modal || !closeBtns) return;

    const openModal = (elem) => {
        elem.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    };

    btns.forEach(btn => btn.addEventListener('click', () => {
        openModal(modal);
        if (removeButtonAfterOpening) btn.style.display = 'none';
    }));

    closeBtns.forEach(closeBtn => closeBtn.addEventListener('click', () => closeModal(modal)));
    modal.addEventListener('click', e => { if (e.target === modal) closeModal(modal); });

};

export default modal;