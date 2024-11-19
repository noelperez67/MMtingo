const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

function showItem(index) {
    carouselItems.forEach((item, i) => {
        item.classList.remove('active');
        if (i === index) {
            item.classList.add('active');
        }
    });
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? carouselItems.length - 1 : currentIndex - 1;
    showItem(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === carouselItems.length - 1) ? 0 : currentIndex + 1;
    showItem(currentIndex);
});

// Inicializar
showItem(currentIndex);
const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

// Función para mostrar el elemento actual
function showItem(index) {
    carouselItems.forEach((item, i) => {
        item.classList.remove('active');
        if (i === index) {
            item.classList.add('active');
        }
    });
}

// Función para avanzar al siguiente elemento
function nextItem() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    showItem(currentIndex);
}

// Función para retroceder al elemento anterior
function prevItem() {
    currentIndex = (currentIndex === 0) ? carouselItems.length - 1 : currentIndex - 1;
    showItem(currentIndex);
}

// Eventos para los botones de navegación
nextButton.addEventListener('click', nextItem);
prevButton.addEventListener('click', prevItem);

// Cambio automático cada 5 segundos
setInterval(nextItem, 5000);

// Inicializar
showItem(currentIndex);


const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('hidden');
});
// Seleccionar elementos
const offersContainer = document.querySelector('.offers-container');
const leftControl = document.querySelector('.carousel-control.left');
const rightControl = document.querySelector('.carousel-control.right');

let scrollPosition = 0;
const cardWidth = 200 + 16; // Ancho de cada tarjeta + espacio entre tarjetas
const visibleCards = 5;

// Función para mover el carrusel a la derecha
rightControl.addEventListener('click', () => {
    const maxScroll = (offersContainer.children.length - visibleCards) * cardWidth;
    scrollPosition = Math.min(scrollPosition + cardWidth * visibleCards, maxScroll);
    offersContainer.style.transform = `translateX(-${scrollPosition}px)`;
});

// Función para mover el carrusel a la izquierda
leftControl.addEventListener('click', () => {
    scrollPosition = Math.max(scrollPosition - cardWidth * visibleCards, 0);
    offersContainer.style.transform = `translateX(-${scrollPosition}px)`;
});

// Auto-scroll cada 5 segundos
setInterval(() => {
    rightControl.click();
}, 5000);
