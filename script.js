// Animación de entrada solo cuando las cards de beneficios entran al viewport
function animateBenefitCards() {
    const cards = document.querySelectorAll('.benefits-grid .card');
    const observer = new window.IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-viewport');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    cards.forEach(card => {
      observer.observe(card);
    });
  }
  window.addEventListener('DOMContentLoaded', animateBenefitCards);

// Funcionalidad de acordeón para Preguntas Frecuentes
function setupFAQAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      // Cierra otros abiertos si solo quieres uno abierto a la vez:
      // faqItems.forEach(i => { if(i !== item) i.classList.remove('open'); });
      item.classList.toggle('open');
    });
  });
}
window.addEventListener('DOMContentLoaded', setupFAQAccordion);

// Header Dinámico - Aparece cuando el usuario hace scroll
function setupDynamicHeader() {
    const header = document.getElementById('dynamicHeader');
    const hero = document.querySelector('.hero');
    
    if (!header || !hero) return;
    
    let isHeaderVisible = false;
    let lastScrollTop = 0;
    
    function handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const heroBottom = hero.offsetTop + hero.offsetHeight;
        
        // Mostrar header cuando el usuario sale del hero y hace scroll hacia abajo
        if (scrollTop > heroBottom - 100 && scrollTop > lastScrollTop && !isHeaderVisible) {
            header.classList.add('visible');
            isHeaderVisible = true;
        }
        // Ocultar header cuando el usuario vuelve al hero
        else if (scrollTop <= heroBottom - 100 && isHeaderVisible) {
            header.classList.remove('visible');
            isHeaderVisible = false;
        }
        
        lastScrollTop = scrollTop;
    }
    
    // Agregar event listener para scroll
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Verificar estado inicial
    handleScroll();
}

window.addEventListener('DOMContentLoaded', setupDynamicHeader);