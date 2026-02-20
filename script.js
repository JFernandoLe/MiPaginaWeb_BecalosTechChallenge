document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const feedback = document.getElementById('formFeedback');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita que la página se recargue

        // Capturar datos básicos
        const nombre = document.getElementById('nombre').value;
        console.log("Formulario enviado por:", nombre);

        // Mostrar mensaje de éxito visualmente
        feedback.classList.remove('hidden');
        contactForm.reset();

        // Desaparecer el mensaje después de 3 segundos
        setTimeout(() => {
            feedback.classList.add('hidden');
        }, 3000);
    });
});