/* =========================================
   garden LP - script.js
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- FV 初期アニメーション ---------- */
  const heroText = document.querySelector('.hero-text');
  const heroIllust = document.querySelector('.hero-illust');

  if (heroText && heroIllust) {
    [heroText, heroIllust].forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = `opacity 0.9s ease-out ${i * 0.25}s, transform 0.9s ease-out ${i * 0.25}s`;
    });

    requestAnimationFrame(() => {
      setTimeout(() => {
        heroText.style.opacity = '1';
        heroText.style.transform = 'translateY(0)';
        heroIllust.style.opacity = '1';
        heroIllust.style.transform = 'translateY(0)';
      }, 100);
    });
  }

  /* ---------- スクロール連動 fade-in ---------- */
  const targets = document.querySelectorAll(
    '.section-head, .problems-list li, .flow-item, .point-card, .merit-card, .faq-item, .company-table, .contact-inner'
  );

  targets.forEach(el => el.classList.add('fade-in'));

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    targets.forEach(el => io.observe(el));
  } else {
    targets.forEach(el => el.classList.add('is-visible'));
  }

  /* ---------- スムーズスクロール（ヘッダー分オフセット） ---------- */
  const header = document.querySelector('.header');
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#' || targetId.length < 2) return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      const headerH = header ? header.offsetHeight : 0;
      const top = target.getBoundingClientRect().top + window.pageYOffset - headerH - 10;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

});