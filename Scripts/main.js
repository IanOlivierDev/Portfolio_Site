const menuBTN = document.querySelector('.nav__menuButton-icon');
const menuSlider = document.querySelector('.nav__menu-slider');
const closeBTN = document.querySelector('.nav__menu-button-close');

menuBTN.addEventListener('click', function(){
    menuSlider.classList.toggle('nav__menu-slider--active');
});

closeBTN.addEventListener('click', function(){
    menuSlider.classList.toggle('nav__menu-slider--active');
});

window.addEventListener('click', function(event){
    if (!menuSlider.contains(event.target) && event.target !== closeBTN && event.target !== menuBTN){
        if(menuSlider.classList.contains('nav__menu-slider--active')){
            menuSlider.classList.remove('nav__menu-slider--active');
        }
    }
})