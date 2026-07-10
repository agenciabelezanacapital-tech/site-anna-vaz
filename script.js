/* =========================================================
   ANNA VAZ CONCEPT — LANDING PAGE SCRIPT
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  /* ---------- Mobile menu toggle ---------- */
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');

  hamburger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    hamburger.classList.toggle('is-active', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  // Close mobile menu after tapping a nav link
  nav.querySelectorAll('.nav__link').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      hamburger.classList.remove('is-active');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---------- Header shadow / style on scroll ---------- */
  const header = document.getElementById('header');
  const onScroll = () => {
    header.style.boxShadow = window.scrollY > 10
      ? '0 4px 24px rgba(43, 36, 32, 0.1)'
      : '0 2px 20px rgba(43, 36, 32, 0.06)';
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Scroll-reveal animations ---------- */
  const revealTargets = document.querySelectorAll(
    '.service-card, .testimonial-card, .about__content, .about__media, .visit__info, .visit__map'
  );
  revealTargets.forEach((el) => el.classList.add('reveal'));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealTargets.forEach((el) => observer.observe(el));

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
