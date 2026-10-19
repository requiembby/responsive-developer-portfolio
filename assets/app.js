/* Small, dependency-free UI helpers for an accessible static portfolio. */
(() => {
  'use strict';
  const root = document.documentElement;
  const themeButton = document.querySelector('.theme-toggle');
  const navButton = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('.site-nav');

  const setTheme = (theme) => {
    const next = theme === 'light' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    if (themeButton) {
      themeButton.setAttribute('aria-label', `Switch to ${next === 'dark' ? 'light' : 'dark'} theme`);
      themeButton.title = `Switch to ${next === 'dark' ? 'light' : 'dark'} theme`;
    }
  };
  let savedTheme;
  try { savedTheme = localStorage.getItem('charos-portfolio-theme'); } catch (_) { /* privacy mode */ }
  setTheme(savedTheme === 'light' ? 'light' : 'dark');
  themeButton?.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(next);
    try { localStorage.setItem('charos-portfolio-theme', next); } catch (_) { /* privacy mode */ }
  });

  const closeNavigation = () => {
    nav?.classList.remove('open');
    navButton?.setAttribute('aria-expanded', 'false');
    navButton?.setAttribute('aria-label', 'Open navigation');
  };
  navButton?.addEventListener('click', () => {
    const isOpen = !nav?.classList.contains('open');
    nav?.classList.toggle('open', isOpen);
    navButton.setAttribute('aria-expanded', String(isOpen));
    navButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });
  nav?.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeNavigation();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeNavigation();
  });
  document.addEventListener('click', (event) => {
    if (nav?.classList.contains('open') && !event.target.closest('.site-header')) closeNavigation();
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 740) closeNavigation();
  });

  const filters = [...document.querySelectorAll('[data-filter]')];
  const cards = [...document.querySelectorAll('[data-category]')];
  const status = document.getElementById('filter-status');
  filters.forEach((filter) => {
    filter.addEventListener('click', () => {
      const category = filter.getAttribute('data-filter');
      filters.forEach((item) => {
        const selected = item === filter;
        item.classList.toggle('active', selected);
        item.setAttribute('aria-pressed', String(selected));
      });
      let visible = 0;
      cards.forEach((card) => {
        const show = category === 'all' || card.getAttribute('data-category') === category;
        card.hidden = !show;
        if (show) visible++;
      });
      if (status) status.textContent = `Showing ${visible} ${visible === 1 ? 'project' : 'projects'}.`;
    });
  });
})();