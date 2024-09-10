const images = document.querySelectorAll('.MAX-image-container img');
let currentIndex = 0;

function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}

setInterval(showNextImage, 3000); // Cambia de imagen cada 3 segundos

// Inicializa la primera imagen como activa
images[currentIndex].classList.add('active');
