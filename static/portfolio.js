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

