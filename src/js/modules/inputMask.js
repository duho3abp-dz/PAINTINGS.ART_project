'use strict';

const inputMask = ({ inputNameIdentifier }) => {
    const phoneInputs = document.getElementsByName(inputNameIdentifier);

    if ( !phoneInputs.length ) return;

    let value = '';
    let cursorPosition = 0;

    const addValue = input => input.value = value;

    const focusPhoneEvent = e => {
        if ( !value.length ) {
            value = '+7(';
            addValue(e.currentTarget);
        };
    };

    const blurPhoneEvent = e => {
        if ( value ===  '+7(') {
            value = '';
            addValue(e.currentTarget);
        };
    };

    const checkSizeNumbers = () => {
        if (value.length < 3) value = '+7(';
        if (value.length > 16) value = value.slice(0, 16); 
    };

    const transformationValue = currentValue => {
        const clearValue = currentValue.replace(/\D/igm, '').slice(1);
        const valueLength = clearValue.length;
        
        // console.log(currentValue);
        // console.log(clearValue);

        const numeral1 = clearValue.slice(0, 1);
        const numeral2 = clearValue.slice(1, 2);
        const numeral3 = clearValue.slice(2, 3);
        const numeral4 = clearValue.slice(3, 4);
        const numeral5 = clearValue.slice(4, 5);
        const numeral6 = clearValue.slice(5, 6);
        const numeral7 = clearValue.slice(6, 7);
        const numeral8 = clearValue.slice(7, 8);
        const numeral9 = clearValue.slice(8, 9);
        const numeral10 = clearValue.slice(9, 10);

        value = valueLength < 3
        ? `+7(${numeral1}${numeral2}${numeral3}`
        : valueLength === 3
        ? `+7(${numeral1}${numeral2}${numeral3})`
        : valueLength > 3 && valueLength < 6
        ? `+7(${numeral1}${numeral2}${numeral3})${numeral4}${numeral5}${numeral6}`
        : valueLength === 6
        ? `+7(${numeral1}${numeral2}${numeral3})${numeral4}${numeral5}${numeral6}-`
        : valueLength > 6 && valueLength < 8
        ? `+7(${numeral1}${numeral2}${numeral3})${numeral4}${numeral5}${numeral6}-${numeral7}${numeral8}`
        : valueLength === 8
        ? `+7(${numeral1}${numeral2}${numeral3})${numeral4}${numeral5}${numeral6}-${numeral7}${numeral8}-`
        : `+7(${numeral1}${numeral2}${numeral3})${numeral4}${numeral5}${numeral6}-${numeral7}${numeral8}-${numeral9}${numeral10}` ;

        cursorPosition = valueLength === 3 || valueLength === 6 || valueLength === 8 ? cursorPosition + 1 : cursorPosition ;
    }

    const inputPhoneEvent = e => {
        const enteredCharacter = e.data;
        const input = e.currentTarget;
        cursorPosition = input.selectionStart

        console.log(cursorPosition);

        // input.setSelectionRange(0, 0);

        value = +enteredCharacter || enteredCharacter === null ?  input.value : value ;
        transformationValue(input.value);
        // if (enteredCharacter !== null) transformationValue(input.value);
        checkSizeNumbers();

        addValue(input);

        input.setSelectionRange(cursorPosition, cursorPosition);
        console.log(cursorPosition);
    };

    const phoneMask = input => {
        input.addEventListener('focus', focusPhoneEvent);
        input.addEventListener('input', inputPhoneEvent);
        input.addEventListener('blur',  blurPhoneEvent);
    };

    phoneInputs.forEach(input => phoneMask(input));
};

export default inputMask;