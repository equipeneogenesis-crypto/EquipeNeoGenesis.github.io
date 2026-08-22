document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".galeria-grid");
  if (!grid) return;

  const basePath = "../4-recursos/imagens/galeria/";
  const fotos = Array.from({ length: 51 }, (_, i) => `galeria-${i + 1}.jpeg`);

  const aguardar = (img) =>
    new Promise((resolve) => {
      if (img.complete) resolve();
      else {
        img.onload = () => resolve();
        img.onerror = () => resolve();
      }
    });

  const imagens = fotos.map((foto) => {
    const img = new Image();
    img.src = `${basePath}${foto}`;
    return img;
  });

  Promise.all(imagens.map(aguardar)).then(() => {
    const frag = document.createDocumentFragment();
    imagens.forEach((img, i) => {
      if (!img.naturalWidth || !img.naturalHeight) return;
      img.style.aspectRatio = `${img.naturalWidth} / ${img.naturalHeight}`;
      img.alt = `Foto da equipe NEO GENESIS ${i + 1}`;

      const wrapper = document.createElement("div");
      wrapper.className = "galeria-img-wrapper";
      wrapper.appendChild(img);

      const item = document.createElement("div");
      item.className = "galeria-item";
      item.appendChild(wrapper);
      frag.appendChild(item);
    });
    grid.appendChild(frag);
    grid.classList.add("galeria-grid--pronta");
  });
});
