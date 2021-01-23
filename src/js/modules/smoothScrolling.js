'use strict';

const smoothScrolling = ({
    linkSelectors
}) => {
    const links = document.querySelectorAll(linkSelectors);

    if ( !links.length ) return;

    let elementOffsetTop, step, height = 0;

    const scrolling = () => {
        height += step;
        window.scrollTo(0, height < elementOffsetTop ? height : elementOffsetTop);
        height < elementOffsetTop ?  window.requestAnimationFrame(scrolling) : height = 0;
    };

    links.forEach(link => link.addEventListener('click', function(e) {
        e.preventDefault();

        elementOffsetTop = document.querySelector(this.hash).offsetTop;
        step = Math.floor(+elementOffsetTop / 20);
        window.requestAnimationFrame(scrolling);
    }));
};

export default smoothScrolling;