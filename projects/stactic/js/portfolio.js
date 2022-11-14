//fullpage
const pageSection = new fullpage('#fullpage', {
    //opciones basicas libreria fullpage

    autoScrolling: true,
    easing: 'easeInOutCubic',
    scrollingSpeed: 600,
    css3: true,
    easingcss3: 'ease-out',
    loopBottom: false,

    //opciones de navegacion
    navigation: true,
    menu: '#menu',
    anchors: ['perfil', 'acerca', 'estudios', 'habilidades', 'proyectos', 'contacto'],
    navigationToolTips: ['perfil', 'acerca', 'estudios', 'habilidades', 'proyectos', 'contacto'],
    showActiveToolTip: false,
});

//tipado perfil
const tipeado = new Typed('.auto__type', {
    strings: ['Desarrollador', 'Autodidacta', 'Ingeniero Mecatrónico'],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
})

//proyectos carrucel

const carruselContainer = document.getElementById('carrusel')
const cards = Array.from(document.getElementsByClassName('card'))
const btnSiguiente = document.getElementById('next')
const btnAnterior = document.getElementById('prev')
let totalCards = cards.length-1
let inicio = 0
//media query carrusel max 850px
let screen_550 = window.matchMedia("(max-width: 550px)")
let screen_850 = window.matchMedia("(max-width: 850px)")
let screen_1149 = window.matchMedia("(max-width: 1149px)")

cards[0].classList.add('scale_card')
function carrusel(i = 0){
    cards.forEach((card)=>{
        card.classList.remove('scale_card')
    })
    if(screen_550.matches){
        carruselContainer.style.transform = `translateX(${-i*235}px)`;
    }
    else if (screen_850.matches){
        carruselContainer.style.transform = `translateX(${-i*330}px)`;
    }
    else if (screen_1149.matches){
        carruselContainer.style.transform = `translateX(${-i*350}px)`;
    }
    else{
        carruselContainer.style.transform = `translateX(${-i*440}px)`;
        
    }
    cards[i].classList.add('scale_card')
}
cards.forEach((card,i) => {
    card.addEventListener('click', () =>{
        id=i
        carrusel(i)
    })
})
btnAnterior.addEventListener('click',()=>{
    if(inicio > 0){
        inicio--
        carrusel(inicio)
    }
})
btnSiguiente.addEventListener('click',()=>{
    if(inicio < totalCards){
        inicio++
        carrusel(inicio)
    }
})
//formulario
function validarInputs(input) {
    switch (input.target.name) {
        case 'name':
            if (input.target.value.length > 0) {
                document.getElementsByClassName('form__label')[0].classList.add('oculto')
            } else {
                document.getElementsByClassName('form__label')[0].classList.remove('oculto')
            }
            break;
        case 'email':
            if (input.target.value.length > 0) {
                document.getElementsByClassName('form__label')[1].classList.add('oculto')
            } else {
                document.getElementsByClassName('form__label')[1].classList.remove('oculto')
            }
            break;
        case 'subject':
            if (input.target.value.length > 0) {
                document.getElementsByClassName('form__label')[2].classList.add('oculto')
            } else {
                document.getElementsByClassName('form__label')[2].classList.remove('oculto')
            }
            break;
        case 'text__area':
            if (input.target.value.length > 0) {
                document.getElementsByClassName('form__label')[3].classList.add('oculto')
            } else {
                document.getElementsByClassName('form__label')[3].classList.remove('oculto')
            }
            break;
    }
}
const expresionesRegulares = {
    nombre: /^[a-zA-ZÄ-ÿ\s]{1,40}$/,
    email: /^[\w\d.-]*@?[\w\d]*\.[\w\d]+$/,
}
const formulario = document.getElementById('form')
const inputs = document.querySelectorAll('.form__input')
inputs.forEach(input => {
    input.addEventListener('blur', validarInputs)
})

//barra de navegacion//
let burger = document.getElementById('burger')
let menu = document.getElementById('menu')
burger.addEventListener('click',()=>{
    console.log('aca')
    if(burger.classList.contains('activo')){
        burger.classList.remove('activo')
        burger.classList.add('no_activo')
        menu.classList.remove('media')
    }
    else{
        burger.classList.add('activo')
        burger.classList.remove('no_activo')
        menu.classList.add('media')
    }
})