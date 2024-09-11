document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const content = entry.target.querySelector('.press_here');
                content.style.display = 'block';
                requestAnimationFrame(() => {
                    content.style.opacity = 1;
                });
                setTimeout(() => {
                    content.style.opacity = 0;
                    content.addEventListener('transitionend', () => {
                        content.style.display = 'none';
                    }, { once: true });
                }, 3000);
            }
        });
    });

    observer.observe(document.querySelector('#sec2'));
    observer.observe(document.querySelector('#sec2a'));
});




