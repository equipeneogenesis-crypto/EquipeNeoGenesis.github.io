(function() {
  var container = document.getElementById('scroll-container');
  if (!container) return;

  var sections = Array.from(container.children);
  if (sections.length === 0) return;

  var currentIndex = 0;
  var isAnimating = false;
  var positions = [];
  var scrollAccumulator = 0;
  var lastDirection = 0;
  var enabled = false;

  var SCROLL_THRESHOLD = 30;
  var ANIMATION_DURATION = 950;
  var LOCK_DELAY = 100;

  function isMobile() {
    return window.innerWidth <= 768;
  }

  function recalc() {
    positions = sections.map(function(s) { return s.offsetTop; });
  }

  function goTo(dest) {
    if (dest < 0 || dest >= sections.length || isAnimating) return;
    if (dest === currentIndex) return;

    isAnimating = true;
    currentIndex = dest;
    recalc();
    container.style.transform = 'translate3d(0, -' + positions[currentIndex] + 'px, 0)';
    updateNav(currentIndex);
    var navbar = document.getElementById('navbar');
    if (navbar) navbar.classList.toggle('scrolled', currentIndex > 0);

    setTimeout(function() {
      isAnimating = false;
      scrollAccumulator = 0;
      lastDirection = 0;
    }, ANIMATION_DURATION + LOCK_DELAY);
  }

  function getDeltaPixels(e) {
    if (e.deltaMode === 1) return e.deltaY * 16;
    if (e.deltaMode === 2) return e.deltaY * 400;
    return e.deltaY;
  }

  function handleScroll(delta) {
    if (isAnimating) {
      scrollAccumulator = 0;
      lastDirection = 0;
      return;
    }

    var direction = delta > 0 ? 1 : -1;
    var absDelta = Math.abs(delta);

    if (direction !== lastDirection) {
      scrollAccumulator = 0;
      lastDirection = direction;
    }

    scrollAccumulator += absDelta;

    if (scrollAccumulator >= SCROLL_THRESHOLD) {
      var next = currentIndex + direction;
      if (next >= 0 && next < sections.length) {
        goTo(next);
      }
      scrollAccumulator = 0;
    }
  }

  function updateNav(index) {
    var el = sections[index];
    var id = el.id || (el.querySelector('[id]') && el.querySelector('[id]').id) || '';
    document.querySelectorAll('.nav-link').forEach(function(l) {
      var href = l.getAttribute('href');
      l.classList.toggle('active', href === '#' + id || href === 'index.html#' + id);
    });
  }

  function enable() {
    if (enabled) return;
    enabled = true;

    document.documentElement.style.overflow = 'hidden';
    document.documentElement.style.height = '100vh';
    document.documentElement.style.backgroundColor = '#0A0A0A';
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vh';
    document.body.style.backgroundColor = '#0A0A0A';

    container.style.transition = 'transform 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    container.style.willChange = 'transform';
    container.style.backgroundColor = '#0A0A0A';

    recalc();
    container.style.transform = 'translate3d(0, -' + positions[0] + 'px, 0)';
  }

  function disable() {
    if (!enabled) return;
    enabled = false;

    document.documentElement.style.overflow = '';
    document.documentElement.style.height = '';
    document.documentElement.style.backgroundColor = '';
    document.body.style.overflow = '';
    document.body.style.height = '';
    document.body.style.backgroundColor = '';

    container.style.transition = '';
    container.style.willChange = '';
    container.style.transform = '';
  }

  window.addEventListener('wheel', function(e) {
    if (!enabled) return;
    e.preventDefault();
    handleScroll(getDeltaPixels(e));
  }, { passive: false });

  var touchStartY = null;

  container.addEventListener('touchstart', function(e) {
    if (!enabled || isAnimating) return;
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  container.addEventListener('touchmove', function(e) {
    if (!enabled || isAnimating || touchStartY === null) return;
    e.preventDefault();

    var deltaY = touchStartY - e.touches[0].clientY;
    touchStartY = e.touches[0].clientY;

    handleScroll(deltaY);
  }, { passive: false });

  container.addEventListener('touchend', function() {
    touchStartY = null;
  }, { passive: true });

  document.querySelectorAll('.nav-link').forEach(function(link) {
    link.addEventListener('click', function(e) {
      if (!enabled) return;
      var href = this.getAttribute('href');
      if (!href || !href.includes('#')) return;
      var id = href.split('#')[1];
      var target = document.getElementById(id);
      if (!target || target === sections[currentIndex]) return;
      e.preventDefault();
      var idx = sections.indexOf(target);
      if (idx >= 0) {
        scrollAccumulator = 0;
        lastDirection = 0;
        goTo(idx);
      }
    });
  });

  window.scrollToSection = function(id) {
    var target = document.getElementById(id);
    if (!target) return;
    if (!enabled) {
      target.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    var idx = sections.indexOf(target);
    if (idx >= 0) {
      scrollAccumulator = 0;
      lastDirection = 0;
      goTo(idx);
    }
  };

  window.addEventListener('keydown', function(e) {
    if (!enabled) return;
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      if (isAnimating) return;
      var dir = e.key === 'ArrowDown' ? 1 : -1;
      var next = currentIndex + dir;
      if (next >= 0 && next < sections.length) {
        scrollAccumulator = 0;
        lastDirection = 0;
        goTo(next);
      }
    }
  });

  var rafId;
  window.addEventListener('resize', function() {
    cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(function() {
      if (isMobile() && enabled) disable();
      else if (!isMobile() && !enabled) enable();

      if (enabled) {
        recalc();
        container.style.transition = 'none';
        container.style.transform = 'translate3d(0, -' + positions[currentIndex] + 'px, 0)';
        requestAnimationFrame(function() {
          container.style.transition = 'transform 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        });
      }
    });
  });

  if (!isMobile()) enable();
})();
