setTimeout(function() {
    document.getElementById('loading-screen').style.opacity = '0';
    document.getElementById('image-wrapper').style.opacity = '0';
}, 8000);

// Después de 1 segundo (tiempo de la transición), oculta los elementos
setTimeout(function() {
    document.getElementById('loading-screen').style.display = 'none';
    document.getElementById('image-wrapper').style.display = 'none';
}, 9000);