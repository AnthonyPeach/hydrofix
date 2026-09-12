// ── HYDRO FIX SHARED JS ──────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {

  // Mobile nav — runs after components.js may have injected the nav
  function bindMobileMenu() {
    const hamburger = document.querySelector('.nav-hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    if (!hamburger || !mobileMenu) return;

    // Clone to remove any stale listeners
    const btn = hamburger.cloneNode(true);
    hamburger.parentNode.replaceChild(btn, hamburger);

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = mobileMenu.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close when any link inside is tapped
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      });
    });

    // Close on outside tap
    document.addEventListener('click', (e) => {
      if (!btn.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Run now AND after components.js finishes injecting the nav
  bindMobileMenu();
  setTimeout(bindMobileMenu, 50);

  // Desktop dropdown (touch-friendly)
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.nav-dropdown-trigger');
    if (trigger) {
      e.preventDefault();
      e.stopPropagation();
      const parent = trigger.closest('.nav-dropdown');
      const wasOpen = parent.classList.contains('open');
      document.querySelectorAll('.nav-dropdown.open').forEach(d => d.classList.remove('open'));
      if (!wasOpen) parent.classList.add('open');
    } else if (!e.target.closest('.nav-dropdown')) {
      document.querySelectorAll('.nav-dropdown.open').forEach(d => d.classList.remove('open'));
    }
  });

  // FAQ accordion
  document.addEventListener('click', (e) => {
    const q = e.target.closest('.faq-q');
    if (!q) return;
    const item = q.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });

  // Scroll reveal — supports both 'revealed' and 'visible' class names
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible', 'revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });
    revealEls.forEach(el => observer.observe(el));
  }

  // Active nav link highlight
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    if (link.href === window.location.href) link.classList.add('active');
  });

  // Contact form
  const forms = document.querySelectorAll('.contact-form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      window.open('https://calendar.app.google/yHwfh8ZnLQXPHaW78', '_blank');
    });
  });

});
