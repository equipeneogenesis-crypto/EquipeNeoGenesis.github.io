document.addEventListener('DOMContentLoaded', function() {
  var els = document.querySelectorAll('[data-animate]');
  if (!els.length) return;

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (!entry.isIntersecting) return;
      var delay = entry.target.getAttribute('data-delay') || 0;
      setTimeout(function() {
        entry.target.classList.add('is-visible');
      }, parseInt(delay, 10));
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.15 });

  els.forEach(function(el) { observer.observe(el); });
});
