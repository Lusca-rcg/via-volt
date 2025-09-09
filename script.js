document.addEventListener('DOMContentLoaded', () => {
    // Exemplo de script: Smooth scroll para links internos
    const navLinks = document.querySelectorAll('.nav a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - document.querySelector('.header').offsetHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Você pode adicionar mais funcionalidades aqui, como validação de formulário
    // ou animações ao rolar a página.
});