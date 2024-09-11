const gatito = document.getElementById('gatito');
const footer = document.querySelector('footer');
let x = 0;
let dx = 2;
let direction = 1;

function moverGatito() {
    x += dx * direction;

    if (x + gatito.width > footer.clientWidth - 2 || x < 0) {
        direction *= -1;
        gatito.style.transform = `scaleX(${direction})`;
    }

    gatito.style.left = x + 'px';

    requestAnimationFrame(moverGatito);
}

gatito.addEventListener('mouseover', () => {
    direction *= -1;
    gatito.style.transform = `scaleX(${direction})`;
});

moverGatito();
