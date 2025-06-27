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