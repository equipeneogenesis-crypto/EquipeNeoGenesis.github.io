document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    const nome = form.querySelector('#nome');
    const email = form.querySelector('#email');
    const mensagem = form.querySelector('#mensagem');
    let valido = true;

    [nome, email, mensagem].forEach(campo => {
      if (!campo) return;
      campo.style.borderColor = '';
    });

    if (!nome || !nome.value.trim()) {
      if (nome) nome.style.borderColor = '#ff4444';
      valido = false;
    }

    if (!email?.value.trim() || !email.value.includes('@')) {
      if (email) email.style.borderColor = '#ff4444';
      valido = false;
    }

    if (!mensagem?.value.trim()) {
      mensagem.style.borderColor = '#ff4444';
      valido = false;
    }

    if (!valido) {
      e.preventDefault();
      return;
    }

    const btn = form.querySelector('.form-btn');
    if (btn) {
      btn.textContent = 'ENVIANDO...';
      btn.disabled = true;
    }
  });
});
