# NEO GENESIS — Site Institucional

Equipe competitiva de robótica — tecnologia, inovação e educação.

## 📁 Estrutura (por importância)

```
├── 📄 index.html                     → Landing page (entrada do site)
├── 📄 robo.html                      → Robôs (dados em 1-dados/robos.js)
├── 📄 membros.html                   → Integrantes (dados em 1-dados/membros.js)
├── 📄 desenvolvimento.html           → Áreas de software/sistemas
├── 📄 oficina.html                   → O Galpão / G3
├── 📄 galeria.html                   → Fotos da equipe
├── 📄 projetos.html                  → Projetos
├── 📄 patrocinadores.html            → Patrocinadores
├── 📄 sobre.html                     → Sobre a equipe
├── 📄 contato.html                   → Contato
│
│
├── 📁 1-dados/                       → ★ Dados editáveis (o que muda com frequência)
├── 📁 2-estilos/                     → Estilos (um arquivo por página)
├── 📁 3-scripts/                     → Scripts (um arquivo por função)
├── 📁 4-recursos/                    → Imagens, ícones e assets
├── 📁 5-fontes/                      → Fontes personalizadas
└── 📄 notas.txt                      → Anotações de desenvolvimento
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
| Novo integrante | `1-dados/membros.js` |
| Novo robô | `1-dados/robos.js` |
| Novo projeto | `1-dados/projetos.js` |
| Nova foto | `4-recursos/imagens/` + referenciar no `1-dados/` |
| Novo estilo | `2-estilos/[pagina].css` |
| Nova função JS | `3-scripts/[nome].js` + `<script src="...">` no HTML |

## 📐 Convenções

- Cada página HTML carrega seu próprio CSS (`2-estilos/[pagina].css`)
- Cada função JS tem seu próprio arquivo em `3-scripts/`
- Dados dinâmicos ficam em `1-dados/` (arrays de objetos)
- Imagens em `4-recursos/imagens/` organizadas por categoria

---
© 2026 NEO GENESIS. Todos os direitos reservados.
