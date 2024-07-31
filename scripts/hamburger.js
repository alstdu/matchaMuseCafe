const hamburger = document.querySelector( '.hamburger' );
const overlay = document.querySelector( '.navigation-overlay' );
const sidebar = document.querySelector( '.navigation-sidebar' );

[ hamburger, overlay ].forEach( x => x?.addEventListener( 'click', () => {
    // toggle the "active" class on hamburger
    hamburger?.classList.toggle('active');
    // toggle visibility of the menu
    sidebar?.classList.toggle('active');
    if ( !overlay?.style ) return;
    overlay.style.display = overlay.style?.display === 'none' ? null : 'none';
} ) );
