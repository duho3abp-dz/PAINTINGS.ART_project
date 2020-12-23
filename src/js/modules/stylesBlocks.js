'use strict';

const stylesBlocks = ({
    loadingButtonIdentifier,
    stylesBlocksIdentifier
}) => {
    const button = document.querySelector(loadingButtonIdentifier);
    const blocks = document.querySelectorAll(stylesBlocksIdentifier);
    const blocksLength = blocks.length - 1;

    if (!button || !blocks.length) return;

    let index = 0;

    const addBlock = e => {
        e.preventDefault();

        blocks[index].style.display = 'block';
        button.style.display = index === blocksLength ? 'none' : '' ;
        index++;
    };

    button.addEventListener('click', addBlock);
};

export default stylesBlocks;