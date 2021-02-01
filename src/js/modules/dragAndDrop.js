'use strict';

import { changeSplitName, correctViewName } from './createFileName';

const dragAndDrop = ({ dropElementsSelector, dropWrapSelector }) => {
    const dropElements = document.querySelectorAll( dropElementsSelector );

    if ( !dropElements.length ) return;

    const blockBacklight = ( input, light ) => {
        const block = input.closest(dropWrapSelector);
        block.style.border = light ? '3px solid yellow' : '';
        block.style.backgroundColor = light ? 'black' : '';
        block.style.opacity = light ? '0.7' : '';
    };

    const dropEvent = e => {
        const upload = e.target;
        const file = e.dataTransfer.files;
        const fileName = file[0].name;
        const splitName = fileName.split('.');
        const checkSplitName = splitName.length > 2 ? changeSplitName(splitName) : splitName ;
        const correctName = correctViewName(checkSplitName);

        upload.previousElementSibling.textContent = correctName;
    };

    [ 'dragenter', 'dragleave', 'dragover', 'drop' ]
    .forEach(eventName => dropElements.forEach(dropElement => dropElement.addEventListener(eventName, e => {
            e.preventDefault();
            e.stopPropagation();

            e.type === 'dragenter' || e.type === 'dragover' 
            ? blockBacklight(dropElement, true) 
            : blockBacklight(dropElement);

            if (e.type === 'drop') dropEvent(e);
    })));


};

export default dragAndDrop;