const corPaleta = [
  '#00f5ff', '#f472b6', '#a78bfa', '#34d399', '#fbbf24',
  '#fb7185', '#60a5fa', '#c084fc', '#2dd4bf', '#f97316'
];

function corParaMembro(nome) {
  let hash = 0;
  for (let i = 0; i < nome.length; i++) {
    hash = nome.charCodeAt(i) + ((hash << 5) - hash);
  }
  return corPaleta[Math.abs(hash) % corPaleta.length];
}

function renderizarCardsMembros(containerId, statusFiltro) {
  const container = document.getElementById(containerId);
  if (!container) return;

  let filtrados = membros.filter(m => m.status === statusFiltro);

  container.innerHTML = filtrados.map((m, i) => {
    const cor = corParaMembro(m.nome);

    const bgGrad = `linear-gradient(135deg, ${cor}22, ${cor}44)`;

    const thumbStyle = m.foto
      ? `background-image: url(${m.foto});`
      : `background: ${bgGrad};`;

    const contatoHtml = [
      m.email ? `<a href="mailto:${m.email}" class="member-contato-link" title="Email"><i class="fas fa-envelope"></i></a>` : '',
      m.instagram ? `<a href="${m.instagram}" class="member-contato-link" target="_blank" rel="noopener" title="Instagram"><i class="fab fa-instagram"></i></a>` : '',
      m.github ? `<a href="${m.github}" class="member-contato-link" target="_blank" rel="noopener" title="GitHub"><i class="fab fa-github"></i></a>` : ''
    ].filter(Boolean).join('');

    return `
      <div class="member-card" style="animation-delay:${i * 0.05}s">
        <div class="member-card-thumb" style="${thumbStyle}"></div>
        <div class="member-card-info">
          <h4>${m.nickname || m.nome}</h4>
          ${m.nickname ? `<p class="member-nome-completo">${m.nome}</p>` : ''}
          <span class="member-area-badge" style="color:${cor};">${m.area}</span>
          <p>${m.cargo}</p>
          ${m.bio ? `<p class="member-bio">${m.bio}</p>` : ''}
          ${contatoHtml ? `<div class="member-contato-links">${contatoHtml}</div>` : ''}
        </div>
      </div>
    `;
  }).join('');
}
