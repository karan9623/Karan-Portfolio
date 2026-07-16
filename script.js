// Reveal sections as the user scrolls down to them
const revealElements = document.querySelectorAll('[data-reveal]');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      observer.unobserve(entry.target); // only animate once
    }
  });
}, { threshold: 0.15 });

revealElements.forEach(el => observer.observe(el));
