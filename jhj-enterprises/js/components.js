// ── SHARED COMPONENTS — JH&J ENTERPRISES ──────────────────────
// Brand: Playfair Display headings · Inter body
// Navy #0e1f2f · Amber #b56a2b · Cream #f7f3ee

const NAV = `
<nav class="nav">
  <div class="nav-inner">
    <a href="/index.html" class="nav-logo" aria-label="JH&J Enterprises home">
      <span class="nav-logo-word">JH&amp;J&nbsp;<b>Enterprises</b></span>
    </a>
    <ul class="nav-links">
      <li class="nav-dropdown">
        <a href="/services.html" class="nav-dropdown-trigger">Services <svg width="11" height="11" viewBox="0 0 12 12" fill="none" style="vertical-align:middle;margin-left:3px"><path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
        <ul class="nav-dropdown-menu" style="min-width:320px;">
          <li><a href="/kitchen-bath.html"><span class="dd-icon">🚿</span><div><strong>Kitchen &amp; Bath Remodels</strong><span>From simple refreshes to full renovations</span></div></a></li>
          <li><a href="/decks-porches.html"><span class="dd-icon">🪵</span><div><strong>Decks, Porches &amp; Patios</strong><span>Outdoor living built to last</span></div></a></li>
          <li><a href="/garages-retaining-walls.html"><span class="dd-icon">🧱</span><div><strong>Garages &amp; Retaining Walls</strong><span>Structural additions done right</span></div></a></li>
          <li><a href="/drywall-tile.html"><span class="dd-icon">🛠️</span><div><strong>Drywall &amp; Tile Work</strong><span>Clean, precise finishing</span></div></a></li>
          <li><a href="/basements.html"><span class="dd-icon">🏠</span><div><strong>Finished Basements</strong><span>Turn unused space into living space</span></div></a></li>
          <li><a href="/hydroblox.html"><span class="dd-icon">💧</span><div><strong>HydroBlox Drainage</strong><span>Permanent, clog-free water drainage</span></div></a></li>
          <li><a href="/rehabs.html"><span class="dd-icon">🔑</span><div><strong>Investor Rehabs</strong><span>Complete property turnarounds</span></div></a></li>
        </ul>
      </li>
      <li><a href="/about.html">About</a></li>
      <li><a href="/contact.html">Contact</a></li>
    </ul>
    <a href="tel:+14129164044" class="nav-cta">Free Estimate · 412-916-4044</a>
    <button class="nav-hamburger" aria-label="Menu" id="nav-hamburger-btn">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
<div class="mobile-menu">
  <a href="/index.html">Home</a>
  <a href="/services.html" class="mobile-sub" style="font-weight:600">All Services →</a>
  <div class="mobile-section-label">Services</div>
  <a href="/kitchen-bath.html" class="mobile-sub">🚿 Kitchen &amp; Bath Remodels</a>
  <a href="/decks-porches.html" class="mobile-sub">🪵 Decks, Porches &amp; Patios</a>
  <a href="/garages-retaining-walls.html" class="mobile-sub">🧱 Garages &amp; Retaining Walls</a>
  <a href="/drywall-tile.html" class="mobile-sub">🛠️ Drywall &amp; Tile Work</a>
  <a href="/basements.html" class="mobile-sub">🏠 Finished Basements</a>
  <a href="/hydroblox.html" class="mobile-sub">💧 HydroBlox Drainage</a>
  <a href="/rehabs.html" class="mobile-sub">🔑 Investor Rehabs</a>
  <a href="/about.html">About</a>
  <a href="/contact.html">Contact</a>
  <a href="tel:+14129164044" style="color:var(--teal);font-weight:600;">Call for a Free Estimate →</a>
</div>`;

const FOOTER = `
<footer class="footer">
  <div class="footer-inner">
    <div class="footer-top">
      <div>
        <a href="/index.html" class="footer-logo" aria-label="JH&J Enterprises home">
          <span class="footer-logo-word">JH&amp;J <b>Enterprises</b></span>
        </a>
        <p class="footer-desc">Family-built home remodeling and repair in Bethel Park, PA. From roof to basement, no job is too small or too big for our knowledgeable crews — and we back every project with a satisfaction guarantee.</p>
      </div>
      <div class="footer-col">
        <h5>Services</h5>
        <a href="/kitchen-bath.html">Kitchen &amp; Bath Remodels</a>
        <a href="/decks-porches.html">Decks, Porches &amp; Patios</a>
        <a href="/garages-retaining-walls.html">Garages &amp; Retaining Walls</a>
        <a href="/drywall-tile.html">Drywall &amp; Tile Work</a>
        <a href="/basements.html">Finished Basements</a>
        <a href="/hydroblox.html">HydroBlox Drainage</a>
        <a href="/rehabs.html">Investor Rehabs</a>
      </div>
      <div class="footer-col">
        <h5>Company</h5>
        <a href="/index.html">Home</a>
        <a href="/services.html">All Services</a>
        <a href="/about.html">About &amp; Our Promise</a>
        <a href="/contact.html">Contact Us</a>
        <a href="/contact.html">Free Estimate</a>
      </div>
      <div class="footer-col">
        <h5>Get In Touch</h5>
        <a href="tel:+14129164044">📞 412-916-4044</a>
        <a href="tel:+14129735935">📞 412-973-5935</a>
        <a href="mailto:leeanne@jhjenterprises.net">✉️ leeanne@jhjenterprises.net</a>
        <a href="https://maps.google.com/?q=2430+Slater+Rd+Bethel+Park+PA+15102" target="_blank" rel="noopener">📍 2430 Slater Rd, Bethel Park, PA 15102</a>
        <a href="/contact.html">🕗 Mon–Fri, 8am–5pm</a>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2025 JH&J Enterprises. Bethel Park, PA. All rights reserved.</p>
      <p>Free estimates · Licensed &amp; insured · Satisfaction guaranteed</p>
    </div>
  </div>
</footer>`;

const STICKY = `
<div class="sticky-cta">
  <a href="tel:+14129164044">📞 Call for a Free Estimate</a>
</div>`;

document.addEventListener('DOMContentLoaded', () => {
  const navEl = document.getElementById('nav-placeholder');
  if (navEl) navEl.outerHTML = NAV;

  const footerEl = document.getElementById('footer-placeholder');
  if (footerEl) footerEl.outerHTML = FOOTER;

  const stickyEl = document.getElementById('sticky-placeholder');
  if (stickyEl) stickyEl.outerHTML = STICKY;

  // Active nav link
  const path = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href !== '#' && href.length > 1 && path.includes(href.replace('.html',''))) {
      link.classList.add('active');
    }
  });

  // Hamburger toggle
  const hb = document.getElementById('nav-hamburger-btn');
  const mm = document.querySelector('.mobile-menu');
  if (hb && mm) hb.addEventListener('click', () => mm.classList.toggle('open'));

  // Close dropdown on outside click
  document.addEventListener('click', e => {
    if (!e.target.closest('.nav-dropdown')) {
      document.querySelectorAll('.nav-dropdown').forEach(d => d.classList.remove('open'));
    }
  });

  // Dropdown toggle (touch-friendly) — desktop hover handled by CSS; click opens on tap
  function initDropdowns() {
    document.querySelectorAll('.nav-dropdown-trigger').forEach(trigger => {
      if (trigger.dataset.dropdownBound) return;
      trigger.dataset.dropdownBound = 'true';
      trigger.addEventListener('click', e => {
        // allow navigation on desktop; toggle panel on small screens
        if (window.innerWidth <= 860) return;
        const parent = trigger.closest('.nav-dropdown');
        const wasOpen = parent.classList.contains('open');
        if (!wasOpen) { e.preventDefault(); }
        document.querySelectorAll('.nav-dropdown').forEach(d => d.classList.remove('open'));
        if (!wasOpen) parent.classList.add('open');
      });
    });
  }
  initDropdowns();
  setTimeout(initDropdowns, 100);

  // Open dropdown on hover (desktop)
  document.querySelectorAll('.nav-dropdown').forEach(dd => {
    dd.addEventListener('mouseenter', () => { if (window.innerWidth > 860) dd.classList.add('open'); });
    dd.addEventListener('mouseleave', () => { if (window.innerWidth > 860) dd.classList.remove('open'); });
  });

  // FAQ accordion
  document.querySelectorAll('.faq-q').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.parentElement;
      const open = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      if (!open) item.classList.add('open');
    });
  });

  // Reveal on scroll
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('v'); });
    }, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => obs.observe(el));
    setTimeout(() => revealEls.forEach(el => el.classList.add('v')), 800);
  }
});
