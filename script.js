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
    let sensorElement = document.querySelector('.sensors');
    sensorElement.scrollIntoView({ behavior: 'smooth' });
}

function scrollBotView() {
    let bottomElement = document.querySelector('.bottom');
    bottomElement.scrollIntoView({ behavior: 'smooth' });
}

function openPopup() {
    document.getElementById('videoFrame').src = 'https://www.youtube.com/embed/Teg4DLhvi4o?autoplay=1';

    document.getElementById('videoPopup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('videoPopup').style.display = 'none';

    document.getElementById('videoFrame').src = '';
}

let popup = document.getElementById('videoPopup');

popup.addEventListener('click', function(event) {
    if (event.target === popup) {
        closePopup();
    }
});