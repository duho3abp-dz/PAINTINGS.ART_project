'use strict';

const accordion = ({
    headingsIdentifier,
    blocksIdentifier,
    headerActiveClass
}) => {
    const headings = document.querySelectorAll(headingsIdentifier);
    const blocks = document.querySelectorAll(blocksIdentifier);

    if (
        !headings.length || !blocks.length ||
        headings.length !== blocks.length
    ) return;

    let blocksheights = [];

    const hideBlock = ( block, head ) => {
        head.classList.remove(headerActiveClass);
        block.style.height = '0px';
        block.style.overflow = 'hidden';
        block.style.opacity = '0';
    }

    const showBlock = ( block, head, height ) => {
        head.classList.add(headerActiveClass);
        block.style.opacity = '1';
        block.style.height = `${height}px`;
        setTimeout(() => block.style.overflow = '', 200);
    }

    const setHeightsAndHideBlocks = () => {
        blocks.forEach((block, i) => {
            blocksheights = [ ...blocksheights, block.clientHeight ];
            hideBlock(block, headings[i]);
        });
    };

    const headingClickEvent = () => {
        headings.forEach((head, i) => head.addEventListener('click', e => {
            e.preventDefault();

            parseInt( blocks[i].style.height ) 
            ? hideBlock(blocks[i], head) : showBlock(blocks[i], head, blocksheights[i]) ;
        }));
    };

    setHeightsAndHideBlocks();
    headingClickEvent();
};

export default accordion;