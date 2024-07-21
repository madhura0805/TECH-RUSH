document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.accordion-title');

    accordions.forEach(accordion => {
        accordion.addEventListener('click', () => {
            accordion.classList.toggle('active');
            const content = accordion.nextElementSibling;
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });
});

