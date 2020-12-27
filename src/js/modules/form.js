'use strict';

import { postData } from '../services/services';
import closeModal from './closeModal';
import loading from './loading';

const form = ({ 
    formsIdentifier, 
    answerBlockClass,
    orderButtonClass,
    durationAnswer = 2000,
    answerStatus: { success, error }
}) => {
    const forms = document.querySelectorAll(formsIdentifier);
    console.log(forms);
    
    if (!forms.length) return;

    const createAnswerMask = ( actualForm, answer, modal ) => {
        const answerBlock = document.createElement('div');
        answerBlock.classList.add(answerBlockClass);
        answerBlock.innerHTML = answer;
        actualForm.append(answerBlock);
        setTimeout(() => {
            answerBlock.remove();
            if (modal) closeModal(modal);
        }, durationAnswer);
    };

    const submitEvent = e => {
        e.preventDefault();

        const actualForm = e.currentTarget;
        const formModal = actualForm.parentElement.parentElement.parentElement;
        const formButton = actualForm.querySelector(orderButtonClass);
        const formData = new FormData(actualForm);
        const formObj = Object.fromEntries(formData.entries());

        formButton.innerHTML += loading();

        postData(formObj)
        .then(() => createAnswerMask(actualForm, success, formModal))
        .catch(() => createAnswerMask(actualForm, error, formModal))
        .finally(() => {
            actualForm.reset();
            loading(formButton);
        });
    }

    forms.forEach(elem => elem.addEventListener('submit', submitEvent));
};

export default form;