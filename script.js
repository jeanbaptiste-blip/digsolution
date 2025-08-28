// Menu mobile toggle
document.getElementById('menuToggle').addEventListener('click', function() {
    document.getElementById('mainNav').classList.toggle('active');
});

// Fermer le menu en cliquant sur un lien
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('mainNav').classList.remove('active');
    });
});

// Bouton "Découvrir notre équipe"
document.getElementById('teamBtn').addEventListener('click', function() {
    alert('Notre équipe est composée de 15 experts passionnés par le digital :\n- 5 designers UX/UI\n- 6 développeurs full-stack\n- 2 experts en marketing digital\n- 2 consultants en stratégie');
});

// Formulaire de contact
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Merci pour votre message ! Nous vous contacterons très prochainement.');
    this.reset();
});

// Changement de couleur du header au scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(10, 37, 64, 0.95)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
    } else {
        header.style.backgroundColor = 'var(--bleu-nuit)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});