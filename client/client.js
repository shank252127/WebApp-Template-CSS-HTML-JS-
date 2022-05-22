const menu = document.querySelector('.menu');
const closeNav = document.querySelector('.close');
const nav = document.querySelector('nav');


menu.addEventListener('click', () => {
    nav.classList.add('open-nav');
})

closeNav.addEventListener('click',()=>{    
    nav.classList.remove('open-nav')
})