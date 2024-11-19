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
