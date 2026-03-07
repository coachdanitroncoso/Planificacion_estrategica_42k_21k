/**
 * Landing Page – Maratón Santiago 2026
 * script.js – Animations, scroll effects, interactions
 */

/* ── Intersection Observer: fade-in on scroll ─────────────── */
(function initFadeIn() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
})();

/* ── Sticky CTA: hide when main CTA is visible ────────────── */
(function initStickyCta() {
  const stickyCta = document.getElementById('sticky-cta');
  if (!stickyCta) return;

  // Elements whose proximity hides the sticky CTA
  const ctaBtns = document.querySelectorAll('.cta-btn:not(.sticky-btn)');

  const ctaObserver = new IntersectionObserver(
    (entries) => {
      const anyVisible = entries.some((e) => e.isIntersecting);
      stickyCta.style.opacity = anyVisible ? '0' : '1';
      stickyCta.style.pointerEvents = anyVisible ? 'none' : 'auto';
    },
    { threshold: 0.5 }
  );

  ctaBtns.forEach((btn) => ctaObserver.observe(btn));
})();

/* ── Smooth link behavior ─────────────────────────────────── */
document.querySelectorAll('a[href^="https://wa.me"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    // Subtle scale animation on click
    const btn = link.closest('.cta-btn') || link;
    btn.style.transform = 'scale(0.97)';
    setTimeout(() => { btn.style.transform = ''; }, 200);
  });
});

/* ── Capsule cards: staggered hover glow ─────────────────── */
document.querySelectorAll('.capsula-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.04}s`;
});

/* ── Trigger initial animations for elements in viewport ─── */
window.addEventListener('load', () => {
  document.querySelectorAll('.fade-in').forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      el.classList.add('visible');
    }
  });
});
