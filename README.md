# 🤖 NEO GENESIS — Site da Equipe de Robótica

Site oficial da equipe de robótica competitiva **NEO GENESIS** do IFTO Campus Palmas.

## 🧱 Estrutura do Projeto

```
NEO/
├── index.html             → Página inicial (landing page)
├── pages/                 → Páginas internas do site
│   ├── galeria.html       → Galeria de fotos
│   ├── membros.html       → Membros da equipe
│   ├── robo.html          → Robôs da equipe
│   ├── desenvolvimento.html → Modelos 3D
│   ├── oficina.html       → Laboratório G3
│   ├── sobre.html         → Sobre a equipe
│   ├── projetos.html      → Projetos
│   ├── patrocinadores.html → Patrocinadores
│   └── contato.html       → Contato
│
├── 1-dados/               → Dados editáveis (JS)
│   ├── membros.js         → Lista dos membros
│   ├── robos.js           → Lista dos robôs
│   └── projetos.js        → Lista dos projetos
│
├── 2-estilos/             → Folhas de estilo (CSS)
│   ├── style.css          → Estilo principal (landing page)
│   ├── inner.css          → Estilo base das páginas internas
│   ├── navbar.css         → Barra de navegação
│   ├── hero.css           → Seção hero da landing page
│   ├── responsivo.css     → Responsividade
│   └── *.css              → Estilo específico de cada página
│
├── 3-scripts/             → Scripts JS
│   ├── galeria.js         → Renderiza as fotos da galeria
│   ├── render-membros.js  → Renderiza cards dos membros
│   ├── render-robos.js    → Renderiza cards dos robôs
│   ├── render-3d.js       → Visualizador 3D (Three.js)
│   └── *.js               → Demais funcionalidades
│
├── 4-recursos/            → Recursos estáticos
│   └── imagens/
│       ├── site/          → Imagens do layout (logo, hero, headers)
│       ├── robos/         → Fotos dos robôs
│       ├── membros/       → Fotos dos membros
│       ├── patrocinadores/ → Logos dos patrocinadores
│       ├── slides/        → Imagens do carrossel
│       └── galeria/       → Fotos da galeria
│
├── 5-fontes/              → Fontes locais
└── README.md              → Este arquivo
```

## 📝 Como Editar

### Adicionar fotos na Galeria

1. Coloque as imagens em `4-recursos/imagens/galeria/`
2. Edite `3-scripts/galeria.js` e adicione os nomes dos arquivos no array `fotos`

```js
const fotos = [
  "minha-foto.jpg",
  "outra-foto.jpg"
];
```

### Adicionar um Membro

Edite `1-dados/membros.js` e adicione um novo objeto:

```js
{
  nome: "Fulano",
  cargo: "Programador",
  foto: "../4-recursos/imagens/membros/fulano.jpg",
  status: "atual" // ou "anterior"
}
```

### Adicionar um Robô

Edite `1-dados/robos.js` e adicione um novo objeto:

```js
{
  id: 13,
  nome: "Meu Robô",
  imagem: "../4-recursos/imagens/robos/meu-robo.jpg",
  categoria: "Sumô 3kg",
  status: "ativo"
}
```

### Adicionar Patrocinadores

Edite `index.html` e adicione na seção `#sponsors`:

```html
<div class="sponsor-card">
  <img loading="lazy" src="4-recursos/imagens/patrocinadores/logo-empresa.png" alt="Empresa" class="sponsor-logo">
</div>
```

## 🌐 Publicar no GitHub

```bash
git add .
git commit -m "descrição do que foi alterado"
git push
```

O GitHub Pages publica automaticamente.

## 🛠 Tecnologias

- HTML5 + CSS3 + JavaScript puro
- Three.js para modelos 3D
- Font Awesome para ícones
- Google Fonts para tipografia
