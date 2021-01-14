'use strict';

const burger = ({
    buttonIdentifier,
    menuIdentifier,
    maxWidth
}) => {
    const button = document.querySelector(buttonIdentifier);
    const menu = document.querySelector(menuIdentifier);

    if ( !button || !menu ) return;

    const checkWidth = () => window.innerWidth <= maxWidth

    let open = checkWidth();
    let timer;

    const clickEvent = () => {
        if (!open) return;
        menu.style.display = menu.style.display === 'none' ? 'block' : 'none' ;
    };

    const resizeEvent = () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            open = checkWidth();
            if ( !open &&  menu.style.display === 'block' ) menu.style.display = 'none' ;
        }, 150);
    };

    button.addEventListener('click', clickEvent);
    window.addEventListener('resize', resizeEvent);
};

export default burger;