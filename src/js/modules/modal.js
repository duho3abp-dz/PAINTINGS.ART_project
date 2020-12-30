'use strict';

import closeModal from './closeModal';

let open = false;
let click = false;

const modal = ({
    btnsClass,
    modalClass,
    removeButtonAfterOpening,
    timerAutoOpen,
    closeBtnsClass = '.popup-close'
}) => {
    const btns = document.querySelectorAll(btnsClass);
    const modal = document.querySelector(modalClass);
    const closeBtns = document.querySelectorAll(closeBtnsClass);

    if (!btns.length || !modal || !closeBtns) return;

    let timer;

    const openModal = (elem, auto) => {
        elem.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        open = true;
        if ( !auto ) click = true;
    };

    const buttonClickEvent = e => {
        e.preventDefault();
        openModal(modal);
        if (removeButtonAfterOpening) e.currentTarget.style.display = 'none';
    };

    const modalAutoOpen = () => {
        setTimeout(() => {
            if ( !open ) openModal(modal, true);
        }, timerAutoOpen);
    };

    const openWhenScrollEndPage = () => {
        window.addEventListener('scroll', e => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                const bodyHeight = document.body.clientHeight;
                const windowHeight = +window.innerHeight;
                const scrollHeight = +window.pageYOffset;
                const totalScrollHeight = windowHeight + scrollHeight;
    
                if ( +bodyHeight === +totalScrollHeight && !click ) openModal(modal);
            }, 300);
        });
    };

    btns.forEach(btn => btn.addEventListener('click', buttonClickEvent));

    closeBtns.forEach(closeBtn => closeBtn.addEventListener('click', e => { 
        e.preventDefault();
        closeModal(modal);
        open = false;
    }));

    modal.addEventListener('click', e => { 
        if (e.target === modal) { 
            closeModal(modal); 
            open = false;
        }
    });

    if ( timerAutoOpen ) modalAutoOpen(); 
    if ( removeButtonAfterOpening ) openWhenScrollEndPage();
};

export default modal;