document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('aboutSlider');
  if (!slider) return;
  const slides = slider.querySelectorAll('.slider__slide');
  const prev = slider.querySelector('.slider__arrow--prev');
  const next = slider.querySelector('.slider__arrow--next');
  let current = 0;
  let interval;

  function goTo(index) {
    slides.forEach(s => s.classList.remove('is-active'));
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('is-active');
  }

  function nextSlide() { goTo(current + 1); }
  function prevSlide() { goTo(current - 1); }

  next.addEventListener('click', nextSlide);
  prev.addEventListener('click', prevSlide);

  function startAuto() { interval = setInterval(nextSlide, 5000); }
  function stopAuto() { clearInterval(interval); }

  slider.addEventListener('mouseenter', stopAuto);
  slider.addEventListener('mouseleave', startAuto);

  // Touch swipe support
  var touchStartX = null;
  slider.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });
  slider.addEventListener('touchend', function(e) {
    if (touchStartX === null) return;
    var diff = touchStartX - e.changedTouches[0].screenX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) nextSlide(); else prevSlide();
    }
    touchStartX = null;
  }, { passive: true });

  startAuto();
});
