// ====================================
// NAVIGATION — scroll state + mobile menu
// ====================================
const navbar = document.getElementById('navbar');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 30) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ====================================
// CONSOLE EASTER EGG
// ====================================
console.log(
    '%cJuan Rodríguez Castellano',
    'color: #4f8cff; font-size: 20px; font-weight: 700; font-family: sans-serif;'
);
console.log(
    '%cJunior Cybersecurity Analyst · SOC & Microsoft Security',
    'color: #a5acb8; font-size: 13px;'
);
console.log(
    '%c→ juanrc98.github.io',
    'color: #3ccf8e; font-size: 12px; font-family: monospace;'
);


