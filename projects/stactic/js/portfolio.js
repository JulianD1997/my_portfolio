const pageSection = new fullpage('#fullpage',{
    //opciones basicas libreria fullpage

    autoScrolling: true,
    easing:'easeInOutCubic',
    scrollingSpeed:600,
    css3: true,
    easingcss3:'ease-out',
    loopBottom:false,

    //opciones de navegacion
    navigation: true,
    menu: '#menu',
    anchors:['perfil','acerca','estudios','habilidades','proyectos','contacto'],
    navigationToolTips:['perfil','acerca','estudios','habilidades','proyectos','contacto'],
    showActiveToolTip:false,
});
const tipeado = new Typed('.auto__type',{
    strings:['Desarrollador','Autodidacta','Ingeniero Mecatrónico'],
    typeSpeed:100,
    backSpeed:50,
    loop:true,
})