// Sticky-nav shadow on scroll
const nav = document.querySelector('.nav');
const onScroll = () => {
  if (window.scrollY > 8) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile menu toggle
const toggle = document.querySelector('.nav-toggle');
toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('menu-open');
  toggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav-links a').forEach((a) =>
  a.addEventListener('click', () => {
    nav.classList.remove('menu-open');
    toggle?.setAttribute('aria-expanded', 'false');
  })
);

// FAQ — only one open at a time
const faqItems = document.querySelectorAll('.faq details');
faqItems.forEach((d) =>
  d.addEventListener('toggle', () => {
    if (d.open) faqItems.forEach((o) => o !== d && (o.open = false));
  })
);

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
