function renderizarProjetos(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = projetosData.map((p, i) => {
    const iniciais = p.titulo.split(' ').map(p => p[0]).join('').slice(0, 2);

    const imgHtml = p.imagem
      ? `<div class="projeto-img" style="background-image: url('${p.imagem}')"></div>`
      : `<div class="projeto-img projeto-img--placeholder"><span>${iniciais}</span></div>`;

    return `
      <div class="projeto-card" data-modelo-id="${p.modeloId}" style="animation-delay:${i * 0.08}s">
        ${imgHtml}
        <div class="projeto-info">
          <span class="projeto-categoria">${p.categoria}</span>
          <h3 class="projeto-nome">${p.titulo}</h3>
          <p class="projeto-desc">${p.descricao}</p>
        </div>
      </div>
    `;
  }).join('');

  document.querySelectorAll('.projeto-card[data-modelo-id]').forEach(card => {
    card.addEventListener('click', () => {
      const modeloId = card.dataset.modeloId;
      const target = document.querySelector(`.viewer3d-card[data-id="${modeloId}"]`);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        target.classList.add('viewer3d-card--highlight');
        setTimeout(() => target.classList.remove('viewer3d-card--highlight'), 2000);
      }
    });
  });
}
