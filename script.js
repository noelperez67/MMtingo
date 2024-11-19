// Alternar Menú
const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('hidden');
});

// Mostrar Departamentos
function showDepartment(departmentId) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.add('hidden'));
    document.getElementById(departmentId).classList.remove('hidden');
}

// Inicializar Mapa
function initMap() {
    const location = { lat: 18.4811, lng: -69.9417 }; // Coordenadas del lugar
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: location,
    });
    new google.maps.Marker({ position: location, map: map });
}

// Carrusel de Ofertas
const offersContainer = document.querySelector('.offers-container');
const leftControl = document.querySelector('.carousel-control.left');
const rightControl = document.querySelector('.carousel-control.right');

let scrollPosition = 0;
const cardWidth = 200 + 16; // Ancho de cada tarjeta + espacio entre tarjetas
const visibleCards = 5;

rightControl.addEventListener('click', () => {
    const maxScroll = (offersContainer.children.length - visibleCards) * cardWidth;
    scrollPosition = Math.min(scrollPosition + cardWidth * visibleCards, maxScroll);
    offersContainer.style.transform = `translateX(-${scrollPosition}px)`;
});

leftControl.addEventListener('click', () => {
    scrollPosition = Math.max(scrollPosition - cardWidth * visibleCards, 0);
    offersContainer.style.transform = `translateX(-${scrollPosition}px)`;
});

// Auto-scroll para el carrusel cada 5 segundos
setInterval(() => {
    rightControl.click();
}, 5000);

// Función del carrusel
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

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    showItem(currentIndex);
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? carouselItems.length - 1 : currentIndex - 1;
    showItem(currentIndex);
});

// Inicializar carrusel
showItem(currentIndex);
