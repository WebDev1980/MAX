function scrollToBottom() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    document.getElementById('gatoDOWN').style.opacity = '0';
    setTimeout(function() {
        document.getElementById('gatoUP').style.opacity = '0.7';
    }, 1000); // Ajusta el tiempo según la duración del scroll
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.getElementById('gatoUP').style.opacity = '0';
    setTimeout(function() {
        document.getElementById('gatoDOWN').style.opacity = '0.7';
    }, 1000); // Ajusta el tiempo según la duración del scroll
}

let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    let currentScrollTop = window.scrollY;

    if (currentScrollTop === 0) {
        document.getElementById('gatoDOWN').style.opacity = '0.7';
        document.getElementById('gatoUP').style.opacity = '0';
    } else if (window.innerHeight + currentScrollTop >= document.body.offsetHeight) {
        document.getElementById('gatoDOWN').style.opacity = '0';
        document.getElementById('gatoUP').style.opacity = '0.7';
    } else if (currentScrollTop < lastScrollTop) {
        // Scroll hacia arriba
        document.getElementById('gatoUP').style.opacity = '0';
    } else {
        // Scroll hacia abajo
        document.getElementById('gatoUP').style.opacity = '0.7';
    }

    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // Asegura que lastScrollTop no sea negativo
});
