/**
 * TREINÃO DO BEM - Main JavaScript
 * Animações e Interatividade
 */

// ===========================
// Configurações
// ===========================

// ⚠️ IMPORTANTE: Trocar este número pelo WhatsApp real
const WHATSAPP_NUMBER = '5513997409393';

// ===========================
// Particles Canvas Background
// ===========================

class ParticlesCanvas {
    constructor() {
        this.canvas = document.getElementById('particles-canvas');
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.particleCount = 50;
        
        this.resize();
        this.createParticles();
        this.animate();
        
        window.addEventListener('resize', () => this.resize());
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    createParticles() {
        this.particles = [];
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                radius: Math.random() * 2 + 1,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                opacity: Math.random() * 0.5 + 0.2
            });
        }
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach(particle => {
            // Mover partícula
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Bounce nas bordas
            if (particle.x < 0 || particle.x > this.canvas.width) {
                particle.vx *= -1;
            }
            if (particle.y < 0 || particle.y > this.canvas.height) {
                particle.vy *= -1;
            }
            
            // Desenhar partícula
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(30, 136, 229, ${particle.opacity})`;
            this.ctx.fill();
        });
        
        // Conectar partículas próximas
        this.particles.forEach((p1, i) => {
            this.particles.slice(i + 1).forEach(p2 => {
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 120) {
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = `rgba(30, 136, 229, ${0.15 * (1 - distance / 120)})`;
                    this.ctx.lineWidth = 1;
                    this.ctx.moveTo(p1.x, p1.y);
                    this.ctx.lineTo(p2.x, p2.y);
                    this.ctx.stroke();
                }
            });
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// ===========================
// Scroll Progress Bar
// ===========================

function updateScrollProgress() {
    const scrollProgress = document.getElementById('scroll-progress');
    if (!scrollProgress) return;
    
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    
    scrollProgress.style.width = scrolled + '%';
}

// ===========================
// Header Scroll Effect
// ===========================

function updateHeader() {
    const header = document.getElementById('header');
    if (!header) return;
    
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// ===========================
// Mobile Menu
// ===========================

function initMobileMenu() {
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (!menuToggle || !navMenu) return;
    
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Fechar menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Fechar menu ao clicar fora
    document.addEventListener('click', (e) => {
        if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// ===========================
// Active Navigation Link
// ===========================

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// ===========================
// Scroll Reveal Animation
// ===========================

function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(el => revealObserver.observe(el));
}

// ===========================
// Back to Top Button
// ===========================

function initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    if (!backToTopBtn) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===========================
// FAQ Accordion
// ===========================

function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        if (!question) return;

        question.addEventListener('click', (event) => {
            event.preventDefault();
            const isOpen = item.classList.contains('faq-open');

            // Fechar todos os outros
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('faq-open');
                }
            });

            // Toggle atual
            if (isOpen) {
                item.classList.remove('faq-open');
            } else {
                item.classList.add('faq-open');
            }
        });
    });
}

// ===========================
// Modal de Inscrição
// ===========================

function initModal() {
    const modal = document.getElementById('modal-inscricao');
    const btnInscricao = document.getElementById('btn-inscricao');
    const modalClose = document.querySelector('.modal-close');
    const modalOverlay = document.querySelector('.modal-overlay');
    const form = document.getElementById('form-inscricao');
    
    if (!modal || !btnInscricao) return;
    
    // Abrir modal
    btnInscricao.addEventListener('click', () => {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    // Fechar modal
    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    };
    
    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modalOverlay) modalOverlay.addEventListener('click', closeModal);
    
    // Fechar com ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
    
    // Submit do formulário
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const nome = document.getElementById('nome').value;
            const telefoneEl = document.getElementById('telefone');
            const telefone = telefoneEl ? telefoneEl.value : '';
            const telefoneDigits = telefone.replace(/\D/g, '');

            if (telefoneEl) {
                telefoneEl.setCustomValidity('');
            }

            // Validação: celular com DDD deve ter exatamente 11 dígitos (2 + 9)
            if (telefoneDigits.length !== 11) {
                if (telefoneEl) {
                    telefoneEl.setCustomValidity('Informe um celular com DDD (11 dígitos): (00) 00000-0000');
                    telefoneEl.reportValidity();
                    telefoneEl.focus();
                }
                return;
            }
            const aulaRadios = document.querySelectorAll('input[name="aula"]');
            let aulaEscolhida = '';
            
            aulaRadios.forEach(radio => {
                if (radio.checked) {
                    aulaEscolhida = radio.value;
                }
            });
            
            // Mapear escolha para texto
            const aulaTexto = {
                'yoga': 'Yoga (8h) - R$ 35,00',
                'zumba': 'Zumba (9h30) - R$ 35,00',
                'ambas': 'Ambas as aulas - R$ 60,00'
            };
            
            // Criar mensagem para WhatsApp (sem emojis para evitar caracteres quebrados)
            const mensagem = [
                'Olá! Gostaria de me inscrever no *Treinão do Bem*',
                '',
                `Nome: ${nome}`,
                `Telefone: ${telefone}`,
                `Aula escolhida: ${aulaTexto[aulaEscolhida]}`,
                '',
                'Aguardo confirmação!'
            ].join('\n');
            
            // Abrir WhatsApp com mensagem preenchida
            const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
            window.open(whatsappURL, '_blank');
            
            // Fechar modal e resetar form
            closeModal();
            form.reset();
        });
    }
    
    // Máscara de telefone simples
    const telefoneInput = document.getElementById('telefone');
    if (telefoneInput) {
        telefoneInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');

            // Limite: DDD (2) + 9 dígitos
            if (value.length > 11) {
                value = value.slice(0, 11);
            }
            
            if (value.length <= 11) {
                if (value.length <= 2) {
                    value = value.replace(/^(\d{0,2})/, '($1');
                } else if (value.length <= 6) {
                    value = value.replace(/^(\d{2})(\d{0,4})/, '($1) $2');
                } else if (value.length <= 10) {
                    value = value.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
                } else {
                    value = value.replace(/^(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
                }
            }
            
            e.target.value = value;
        });
    }
}

// ===========================
// Parallax Sutil no Hero
// ===========================

function initParallax() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroHeight = hero.offsetHeight;
        
        if (scrolled < heroHeight) {
            const opacity = Math.max(0, 1 - (scrolled / heroHeight) * 1.5);
            const translateY = scrolled * 0.3;
            
            hero.style.opacity = opacity;
            hero.querySelector('.hero-content').style.transform = `translateY(${translateY}px)`;
        }
    });
}

// ===========================
// Smooth Scroll para links âncora
// ===========================

function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===========================
// Card Hover Effects Enhancement
// ===========================

function initCardEffects() {
    const cards = document.querySelectorAll('.programa-card, .valor-card, .stat-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function(e) {
            this.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 30;
            const rotateY = (centerX - x) / 30;
            
            if (window.matchMedia('(min-width: 768px)').matches && 
                !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
}

// ===========================
// Loading Animation
// ===========================

function initLoadingAnimation() {
    // Animar elementos logo ao carregar
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        setTimeout(() => {
            heroContent.style.transition = 'opacity 1s ease';
            heroContent.style.opacity = '1';
        }, 100);
    }
}

// ===========================
// Link Tracking (Analytics)
// ===========================

function initLinkTracking() {
    // Rastrear cliques em botões importantes
    const trackButtons = document.querySelectorAll('.btn-primary, .btn-whatsapp, .whatsapp-float');
    
    trackButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const buttonText = btn.textContent.trim() || btn.getAttribute('aria-label') || 'Unknown Button';
            console.log('Button clicked:', buttonText);
            
            // Aqui você pode adicionar código de analytics (Google Analytics, etc)
            // Exemplo: gtag('event', 'click', { 'event_category': 'CTA', 'event_label': buttonText });
        });
    });
}

// ===========================
// Dynamic Year in Footer
// ===========================

function updateFooterYear() {
    const footerBottom = document.querySelector('.footer-bottom p');
    if (footerBottom) {
        const currentYear = new Date().getFullYear();
        footerBottom.textContent = footerBottom.textContent.replace('2025', currentYear);
    }
}

// ===========================
// Performance: Lazy Loading para Iframe
// ===========================

function initLazyLoading() {
    const iframe = document.querySelector('.local-map iframe');
    if (!iframe) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const src = iframe.getAttribute('src');
                if (src) {
                    iframe.src = src;
                    observer.unobserve(iframe);
                }
            }
        });
    });
    
    observer.observe(iframe);
}

// ===========================
// Easter Egg: Konami Code
// ===========================

function initEasterEgg() {
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;
    
    document.addEventListener('keydown', (e) => {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                // Easter egg ativado! Coração caindo da tela
                createHeartRain();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
}

function createHeartRain() {
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.textContent = '❤️';
            heart.style.position = 'fixed';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = '-50px';
            heart.style.fontSize = (Math.random() * 30 + 20) + 'px';
            heart.style.zIndex = '9999';
            heart.style.pointerEvents = 'none';
            heart.style.animation = `heartfall ${Math.random() * 2 + 3}s linear forwards`;
            
            document.body.appendChild(heart);
            
            setTimeout(() => heart.remove(), 5000);
        }, i * 100);
    }
    
    // Adicionar keyframes se não existir
    if (!document.getElementById('heartfall-keyframes')) {
        const style = document.createElement('style');
        style.id = 'heartfall-keyframes';
        style.textContent = `
            @keyframes heartfall {
                to {
                    transform: translateY(100vh) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// ===========================
// Inicialização
// ===========================

document.addEventListener('DOMContentLoaded', () => {
    console.log('🧘 Treinão do Bem - Iniciando...');

    // Libera a renderização do conteúdo (o loader continua por cima)
    document.documentElement.classList.remove('js-loading');
    document.body.style.visibility = '';

    // Loader (2.5s) - sincronizado com CSS
    const loader = document.getElementById('page-loader');
    if (loader) {
        document.body.style.overflow = 'hidden';
        window.setTimeout(() => {
            loader.classList.add('is-hidden');
            document.body.style.overflow = '';
        }, 2500);
    }
    
    // Inicializar canvas de partículas
    new ParticlesCanvas();
    
    // Inicializar funcionalidades
    initMobileMenu();
    initScrollReveal();
    initBackToTop();
    initFAQ();
    initModal();
    initParallax();
    initSmoothScroll();
    initCardEffects();
    initLoadingAnimation();
    initLinkTracking();
    initLazyLoading();
    initEasterEgg();
    updateFooterYear();
    
    // Eventos de scroll
    window.addEventListener('scroll', () => {
        updateScrollProgress();
        updateHeader();
        updateActiveNavLink();
    });
    
    // Executar uma vez ao carregar
    updateScrollProgress();
    updateHeader();
    updateActiveNavLink();
    
    console.log('✅ Treinão do Bem - Pronto!');
    console.log('💡 Dica: Tente o Konami Code! ↑↑↓↓←→←→BA');
});

// ===========================
// Service Worker (opcional para PWA)
// ===========================

// Descomente para transformar em PWA
/*
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => console.log('SW registered:', registration))
            .catch(err => console.log('SW registration failed:', err));
    });
}
*/
