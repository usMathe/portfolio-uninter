// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', () => {
    
    // --- LÓGICA DO TEMA ESCURO/CLARO  ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggleBtn.addEventListener('click', () => {
        // Alterna a classe 'dark-theme' no body
        body.classList.toggle('dark-theme');

        // Atualiza o texto do botão
        if (body.classList.contains('dark-theme')) {
            themeToggleBtn.innerText = '☀️ Tema';
        } else {
            themeToggleBtn.innerText = '🌙 Tema';
        }
    });

    // --- VALIDAÇÃO E ENVIO DO FORMULÁRIO ---
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio real do formulário

        // Captura os valores
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        // Validação Simples
        if (nome === '' || email === '' || mensagem === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        // Validação de formato de E-mail (Regex Simples)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, insira um e-mail válido (ex: usuario@dominio.com).');
            return;
        }

        // Simulação de envio com sucesso
        alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.\n\n(Isto é apenas uma simulação JS)`);
        
        // Limpa o formulário
        contactForm.reset();
    });
});