'use strict';

const filterElements = ({
    parentButtonsIdentifier,
    parentElementsIdentifier,
    activeButtonClass
}) => {
    const buttonsParent = document.querySelector(parentButtonsIdentifier);
    const elmentsParent = document.querySelector(parentElementsIdentifier);

    if ( !buttonsParent || !elmentsParent ) return;

    const buttons = buttonsParent.children;
    const elements = elmentsParent.children;

    const changeActiveTab = button => {
        buttons.forEach(item => item.classList.remove(activeButtonClass));
        button.classList.add(activeButtonClass);
    };

    const filterByName = name => elements.forEach(element => {
        element.style.display = element.classList.contains(name) ? 'block' : 'none' ;
    });

    const clickEvent = e => {
        const button = e.target;

        if ( 
            button === e.currentTarget || 
            button.classList.contains(activeButtonClass)
        ) return;
        
        filterByName(button.className);
        changeActiveTab(button);
    };

    buttonsParent.addEventListener('click', clickEvent);
};

export default filterElements;