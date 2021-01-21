'use strict';

const filterElements = ({
    parentButtonsIdentifier,
    parentElementsIdentifier,
    activeButtonClass,
    noContentBlockIdentifier
}) => {
    const buttonsParent = document.querySelector(parentButtonsIdentifier);
    const elmentsParent = document.querySelector(parentElementsIdentifier);
    const noContentBlock = document.querySelector(noContentBlockIdentifier);

    if ( !buttonsParent || !elmentsParent || !noContentBlock ) return;

    const buttons = buttonsParent.children;
    const elements = elmentsParent.children;

    const changeActiveTab = button => {
        buttons.forEach(item => item.classList.remove(activeButtonClass));
        button.classList.add(activeButtonClass);
    };

    const filterByName = name => {
        let blockElements = [];

        elements.forEach(element => {
            element.style.display = element.classList.contains(name) ? 'block' : 'none' ;
            if ( element.style.display !== 'block' ) return;
            blockElements = [ ...blockElements, element ];
        });
        
        noContentBlock.style.display = blockElements.length ? 'none' : 'block';
    };

    const clickEvent = e => {
        const button = e.target;

        if ( 
            button === e.currentTarget || 
            button.classList.contains(activeButtonClass)
        ) return;
        
        filterByName(button.className);
        changeActiveTab(button);
    };

    elements.forEach(elem => elem.classList.add('animated', 'fadeIn'));
    buttonsParent.addEventListener('click', clickEvent);
};

export default filterElements;