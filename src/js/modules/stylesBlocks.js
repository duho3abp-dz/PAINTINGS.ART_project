'use strict';

const stylesBlocks = ({
    loadingButtonIdentifier,
    stylesBlocksIdentifier
}) => {
    const button = document.querySelector(loadingButtonIdentifier);
    const blocks = document.querySelectorAll(stylesBlocksIdentifier);

    if (!button || !blocks.length) return;

    const addBlock = e => {
        e.preventDefault();

        blocks.forEach(block => {
            block.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs', 'styles-2');
            block.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
        });
        
        button.remove();
    };

    blocks.forEach(block => block.classList.add('animated', 'fadeInUp'));
    button.addEventListener('click', addBlock);
};

export default stylesBlocks;