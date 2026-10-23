// Theme System
const themes = {
    sakura: {
        particles: [
            { type: 'sakura', count: 15, container: 'sakura-container' },
            { type: 'snow', count: 25, container: 'snow-container' }
        ]
    },
    ocean: {
        particles: [
            { type: 'bubble', count: 20, container: 'sakura-container' },
            { type: 'fish', count: 8, container: 'snow-container' }
        ]
    },
    space: {
        particles: [
            { type: 'star', count: 30, container: 'sakura-container' },
            { type: 'planet', count: 5, container: 'snow-container' }
        ]
    }
};

let currentTheme = 'sakura';

// Initialize particles
function createParticles(theme) {
    const sakuraContainer = document.getElementById('sakura-container');
    const snowContainer = document.getElementById('snow-container');

    sakuraContainer.innerHTML = '';
    snowContainer.innerHTML = '';

    const config = themes[theme];

    config.particles.forEach(particleConfig => {
        const container = document.getElementById(particleConfig.container);

        for (let i = 0; i < particleConfig.count; i++) {
            const particle = document.createElement('div');
            particle.className = particleConfig.type;

            const size = Math.random() * 12 + 8;
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 15 + 's';
            particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
            particle.style.opacity = Math.random() * 0.5 + 0.4;

            if (particleConfig.type === 'sakura' || particleConfig.type === 'snow') {
                particle.style.width = size + 'px';
                particle.style.height = size + 'px';
            } else if (particleConfig.type === 'bubble') {
                const bubbleSize = Math.random() * 30 + 15;
                particle.style.width = bubbleSize + 'px';
                particle.style.height = bubbleSize + 'px';
            } else if (particleConfig.type === 'fish') {
                particle.textContent = '🐠';
                particle.style.fontSize = (Math.random() * 20 + 15) + 'px';
            } else if (particleConfig.type === 'star') {
                particle.style.width = (Math.random() * 3 + 2) + 'px';
                particle.style.height = particle.style.width;
            } else if (particleConfig.type === 'planet') {
                const planetSize = Math.random() * 40 + 20;
                particle.style.width = planetSize + 'px';
                particle.style.height = planetSize + 'px';
            }

            container.appendChild(particle);
        }
    });
}

// Theme toggle
document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const theme = btn.dataset.theme;

        document.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        document.body.setAttribute('data-theme', theme);
        currentTheme = theme;

        createParticles(theme);

        // Update logo
        const logo = document.querySelector('.logo');
        if (theme === 'sakura') logo.textContent = '桜';
        else if (theme === 'ocean') logo.textContent = '🌊';
        else if (theme === 'space') logo.textContent = '✦';

        localStorage.setItem('theme', theme);
    });
});

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'sakura';
document.body.setAttribute('data-theme', savedTheme);
document.querySelector(`[data-theme="${savedTheme}"]`)?.classList.add('active');
currentTheme = savedTheme;

// Initialize with current theme
createParticles(currentTheme);

// Update logo on load
const logo = document.querySelector('.logo');
if (currentTheme === 'ocean') logo.textContent = '🌊';
else if (currentTheme === 'space') logo.textContent = '✦';

// Nav scroll effect
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

if (burger) {
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burger.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            burger.classList.remove('active');
        });
    });
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer with stagger - DISABLED for faster load
// Sections now visible immediately
/*
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('section:not(.hero), .project-card, .skill-item').forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `opacity 0.8s ease ${index * 0.1}s, transform 0.8s ease ${index * 0.1}s`;
    observer.observe(el);
});
*/

// Scroll indicator
const scrollIndicator = document.querySelector('.scroll-indicator');
window.addEventListener('scroll', () => {
    if (scrollIndicator) {
        scrollIndicator.style.opacity = window.pageYOffset > 100 ? '0' : '1';
    }
});

// Parallax effect on hero - optimized
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero');
            if (hero && scrolled < window.innerHeight) {
                hero.style.transform = `translateY(${scrolled * 0.3}px)`;
            }
            ticking = false;
        });
        ticking = true;
    }
});

// 3D tilt effect on cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// Skill item hover effect
document.querySelectorAll('.skill-item').forEach(skill => {
    skill.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(10px)';
    });

    skill.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
    });
});

// Cursor trail
const cursorDot = document.createElement('div');
cursorDot.className = 'cursor-dot';
document.body.appendChild(cursorDot);

const cursorRing = document.createElement('div');
cursorRing.className = 'cursor-ring';
document.body.appendChild(cursorRing);

let mouseX = 0, mouseY = 0;
let ringX = 0, ringY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    cursorDot.style.left = mouseX - 5 + 'px';
    cursorDot.style.top = mouseY - 5 + 'px';
});

function animateRing() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;

    cursorRing.style.left = ringX - 17.5 + 'px';
    cursorRing.style.top = ringY - 17.5 + 'px';

    requestAnimationFrame(animateRing);
}
animateRing();

document.querySelectorAll('a, button, .project-card, .skill-item, .cta-btn').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursorRing.style.width = '60px';
        cursorRing.style.height = '60px';
        cursorRing.style.borderColor = 'var(--accent-2)';
        cursorRing.style.boxShadow = '0 0 30px var(--accent-1)';
        cursorDot.style.transform = 'scale(2)';
        cursorDot.style.background = 'var(--accent-2)';
    });

    el.addEventListener('mouseleave', () => {
        cursorRing.style.width = '35px';
        cursorRing.style.height = '35px';
        cursorRing.style.borderColor = 'var(--accent-1)';
        cursorRing.style.boxShadow = '0 0 20px var(--accent-1)';
        cursorDot.style.transform = 'scale(1)';
        cursorDot.style.background = 'var(--accent-1)';
    });
});

// Project Modal
const modal = document.getElementById('projectModal');
const modalGallery = document.getElementById('modalGallery');
const modalClose = document.querySelector('.modal-close');
const modalBackdrop = document.querySelector('.modal-backdrop');

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function() {
        const project = this.dataset.project;
        const detailsCount = parseInt(this.dataset.details);

        modalGallery.innerHTML = '';

        for (let i = 1; i <= detailsCount; i++) {
            const img = document.createElement('img');
            img.src = `assets/img/portfolio/${project}-details-${i}.jpg`;
            img.alt = `${project} detail ${i}`;
            modalGallery.appendChild(img);
        }

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});
