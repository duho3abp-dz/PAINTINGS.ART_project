'use strict';

const dragAndDrop = ({ dropElementsSelector }) => {
    const dropElements = document.querySelectorAll( dropElementsSelector );

    if ( !dropElements.length ) return;

    [ 'dragenter', 'dragleave', 'dragover', 'drop' ]
    .forEach(eventName => dropElements.forEach(dropElement => 
        dropElement.addEventListener(eventName, e => {
            e.preventDefault();
            e.stopPropagation();
            console.log('ok');
    })));
};

export default dragAndDrop;