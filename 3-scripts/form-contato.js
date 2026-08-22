document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  const btn = form.querySelector('.form-btn');
  const labelOriginal = btn ? btn.textContent : '';

  form.addEventListener('submit', () => {
    if (!form.checkValidity()) return;

    if (btn) {
      btn.textContent = 'ENVIANDO...';
      btn.disabled = true;
      setTimeout(() => {
        btn.disabled = false;
        btn.textContent = labelOriginal;
      }, 10000);
    }
  });
});
