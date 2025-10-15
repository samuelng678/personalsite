// ==========================================
// MODERN PORTFOLIO - CUTTING-EDGE JAVASCRIPT
// Featuring: View Transitions API, Web Animations API,
// Intersection Observer v2, CSS Custom Properties Manipulation
// ==========================================

// ==========================================
// VIEW TRANSITIONS API (Chrome 111+)
// ==========================================
if ('startViewTransition' in document) {
    // Enable smooth page transitions
    window.navigation?.addEventListener('navigate', (event) => {
        const url = new URL(event.destination.url);
        
        if (location.origin === url.origin) {
            event.intercept({
                handler: async () => {
                    const response = await fetch(url.pathname);
                    const html = await response.text();
                    
                    document.startViewTransition(() => {
                        document.body.innerHTML = new DOMParser()
                            .parseFromString(html, 'text/html')
                            .body.innerHTML;
                    });
                }
            });
        }
    });
    
    console.log('✨ View Transitions API enabled!');
}

// ==========================================
// LOADING SCREEN WITH WEB ANIMATIONS API
// ==========================================
window.addEventListener('load', () => {
    const loadingScreen = document.querySelector('.loading-screen');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
        }, 1000);
    }
});

// ==========================================
// CUSTOM CURSOR
// ==========================================
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    const delay = 0.15;
    cursorX += (mouseX - cursorX) * delay;
    cursorY += (mouseY - cursorY) * delay;
    
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    
    requestAnimationFrame(animateCursor);
}

animateCursor();

// Add hover effect to interactive elements
const interactiveElements = document.querySelectorAll('a, button, input, textarea');
interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
});

// ==========================================
// PARTICLE CANVAS BACKGROUND
// ==========================================
const canvas = document.createElement('canvas');
canvas.id = 'particles-canvas';
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
    }
    
    update() {
        this.x += this.vx;
        this.y += this.vy;
        
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }
    
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.fill();
    }
}

const particles = [];
const particleCount = 100;

for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
}

function connectParticles() {
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 120) {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(255, 255, 255, ${0.2 * (1 - distance / 120)})`;
                ctx.lineWidth = 1;
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });
    
    connectParticles();
    requestAnimationFrame(animateParticles);
}

animateParticles();

// Resize canvas on window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// ==========================================
// SCROLL REVEAL WITH WEB ANIMATIONS API
// ==========================================
const revealElements = document.querySelectorAll('section, .project-card');

const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal', 'active');
            
            // Enhanced with Web Animations API
            entry.target.animate([
                { opacity: 0, transform: 'translateY(50px) scale(0.95)' },
                { opacity: 1, transform: 'translateY(0) scale(1)' }
            ], {
                duration: 800,
                easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
                fill: 'forwards'
            });
        }
    });
}, observerOptions);

revealElements.forEach(el => {
    observer.observe(el);
});

// ==========================================
// SCROLL-DRIVEN ANIMATIONS POLYFILL
// ==========================================
if (!CSS.supports('animation-timeline', 'scroll()')) {
    console.log('⚠️ Scroll-driven animations not supported, using fallback');
    
    // Polyfill for browsers without native support
    window.addEventListener('scroll', () => {
        const scrollProgress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
        document.documentElement.style.setProperty('--scroll-progress', scrollProgress);
    });
}

// ==========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ==========================================
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

// ==========================================
// PARALLAX EFFECT ON SCROLL
// ==========================================
let scrollY = window.scrollY;

window.addEventListener('scroll', () => {
    scrollY = window.scrollY;
    
    // Parallax for hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrollY * 0.5}px)`;
    }
    
    // Add shadow to header on scroll
    const header = document.querySelector('header');
    if (scrollY > 100) {
        header.style.boxShadow = '0 10px 40px 0 rgba(0, 0, 0, 0.5)';
    } else {
        header.style.boxShadow = '0 8px 32px 0 rgba(0, 0, 0, 0.37)';
    }
});

// ==========================================
// ANIMATED TEXT TYPING EFFECT
// ==========================================
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Apply typing effect to hero title if exists
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 80);
        }, 500);
    }
});

// ==========================================
// FORM VALIDATION & ENHANCEMENT
// ==========================================
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', (e) => {
        const inputs = form.querySelectorAll('input[required], textarea[required]');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = '#f5576c';
                setTimeout(() => {
                    input.style.borderColor = '';
                }, 2000);
            }
        });
        
        if (!isValid) {
            e.preventDefault();
            alert('Please fill in all required fields!');
        }
    });
    
    // Add floating label effect
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', () => {
            if (!input.value) {
                input.parentElement.classList.remove('focused');
            }
        });
    });
}

// ==========================================
// 3D TILT EFFECT FOR PROJECT CARDS
// ==========================================
const projectCards = document.querySelectorAll('.project-card, section');

projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ==========================================
// INTERSECTION OBSERVER FOR COUNTING ANIMATION
// ==========================================
const animateValue = (element, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
};

// ==========================================
// EASTER EGG: KONAMI CODE
// ==========================================
let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            activateEasterEgg();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function activateEasterEgg() {
    document.body.style.animation = 'rainbow 2s linear infinite';
    setTimeout(() => {
        document.body.style.animation = '';
    }, 5000);
}

// ==========================================
// PERFORMANCE OPTIMIZATION
// ==========================================
// Debounce function for resize events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimized resize handler
window.addEventListener('resize', debounce(() => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}, 250));

// ==========================================
// CSS CUSTOM PROPERTIES MANIPULATION
// ==========================================
function updateTheme() {
    const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    
    // Dynamic color shift based on scroll
    const hue = 220 + (scrollPercent * 60);
    document.documentElement.style.setProperty('--dynamic-hue', hue);
}

window.addEventListener('scroll', debounce(updateTheme, 10));

// ==========================================
// CONTAINER QUERIES FEATURE DETECTION
// ==========================================
if (CSS.supports('container-type', 'inline-size')) {
    console.log('✅ Container Queries supported!');
} else {
    console.log('⚠️ Container Queries not supported - using fallback');
}

// ==========================================
// ADVANCED PERFORMANCE MONITORING
// ==========================================
if ('PerformanceObserver' in window) {
    // Monitor Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('📊 LCP:', lastEntry.renderTime || lastEntry.loadTime);
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    
    // Monitor Cumulative Layout Shift (CLS)
    let clsScore = 0;
    const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
            if (!entry.hadRecentInput) {
                clsScore += entry.value;
            }
        }
        console.log('📊 CLS Score:', clsScore);
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });
}

// ==========================================
// CONSOLE MESSAGE FOR RECRUITERS
// ==========================================
console.log('%c🚀 Hi there, Fellow Developer!', 'font-size: 24px; font-weight: bold; color: #667eea; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);');
console.log('%cYou\'re looking at a cutting-edge portfolio built with:', 'font-size: 14px; font-weight: bold; color: #4facfe;');
console.log('%c\n🎨 CSS Technologies:', 'font-size: 13px; font-weight: bold; color: #f093fb;');
console.log('%c• CSS @layer (Cascade Layers)\n• Container Queries\n• CSS Nesting\n• :has() Parent Selector\n• Scroll-Driven Animations\n• View Transitions API\n• Custom Properties (CSS Variables)\n• Glassmorphism & Backdrop Filters', 'font-size: 11px; color: #b8b8b8;');
console.log('%c\n⚡ JavaScript APIs:', 'font-size: 13px; font-weight: bold; color: #f093fb;');
console.log('%c• Web Animations API\n• Intersection Observer v2\n• Canvas API (Particle System)\n• Performance Observer API\n• Navigation API\n• RequestAnimationFrame\n• ES6+ Features', 'font-size: 11px; color: #b8b8b8;');
console.log('%c\n🚀 Performance:', 'font-size: 13px; font-weight: bold; color: #f093fb;');
console.log('%c• Hardware-accelerated animations\n• Debounced event handlers\n• Optimized rendering\n• Progressive enhancement\n• Mobile-first responsive design', 'font-size: 11px; color: #b8b8b8;');
console.log('%c\n💼 Let\'s build the future together! 💫', 'font-size: 16px; font-weight: bold; color: #667eea; margin-top: 10px;');
console.log('%cGitHub: github.com/yourprofile', 'font-size: 11px; color: #4facfe;');