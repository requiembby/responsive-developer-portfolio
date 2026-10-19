/* Minimal, dependency-free interactions for the one-page portfolio. */
(() => {
  'use strict';
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#site-navigation');
  const navLinks = Array.from(document.querySelectorAll('.navigation a[href^="#"]'));
  const sections = Array.from(document.querySelectorAll('main section[id]'));
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function closeMenu() {
    if (!nav || !menuButton) return;
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
  }

  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const isOpen = !nav.classList.contains('open');
      nav.classList.toggle('open', isOpen);
      menuButton.setAttribute('aria-expanded', String(isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    });
    nav.addEventListener('click', (event) => {
      if (event.target.closest('a')) closeMenu();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });
    document.addEventListener('click', (event) => {
      if (nav.classList.contains('open') && !event.target.closest('.site-header')) closeMenu();
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 700) closeMenu();
    });
  }

  if ('IntersectionObserver' in window) {
    const tracker = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = '#' + entry.target.id;
          navLinks.forEach((link) => {
            const active = link.getAttribute('href') === id;
            link.classList.toggle('active', active);
            if (active) link.setAttribute('aria-current', 'location');
            else link.removeAttribute('aria-current');
          });
        }
      });
    }, { rootMargin: '-25% 0px -65% 0px' });
    sections.forEach((section) => tracker.observe(section));
  }

  const revealItems = Array.from(document.querySelectorAll('[data-reveal]'));
  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('not-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.06, rootMargin: '0px 0px 40px 0px' });
    revealItems.forEach((item) => {
      // Do not hide content already in the viewport at page load.
      if (item.getBoundingClientRect().top > window.innerHeight) {
        item.classList.add('not-visible');
        revealObserver.observe(item);
      }
    });
  }

  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
