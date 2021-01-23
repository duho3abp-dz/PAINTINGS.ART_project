'use strict';

const smoothScrolling = ({ linkSelectors }) => {
    const links = document.querySelectorAll( linkSelectors );

    if ( !links.length ) return;

    let elementOffsetTop, step, height, up = false;

    const scrolling = () => {
        height = height < elementOffsetTop ?  height + step : height - step;

        const condition = (!up && height < elementOffsetTop) || (up && height > elementOffsetTop);

        window.scrollTo( 0, condition ? height : elementOffsetTop );
        condition ? window.requestAnimationFrame( scrolling ) : height = 0;
    };

    links.forEach(link => link.addEventListener('click', function( e ) {
        e.preventDefault();

        height = document.documentElement.scrollTop;
        elementOffsetTop = document.querySelector( this.hash ).offsetTop;
        up = height < elementOffsetTop ? false : true ;
        step = Math.floor( (height < elementOffsetTop ? +elementOffsetTop : +height) / 20 );
        
        window.requestAnimationFrame( scrolling );
    }));
};

export default smoothScrolling;