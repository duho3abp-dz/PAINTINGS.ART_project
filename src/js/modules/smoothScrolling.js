'use strict';

const smoothScrolling = ({ 
    linkSelectors = '[href^="#"]',
    pageUpElementSelector,
    speed = 20
}) => {
    const links = document.querySelectorAll( linkSelectors );
    const pageUpElement = document.querySelector( pageUpElementSelector );

    if ( !links.length || (pageUpElementSelector && !pageUpElement) ) return;

    let elementOffsetTop, timer, step, height, up = false;

    const scrolling = () => {
        height = height < elementOffsetTop ?  height + step : height - step;

        const condition = (!up && height < elementOffsetTop) || (up && height > elementOffsetTop);

        window.scrollTo( 0, condition ? height : elementOffsetTop );
        if ( condition ) window.requestAnimationFrame( scrolling );
    };

    const windowScrollPageUp = () => {
        if ( +document.documentElement.scrollTop && !pageUpElement.classList.contains('active') ) {
            pageUpElement.classList.add('active');
        }

        window.addEventListener('scroll', () => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                if ( +document.documentElement.scrollTop ) {
                    if ( !pageUpElement.classList.contains('active') ) pageUpElement.classList.add('active');
                } else pageUpElement.classList.remove('active');
            }, 300);
        })
    };

    links.forEach(link => link.addEventListener('click', function( e ) {
        e.preventDefault();

        height = document.documentElement.scrollTop;
        elementOffsetTop = document.querySelector( this.hash ).offsetTop;
        up = height < elementOffsetTop ? false : true ;
        step = Math.floor( (height < elementOffsetTop ? +elementOffsetTop : +height) / speed );

        history.replaceState( history.state, document.title, location.href.replace(/#.*$/g, '') + this.hash );
        window.requestAnimationFrame( scrolling );
    }));

    if ( pageUpElement ) windowScrollPageUp();
};

export default smoothScrolling;