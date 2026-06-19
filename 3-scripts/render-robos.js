function renderizarRobos(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = robos.map((r, i) => {
    const thumbStyle = r.imagem
      ? `background-image: url('${r.imagem}');`
      : `background: linear-gradient(135deg, rgba(0,217,255,0.1), rgba(11,17,32,0.6));`;

    return `
      <div class="robo-card" data-animate="up" data-delay="${i * 80}">
        <div class="robo-card-thumb" style="${thumbStyle}"></div>
        <div class="robo-card-info">
          <h4>${r.nome}</h4>
          <p>${r.categoria}</p>
        </div>
      </div>
    `;
  }).join('');
}
