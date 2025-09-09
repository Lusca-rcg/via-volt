document.addEventListener('DOMContentLoaded', () => {
    // Exemplo de script: Smooth scroll para links internos
    const navLinks = document.querySelectorAll('a[href^="#"]');

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

    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            if (this.checkValidity()) {
                const formContainer = this.parentElement;
                formContainer.innerHTML = '<h2>Obrigado!</h2><p>Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.</p>';
            } else {
                // Optionally, add custom validation feedback here
                this.reportValidity();
            }
        });
    }
});