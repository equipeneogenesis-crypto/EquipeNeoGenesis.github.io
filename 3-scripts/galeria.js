const fotos = [
  "WhatsApp Image 2026-06-12 at 11.09.34.jpeg",
  "WhatsApp Image 2026-06-12 at 11.09.35 (1).jpeg",
  "WhatsApp Image 2026-06-12 at 11.09.35 (2).jpeg",
  "WhatsApp Image 2026-06-12 at 11.09.35.jpeg",
  "WhatsApp Image 2026-06-12 at 11.09.36 (1).jpeg",
  "WhatsApp Image 2026-06-12 at 11.09.36.jpeg",
  "WhatsApp Image 2026-06-12 at 11.09.38 (1).jpeg",
  "WhatsApp Image 2026-06-12 at 11.09.38.jpeg",
  "WhatsApp Image 2026-06-12 at 11.09.39 (1).jpeg",
  "WhatsApp Image 2026-06-12 at 11.09.39.jpeg",
  "WhatsApp Image 2026-06-12 at 11.09.40 (1).jpeg",
  "WhatsApp Image 2026-06-12 at 11.09.40 (2).jpeg",
  "WhatsApp Image 2026-06-12 at 11.09.40 (3).jpeg",
  "WhatsApp Image 2026-06-12 at 11.09.40 (4).jpeg",
  "WhatsApp Image 2026-06-12 at 11.09.40.jpeg",
  "WhatsApp Image 2026-06-12 at 11.09.41 (1).jpeg",
  "WhatsApp Image 2026-06-12 at 11.09.41 (2).jpeg",
  "WhatsApp Image 2026-06-12 at 11.09.41 (3).jpeg",
  "WhatsApp Image 2026-06-12 at 11.09.41.jpeg",
  "WhatsApp Image 2026-06-12 at 11.09.42 (1).jpeg",
  "WhatsApp Image 2026-06-12 at 11.09.42 (2).jpeg",
  "WhatsApp Image 2026-06-12 at 11.09.42 (3).jpeg",
  "WhatsApp Image 2026-06-12 at 11.09.42.jpeg",
  "WhatsApp Image 2026-06-12 at 11.09.43 (1).jpeg",
  "WhatsApp Image 2026-06-12 at 11.09.43 (2).jpeg",
  "WhatsApp Image 2026-06-12 at 11.09.43 (3).jpeg",
  "WhatsApp Image 2026-06-12 at 11.09.43.jpeg",
  "WhatsApp Image 2026-06-12 at 11.09.44 (1).jpeg",
  "WhatsApp Image 2026-06-12 at 11.09.44 (2).jpeg",
  "WhatsApp Image 2026-06-12 at 11.09.44 (3).jpeg",
  "WhatsApp Image 2026-06-12 at 11.09.44.jpeg",
  "WhatsApp Image 2026-06-12 at 11.09.45 (1).jpeg",
  "WhatsApp Image 2026-06-12 at 11.09.45 (2).jpeg",
  "WhatsApp Image 2026-06-12 at 11.09.45 (3).jpeg",
  "WhatsApp Image 2026-06-12 at 11.09.45.jpeg",
  "WhatsApp Image 2026-06-12 at 11.09.46 (1).jpeg",
  "WhatsApp Image 2026-06-12 at 11.09.46 (2).jpeg",
  "WhatsApp Image 2026-06-12 at 11.09.46 (3).jpeg",
  "WhatsApp Image 2026-06-12 at 11.09.46.jpeg",
  "WhatsApp Image 2026-06-12 at 11.09.47 (1).jpeg",
  "WhatsApp Image 2026-06-12 at 11.09.47 (2).jpeg",
  "WhatsApp Image 2026-06-12 at 11.09.47 (3).jpeg",
  "WhatsApp Image 2026-06-12 at 11.09.47.jpeg",
  "WhatsApp Image 2026-06-12 at 11.09.48 (1).jpeg",
  "WhatsApp Image 2026-06-12 at 11.09.48 (2).jpeg",
  "WhatsApp Image 2026-06-12 at 11.09.48 (3).jpeg",
  "WhatsApp Image 2026-06-12 at 11.09.48 (4).jpeg",
  "WhatsApp Image 2026-06-12 at 11.09.48.jpeg",
  "WhatsApp Image 2026-06-12 at 11.09.49 (1).jpeg",
  "WhatsApp Image 2026-06-12 at 11.09.49 (2).jpeg",
  "WhatsApp Image 2026-06-12 at 11.09.49.jpeg"
];

const grid = document.querySelector(".galeria-grid");
const basePath = "../4-recursos/imagens/galeria/";

fotos.forEach((foto, i) => {
  const item = document.createElement("div");
  item.className = "galeria-item";
  item.innerHTML = `<div class="galeria-img-wrapper"><img src="${basePath}${foto}" alt="Foto ${i + 1}" loading="lazy"></div>`;
  grid.appendChild(item);
});
