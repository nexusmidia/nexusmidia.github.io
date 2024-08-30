window.onload = () => {
    handleHamburgerMenu(); 
    handleScrollHeader();
};

function handleHamburgerMenu() {
    var hamburgerButton = document.querySelector("#hamburger-menu-button");
    var navigation = document.querySelector("header");
    
    hamburgerButton.addEventListener('click', () => {
        navigation.classList.toggle('active');
    })
}

function handleScrollHeader() {
    var navigation = document.querySelector("header");
    var shrinkHeader = 70;

    window.onscroll = () => {
        var scroll = getCurrentScroll();

        if (scroll >= shrinkHeader ) {
            navigation.classList.add('scrolled');
        }
        if (scroll <= 0)  {
            navigation.classList.remove('scrolled');
        }
        
    }
}

function getCurrentScroll() {
    return document.documentElement.scrollTop;
}
