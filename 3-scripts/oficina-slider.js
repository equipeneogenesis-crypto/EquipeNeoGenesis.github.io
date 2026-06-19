document.addEventListener('DOMContentLoaded', function() {
  var slides = document.querySelectorAll('.slide');
  var dots = document.querySelectorAll('.nav-dot');
  var prev = document.querySelector('.slide-arrow--prev');
  var next = document.querySelector('.slide-arrow--next');
  var current = 0;
  var interval;

  function goTo(index) {
    slides.forEach(function(s) { s.classList.remove('active'); });
    dots.forEach(function(d) { d.classList.remove('active'); });
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    current = index;
    resetInterval();
  }

  function nextSlide() {
    goTo((current + 1) % slides.length);
  }

  function prevSlide() {
    goTo((current - 1 + slides.length) % slides.length);
  }

  function resetInterval() {
    clearInterval(interval);
    interval = setInterval(nextSlide, 5000);
  }

  dots.forEach(function(dot) {
    dot.addEventListener('click', function() {
      goTo(parseInt(this.getAttribute('data-index')));
    });
  });

  if (prev) prev.addEventListener('click', prevSlide);
  if (next) next.addEventListener('click', nextSlide);

  interval = setInterval(nextSlide, 5000);
});
