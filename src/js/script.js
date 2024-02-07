const header = document.querySelector("header")


window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 60)
});

let menu = document.querySelector('#menu-icon')
let navlist = document.querySelector('.navlist')

menu.onclick = () => {
    header.classList.toggle('head')
    menu.classList.toggle('bx-x')
    navlist.classList.toggle('open')
}

window.onscroll = () => {
    menu.classList.remove('bx-x')
    header.classList.remove('head')
    navlist.classList.remove('open')
}

const servicesContent = document.querySelector('.services-content');
let isDragging = false;
let startX;
let scrollLeft;

servicesContent.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - servicesContent.offsetLeft;
    scrollLeft = servicesContent.scrollLeft;
});

servicesContent.addEventListener('mouseup', () => {
    isDragging = false;
});

servicesContent.addEventListener('mouseleave', () => {
    isDragging = false;
});

servicesContent.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - servicesContent.offsetLeft;
    const walk = (x - startX) * 0.8; // Ajuste a sensibilidade do arrastar conforme necessário
    servicesContent.scrollLeft = scrollLeft - walk;
});

// Adicione a funcionalidade de toque para dispositivos móveis
servicesContent.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].pageX - servicesContent.offsetLeft;
    scrollLeft = servicesContent.scrollLeft;
});

servicesContent.addEventListener('touchend', () => {
    isDragging = false;
});

servicesContent.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.touches[0].pageX - servicesContent.offsetLeft;
    const walk = (x - startX) * 0.8; // Ajuste a sensibilidade do arrastar conforme necessário
    servicesContent.scrollLeft = scrollLeft - walk;
});



