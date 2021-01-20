'use strict';

import { getData } from '../services/services';

const stylesBlocks = ({
    loadingButtonIdentifier,
    wrapperIdentifier
}) => {
    const button = document.querySelector(loadingButtonIdentifier);
    const wrapper = document.querySelector(wrapperIdentifier);

    if ( !button || !wrapper ) return;

    const renderBlock = props => {
        props.forEach(({src, title, link}) => {
            const block = document.createElement('div');
            block.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
            block.innerHTML = `
                <div class=styles-block>
                    <img src=${src} alt=${title}>
                    <h4>${title}</h4>
                    <a href=${link}>Подробнее</a>
                </div>
            `;
            wrapper.append(block);
        });
    };

    const addBlock = e => {
        e.preventDefault();

        getData('styles')
        .then(props => renderBlock(props))
        .catch(error => console.log(error));
    };

    button.addEventListener('click', addBlock);
};

export default stylesBlocks;