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
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;

        // Desabilitar o botão e mostrar feedback de envio
        submitButton.disabled = true;
        submitButton.textContent = 'Enviando...';

        // Simulação de envio de formulário (atraso de 1 segundo)
        setTimeout(() => {
            // Exibir mensagem de sucesso (pode ser um modal ou uma notificação mais elegante)
            alert('Obrigado por sua mensagem! Entraremos em contato em breve.');

            // Limpar o formulário
            contactForm.reset();

            // Restaurar o botão
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
        }, 1000);
    });

    // Hamburger menu toggle
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');

    navToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
});
