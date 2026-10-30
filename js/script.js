// Contact form processing handling simulation
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get values from input
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Basic UI confirmation response feedback simulation
            alert(`Obrigado pelo contato, ${name}! Sua mensagem foi simulada com sucesso.`);
            
            // Reset form
            contactForm.reset();
        });
    }
});
