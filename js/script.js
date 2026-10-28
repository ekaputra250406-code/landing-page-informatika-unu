// js/script.js

document.addEventListener('DOMContentLoaded', () => {
  /* ============ 1. TOGGLE HAMBURGER MENU (mobile) ============ */
  const btn       = document.getElementById('menu-toggle');
  const menu      = document.getElementById('nav-menu');
  const iconOpen  = document.getElementById('icon-open');
  const iconClose = document.getElementById('icon-close');

  if (btn && menu) {
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
      const isOpen = !menu.classList.contains('hidden');
      
      btn.setAttribute('aria-expanded', String(isOpen));
      iconOpen.classList.toggle('hidden', isOpen);
      iconClose.classList.toggle('hidden', !isOpen);
    });

    // Tutup menu otomatis setelah klik link (khusus tampilan mobile)
    menu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        if (window.matchMedia('(max-width: 991px)').matches) { // < 992px
          menu.classList.add('hidden');
          btn.setAttribute('aria-expanded', 'false');
          iconOpen.classList.remove('hidden');
          iconClose.classList.add('hidden');
        }
      });
    });
  }

  /* ============ 2. TAHUN FOOTER OTOMATIS ============ */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});