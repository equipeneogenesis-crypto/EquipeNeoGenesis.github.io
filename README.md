# NEO GENESIS — Site Institucional

Equipe competitiva de robótica — tecnologia, inovação e educação.

## 📁 Estrutura

```
├── 📄 index.html                  → Landing page
├── 📁 pages/                      → Demais páginas HTML
├── 📁 data/                       → Dados editáveis (membros, robôs, projetos)
├── 📁 src/
│   ├── 📁 css/                    → Estilos (um arquivo por página)
│   └── 📁 js/                     → Scripts (um arquivo por função)
├── 📁 assets/
│   ├── 📁 images/                 → Imagens (inclui /membros, /galeria)
│   ├── 📁 fonts/                  → Fontes personalizadas
│   ├── 📁 icons/                  → Ícones
│   └── 📁 models/                 → Modelos 3D
└── 📄 README.md
```

## 🚀 Como executar

Abra `index.html` no navegador ou use Live Server (VS Code).

## 🧱 Tecnologias

- HTML5 semântico
- CSS3 (Flexbox, Grid, Variáveis CSS, Animações)
- JavaScript Vanilla (modular, sem frameworks)
- Google Fonts: Orbitron, Exo 2, Playfair Display, Inter
- Font Awesome 6

## 📝 Como adicionar conteúdo

| O que? | Onde editar |
|--------|-------------|
| Novo integrante | `data/membros.js` |
| Novo robô | `data/robos.js` |
| Novo projeto | `data/projetos.js` |
| Nova foto | `assets/images/` + referenciar em `data/` |
| Novo estilo | `src/css/[pagina].css` |
| Nova função JS | `src/js/[nome].js` + `<script src="...">` no HTML |

## 📐 Convenções

- Cada página HTML carrega seu próprio CSS (`src/css/[pagina].css`)
- Cada função JS tem seu próprio arquivo em `src/js/`
- Dados dinâmicos ficam em `data/` (arrays de objetos)
- Imagens em `assets/images/` organizadas por categoria

---
© 2026 NEO GENESIS. Todos os direitos reservados.
