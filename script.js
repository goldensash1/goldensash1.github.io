function setTheme(theme) {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
    const themeToggle = document.querySelector('.theme-toggle');
    themeToggle.innerHTML = theme === 'light-theme' 
        ? '<i class="fas fa-sun"></i>' 
        : '<i class="fas fa-moon"></i>';
}

function toggleTheme() {
    const currentTheme = document.body.classList.contains('light-theme') 
        ? '' 
        : 'light-theme';
    setTheme(currentTheme);
}

// Load saved theme
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || '';
    setTheme(savedTheme);
});

// Mobile Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.timeline-item, .project-card').forEach(el => observer.observe(el));

// Interactive Card Tilt
// document.addEventListener('mousemove', (e) => {
//     const cards = document.querySelectorAll('.project-card, .profile-img');
//     cards.forEach(card => {
//         const rect = card.getBoundingClientRect();
//         const x = e.clientX - rect.left;
//         const y = e.clientY - rect.top;
//         card.style.transform = `perspective(1000px) rotateX(${(y - rect.height/2)/20}deg) rotateY(${-(x - rect.width/2)/20}deg)`;
//     });
// });

// document.querySelectorAll('.resume-btn').forEach(btn => {
//     btn.addEventListener('click', function(e) {
//         e.preventDefault();
//         window.open(this.href, this.target);
//     });
// });