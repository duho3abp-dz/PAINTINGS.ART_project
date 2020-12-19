'use strict';

import { postData } from '../services/services';

const form = ({ formsIdentifier }) => {
    const forms = document.querySelectorAll(formsIdentifier);

    if (!forms.length) return;

    const submitEvent = e => {
        e.preventDefault();

        const actualForm = e.currentTarget;
        const formData = new FormData(actualForm);
        const formObj = Object.fromEntries(formData.entries());

        postData(formObj)
        .then(resp => console.log('ok'))
        .catch(resp => console.log('error'));        
    }

    forms.forEach(elem => elem.addEventListener('submit', submitEvent));
};

export default form;