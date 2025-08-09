document.addEventListener('DOMContentLoaded', () => {
    // Update footer year
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // Reveal sections on scroll
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section').forEach(section => {
        if (!section.classList.contains('hero')) {
            section.classList.add('hidden');
            observer.observe(section);
        }
    });
});
