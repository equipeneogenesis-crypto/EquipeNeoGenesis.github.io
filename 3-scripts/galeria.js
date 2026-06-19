const fotos = Array.from({ length: 51 }, (_, i) => `galeria-${i + 1}.jpeg`);

const grid = document.querySelector(".galeria-grid");
const basePath = "../4-recursos/imagens/galeria/";

fotos.forEach((foto, i) => {
  const item = document.createElement("div");
  item.className = "galeria-item";
  item.innerHTML = `<div class="galeria-img-wrapper"><img src="${basePath}${foto}" alt="Foto da equipe NEO GENESIS ${i + 1}" loading="lazy" width="800" height="600"></div>`;
  grid.appendChild(item);
});
