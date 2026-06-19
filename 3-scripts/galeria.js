const fotos = Array.from({ length: 51 }, (_, i) => `galeria-${i + 1}.jpeg`);

const grid = document.querySelector(".galeria-grid");
const basePath = "../4-recursos/imagens/galeria/";

fotos.forEach((foto, i) => {
  const item = document.createElement("div");
  item.className = "galeria-item";
  item.innerHTML = `<div class="galeria-img-wrapper"><img src="${basePath}${foto}" alt="Foto ${i + 1}" loading="lazy"></div>`;
  grid.appendChild(item);
});
