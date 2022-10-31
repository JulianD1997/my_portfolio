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
console.log(totalCards)
function carrusel(i = 0){
    carruselContainer.style.transform = `translateX(${-i*440}px)`;
    cards[i].setAttribute()
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
                console.log(document.getElementsByClassName('form__label')[0])
            } else {
                document.getElementsByClassName('form__label')[0].classList.remove('oculto')
                console.log(document.getElementsByClassName('form__label')[0])
            }
            break;
        case 'email':
            if (input.target.value.length > 0) {
                document.getElementsByClassName('form__label')[1].classList.add('oculto')
                console.log(document.getElementsByClassName('form__label')[1])
            } else {
                document.getElementsByClassName('form__label')[1].classList.remove('oculto')
                console.log(document.getElementsByClassName('form__label')[1])
            }
            break;
        case 'subject':
            if (input.target.value.length > 0) {
                document.getElementsByClassName('form__label')[2].classList.add('oculto')
                console.log(document.getElementsByClassName('form__label')[2])
            } else {
                document.getElementsByClassName('form__label')[2].classList.remove('oculto')
                console.log(document.getElementsByClassName('form__label')[2])
            }
            break;
        case 'text__area':
            if (input.target.value.length > 0) {
                document.getElementsByClassName('form__label')[3].classList.add('oculto')
                console.log(document.getElementsByClassName('form__label')[3])
            } else {
                document.getElementsByClassName('form__label')[3].classList.remove('oculto')
                console.log(document.getElementsByClassName('form__label')[3])
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