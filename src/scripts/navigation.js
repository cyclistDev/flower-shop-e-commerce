// Navigation module - handles mobile menu and active link highlighting
export function initNavigation() {
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Active link highlighting
  highlightActiveLink();
}

function highlightActiveLink() {
  const currentPath = window.location.pathname;
  const links = document.querySelectorAll('#menu a');

  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '/' && href === '/index.html')) {
      link.classList.add('text-rose-600', 'font-bold');
    }
  });
}
