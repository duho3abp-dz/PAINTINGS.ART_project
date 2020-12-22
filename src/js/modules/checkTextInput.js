'use strict';

const checkTextInput = ({ inputNameIdentifier }) => {
    const inputs = document.getElementsByName(inputNameIdentifier);

    if ( !inputs.length ) return;

    const inputEvent = e => {
        const input = e.currentTarget;
        const value = input.value;
        const letters = value.replace(/\W/igm, '');
        const lettersWithoutNumbers = [...letters.replace(/\d/igm, '')];
        const clearValue = [...value]
            .filter(letter => !lettersWithoutNumbers.filter(str => letter === str).length)
            .join('');

        input.value = clearValue;
    };

    inputs.forEach(input => input.addEventListener('input', inputEvent));
};

export default checkTextInput;