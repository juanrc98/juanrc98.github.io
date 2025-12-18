// ====================================
// LOADER
// ====================================
document.addEventListener('DOMContentLoaded', function() {
    var loader = document.getElementById('loader');
    
    setTimeout(function() {
        if (loader) {
            loader.classList.add('hidden');
        }
    }, 2500);
});

// ====================================
// MATRIX RAIN EFFECT
// ====================================
var canvas = document.getElementById('matrix-canvas');
var ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

var chars = 'アイウエオカキクケコ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var fontSize = 14;
var columns = Math.floor(canvas.width / fontSize);
var drops = [];

for (var i = 0; i < columns; i++) {
    drops[i] = 1;
}

function drawMatrix() {
    ctx.fillStyle = 'rgba(10, 15, 13, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#00ff88';
    ctx.font = fontSize + 'px monospace';
    
    for (var i = 0; i < drops.length; i++) {
        var char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

var matrixInterval = setInterval(drawMatrix, 50);

// ====================================
// TYPING EFFECT
// ====================================
var typingTexts = [
    'whoami',
    'Cybersecurity Analyst',
    'SOC Operations Specialist',
    'Incident Response',
    'SIEM & EDR Expert',
    'CompTIA Security+ Certified',
    'eJPTv2 Certified'
];

var textIndex = 0;
var charIndex = 0;
var isDeleting = false;
var typedElement = document.getElementById('typed-text');

function typeText() {
    if (!typedElement) return;
    
    var currentText = typingTexts[textIndex];
    
    if (!isDeleting) {
        typedElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        
        if (charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(typeText, 2000);
            return;
        }
    } else {
        typedElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        
        if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % typingTexts.length;
        }
    }
    
    setTimeout(typeText, isDeleting ? 40 : 80);
}

setTimeout(typeText, 3000);

// ====================================
// NAVIGATION
// ====================================
var navbar = document.getElementById('navbar');
var navToggle = document.querySelector('.nav-toggle');
var navMenu = document.querySelector('.nav-menu');
var navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

if (navToggle) {
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
}

navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        navMenu.classList.remove('active');
    });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        var target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            var offsetPosition = target.offsetTop - 80;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ====================================
// SECTION ANIMATIONS
// ====================================
var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.section').forEach(function(section) {
    observer.observe(section);
});

// ====================================
// CONSOLE EASTER EGG
// ====================================
console.log('%c🛡️ Juan Rodríguez Castellano', 'color: #00ff88; font-size: 24px; font-weight: bold;');
console.log('%c💼 Cybersecurity Analyst | SOC Operations | SIEM & EDR', 'color: #888; font-size: 14px;');


