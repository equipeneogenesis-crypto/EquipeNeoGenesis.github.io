document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navLinksAll = document.querySelectorAll('.nav-link');

  if (!navbar) return;

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  if (hamburger && navLinks) {
    let lastFocusedElement = null;

    function trapFocus(e) {
      if (e.key === 'Tab') {
        const focusable = Array.from(navLinksAll);
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    function openMenu() {
      lastFocusedElement = document.activeElement;
      navLinks.classList.add('open');
      hamburger.setAttribute('aria-expanded', 'true');
      document.addEventListener('keydown', trapFocus);
      if (navLinksAll.length) navLinksAll[0].focus();
    }

    function closeMenu() {
      navLinks.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.removeEventListener('keydown', trapFocus);
      if (lastFocusedElement) lastFocusedElement.focus();
    }

    hamburger.addEventListener('click', () => {
      const isOpen = navLinks.classList.contains('open');
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    navLinksAll.forEach(link => {
      link.addEventListener('click', () => {
        closeMenu();
      });
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        closeMenu();
      }
    });
  }
});
