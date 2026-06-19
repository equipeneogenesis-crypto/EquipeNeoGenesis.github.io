function renderizarProjetos(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = projetosData.map((p, i) => {
    const bgImg = p.imagem || '../4-recursos/imagens/site/robo-bg.jpeg';
    return `
      <div class="projeto-card" style="animation-delay:${i * 0.08}s">
        <div class="projeto-card-thumb" style="background-image: url('${bgImg}')">
          <div class="projeto-card-overlay">
            <i class="fas fa-cogs"></i>
            <span>${p.categoria}</span>
          </div>
        </div>
        <div class="projeto-card-info">
          <h4>${p.titulo}</h4>
          <p>${p.descricao}</p>
        </div>
      </div>
    `;
  }).join('');
}
