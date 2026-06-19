function initSlider(container) {
  const slides = container.querySelectorAll('.slider__slide');
  if (!slides.length) return;
  const prev = container.querySelector('.slider__arrow--prev');
  const next = container.querySelector('.slider__arrow--next');
  let current = 0;
  let interval;

  function goTo(index) {
    slides.forEach(s => s.classList.remove('is-active'));
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('is-active');
  }

  function nextSlide() { goTo(current + 1); }
  function prevSlide() { goTo(current - 1); }

  if (next) next.addEventListener('click', nextSlide);
  if (prev) prev.addEventListener('click', prevSlide);

  function startAuto() { interval = setInterval(nextSlide, 5000); }
  function stopAuto() { clearInterval(interval); }

  container.addEventListener('mouseenter', stopAuto);
  container.addEventListener('mouseleave', startAuto);

  // Touch swipe support
  var touchStartX = null;
  container.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });
  container.addEventListener('touchend', function(e) {
    if (touchStartX === null) return;
    var diff = touchStartX - e.changedTouches[0].screenX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) nextSlide(); else prevSlide();
    }
    touchStartX = null;
  }, { passive: true });

  startAuto();
}

document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('aboutSlider');
  if (slider) initSlider(slider);
});
