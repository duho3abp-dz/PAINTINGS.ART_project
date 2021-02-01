'use strict';

import { postData } from '../services/services';
import closeModal from './closeModal';
import loading from './loading';
import { changeSplitName, correctViewName } from './createFileName';

const form = ({ 
    formsIdentifier, 
    uploadIdentifier,
    answerBlockClass,
    orderButtonClass,
    uploadDefaultText = 'Файл не выбран',
    durationAnswer = 2000,
    answerStatus: { success, error }
}) => {
    const forms = document.querySelectorAll(formsIdentifier);
    const upload = document.querySelectorAll(uploadIdentifier);
    
    if ( !forms.length || !upload.length ) return;

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
        const sizeSelect = actualForm.querySelector('[name="size"]');
        const materialSelect = actualForm.querySelector('[name="material"]');
        const calcTotal = actualForm.querySelector('[name="total"]');

        let formObj = Object.fromEntries(formData.entries());

        if ( 
            sizeSelect && sizeSelect.value === 'Выберите размер картины' ||
            materialSelect && materialSelect.value === 'Выберите материал картины'
        ) { return } else if ( calcTotal ) formObj = { ...formObj, total: calcTotal.textContent };
        
        console.log(formObj);

        formButton.innerHTML += loading();

        postData('posts', formObj)
        .then(() => createAnswerMask(actualForm, success, formModal))
        .catch(() => createAnswerMask(actualForm, error, formModal))
        .finally(() => {
            actualForm.reset();
            loading(formButton);
            upload.forEach(item => item.previousElementSibling.textContent = uploadDefaultText);
        });
    }

    const inputEvent = e => {
        const upload = e.target;
        const file = upload.files[0];
        const fileName = file.name;
        const splitName = fileName.split('.');
        const checkSplitName = splitName.length > 2 ? changeSplitName(splitName) : splitName ;
        const correctName = correctViewName(checkSplitName);

        upload.previousElementSibling.textContent = correctName;
    };

    forms.forEach(elem => elem.addEventListener('submit', submitEvent));
    upload.forEach(elem => elem.addEventListener('input', inputEvent));
};

export default form;