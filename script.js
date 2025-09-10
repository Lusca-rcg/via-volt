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

        submitButton.disabled = true;
        submitButton.textContent = 'Enviando...';

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const telefone = document.getElementById('telefone').value;
        const mensagem = document.getElementById('mensagem').value;

        const data = {
            nome,
            email,
            telefone,
            mensagem
        };

        fetch('https://webhook.viasolar.rio.br/webhook/formulario-viavolt', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (response.ok) {
                alert('Obrigado por sua mensagem! Entraremos em contato em breve.');
                contactForm.reset();
            } else {
                alert('Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.');
            }
        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.');
        })
        .finally(() => {
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
        });
    });

    // Hamburger menu toggle
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');

    navToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
});
