'use strict';

const modal = ({
    btnsClass,
    modalClass,
    closeBtnsClass = '.popup-close'
}) => {

    const btns = document.querySelectorAll(btnsClass),
          modal = document.querySelector(modalClass),
          closeBtns = document.querySelectorAll(closeBtnsClass);

    const openModal = (elem) => {
        elem.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    };

    const closeModal = (elem) => {
        elem.style.display = '';
        document.body.style.overflow = '';
    };

    btns.forEach(btn => btn.addEventListener('click', () => openModal(modal)));
    closeBtns.forEach(closeBtn => closeBtn.addEventListener('click', () => closeModal(modal)));
    modal.addEventListener('click', e => { if (e.target === modal) { closeModal(modal); }});

};

export default modal;