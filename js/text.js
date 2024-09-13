document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('.container.sec3');
    section.classList.add('not-visible');

    const observer1 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.classList.remove('not-visible');
            } else {
                entry.target.classList.remove('visible');
                entry.target.classList.add('not-visible');
            }
        });
    });

    observer1.observe(section);
});


document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.MAX-article-1 .hidden');

    const observer2 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, 200); // Añadimos un pequeño retraso de 200ms
                observer2.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(element => {
        observer2.observe(element);
    });
});


