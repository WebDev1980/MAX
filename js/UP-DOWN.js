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
window.addEventListener('scroll', function() {
    if (window.scrollY === 0) {
        document.getElementById('gatoDOWN').style.opacity = '0.7';
        document.getElementById('gatoUP').style.opacity = '0';
    } else if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        document.getElementById('gatoDOWN').style.opacity = '0';
        document.getElementById('gatoUP').style.opacity = '0.7';
    } else if (window.scrollY < document.body.scrollHeight - window.innerHeight) {
        document.getElementById('gatoUP').style.opacity = '0';
    }
});