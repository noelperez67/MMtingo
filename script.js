// Selección de elementos
const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');
const scrollToTop = document.getElementById('scrollToTop');
const searchBar = document.getElementById('search-bar');
const catalogItems = document.querySelectorAll('.catalog-item');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

// Función para alternar el menú hamburguesa
hamburger.addEventListener('click', () => {
    navbar.classList.toggle('hidden');
});

// Función para mostrar el botón "Ir Arriba"
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTop.classList.add('visible');
    } else {
        scrollToTop.classList.remove('visible');
    }
});

// Función para regresar al inicio de la página
scrollToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});

// Función para buscar en el catálogo
searchBar.addEventListener('input', (e) => {
    const searchText = e.target.value.toLowerCase();
    catalogItems.forEach((item) => {
        const itemName = item.querySelector('h3').textContent.toLowerCase();
        if (itemName.includes(searchText)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});

// Función para mostrar el elemento activo en el carrusel
function showCarouselItem(index) {
    carouselItems.forEach((item, i) => {
        item.classList.remove('active');
        if (i === index) {
            item.classList.add('active');
        }
    });
}

// Función para avanzar al siguiente elemento del carrusel
function nextCarouselItem() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    showCarouselItem(currentIndex);
}

// Función para retroceder al elemento anterior del carrusel
function prevCarouselItem() {
    currentIndex = (currentIndex === 0) ? carouselItems.length - 1 : currentIndex - 1;
    showCarouselItem(currentIndex);
}

// Eventos para los botones del carrusel
if (prevButton && nextButton) {
    prevButton.addEventListener('click', prevCarouselItem);
    nextButton.addEventListener('click', nextCarouselItem);
}

// Cambio automático del carrusel cada 5 segundos
setInterval(nextCarouselItem, 5000);

// Inicializar carrusel
showCarouselItem(currentIndex);
