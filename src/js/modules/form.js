'use strict';

import { postData } from '../services/services';
import closeModal from './closeModal';

const form = ({ 
    formsIdentifier, 
    answerBlockClass,
    durationAnswer = 2000,
    answerStatus: { success, error }
}) => {
    const forms = document.querySelectorAll(formsIdentifier);
    
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
        const formData = new FormData(actualForm);
        const formObj = Object.fromEntries(formData.entries());

        postData(formObj)
        .then(() => createAnswerMask(actualForm, success, formModal))
        .catch(() => createAnswerMask(actualForm, error, formModal))
        .finally(() => actualForm.reset());
    }

    forms.forEach(elem => elem.addEventListener('submit', submitEvent));
};

export default form;