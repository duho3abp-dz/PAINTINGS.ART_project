'use strict';

import { postData } from '../services/services';
import closeModal from './closeModal';
import loading from './loading';

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
        const formObj = Object.fromEntries(formData.entries());
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

    const changeSplitName = arr => {
        return arr.reduce((res, str, ind) => {
            return ind <= 0 ? [ str ] : ind >= arr.length - 1 
                ? [ ...res, str ] : [ `${res}.${str}` ] ;
        }, []);
    };

    const correctViewName = arr => {
        return arr.reduce((res, str, ind) => {
            const corrStr = str.length > 6 ? `${str.slice(0, 7)}...` : str ;
            return ind <= 0 ? corrStr : `${res} .${str}` ;
        }, '');
    };

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