// efecto parallax
let luna = document.getElementById('luna');
let fondomedio = document.getElementById('fondo-medio');
let fondofront = document.getElementById('fondo-front');
let fondoizquierda = document.getElementById('fondo-izquierda');
let nombre = document.getElementById('nombre');

window.addEventListener('scroll', function () {
    let value = window.scrollY;
    luna.style.left = (value) * -3 + 'px';
    luna.style.top = value * 1.5 + 'px';
    fondomedio.style.top = value * 0.4 + 'px';
    fondoizquierda.style.top = value * 0.7 + 'px';
    nombre.style.left = value * 0.8 + 'px';
    nombre.style.top = value * 0.44 + 'px';

})

// efecto lluvia

function rain() {
    let amount = 8;
    let presentation = document.querySelector('.presentation');
    let i = 0
    while (i < amount) {
        let start = document.createElement('i');

        let size = Math.random() * 2 + 1;
        let posX = Math.random() * window.innerWidth - 250;
        let delay = Math.random() * -10;
        let duration = 7 + Math.random() * 3;

        start.style.width = size + 'px';
        start.style.left = posX + 'px';
        start.style.animationDelay = delay + 's'
        start.style.animationDuration = duration + 's'
        start.style.zIndex = 1
        presentation.appendChild(start);
        i++
    }
}
rain();

// efecto estrellas

function mStart() {
    let amount = 200;
    let limit = document.querySelector('.limit');
    let i = 0
    while (i < amount) {
        let dotStart = document.createElement('i');

        let size = Math.random() * 2 + 1;
        let posX = Math.random() * window.innerWidth;
        let posY = Math.random() * window.innerWidth;
        let delay = Math.random() * 5;
        let duration = Math.random() * 5 + 2;

        dotStart.style.width = size + 'px';
        dotStart.style.height = size + 'px';
        dotStart.style.left = posX + 'px';
        dotStart.style.top = posY + 'px';
        dotStart.style.animationDelay = delay + 's'
        dotStart.style.animationDuration = duration + 's'


        limit.appendChild(dotStart);
        i++
    }
}
mStart();

// efectro navnab
if(window.width > 576 ) {
 window.addEventListener('scroll', function () {
    let header = document.querySelector('.header');
    let scrollBajo = window.scrollY - 300
    header.style.backgroundColor = 'hsla(201, 59%, 10%, ' + scrollBajo / 500 + ')'
})
}else{
    window.addEventListener('scroll', function () {
        let header = document.querySelector('.header');
        let scrollBajo = window.scrollY +20
        header.style.backgroundColor = 'hsla(201, 59%, 10%, ' + scrollBajo / 500 + ')'
    }) 
}


///efceto esfera

