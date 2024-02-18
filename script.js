let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.hero-text', {delay:200, origin:'top'});
sr.reveal('.hero-img', {delay:450, origin:'top'});
sr.reveal('.scroll-down', {delay:500, origin:'right'});

function scrollSenView() {
    var sensorElement = document.querySelector('.sensors');
    sensorElement.scrollIntoView({ behavior: 'smooth' });
}

function scrollBotView() {
    var bottomElement = document.querySelector('.bottom');
    bottomElement.scrollIntoView({ behavior: 'smooth' });
}