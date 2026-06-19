# 2-estilos/ — CSS

## Arquitetura

```
:root (variáveis)           ← inner.css / style.css
├── navbar.css              ← fixa no topo, igual em todas páginas
├── hero.css                ← só index.html
├── responsivo.css          ← media queries do index
└── [pagina].css            ← uma folha por página interna
    └── inner.css           ← base compartilhada (header, footer, form)
```

## Variáveis CSS (em `:root` no `inner.css`)

```css
--clr-bg: #1a1a2e;          /* fundo escuro */
--clr-neon: #00f5ff;        /* destaque ciano */
--clr-text: #f0f4f8;        /* texto principal */
--clr-text-muted: rgba(255,255,255,0.55);
--clr-border: rgba(255,255,255,0.12);
--max-w: 1200px;             /* largura máxima do conteúdo */
```

## Regras

- **Cada página tem seu próprio CSS** nomeado igual ao HTML (ex: `membros.html` → `membros.css`)
- `navbar.css` e `inner.css` são compartilhados por **todas** páginas internas
- `style.css` é exclusivo do `index.html`
- Media queries usam breakpoints: **768px** (tablet) e **480px** (celular pequeno)
- Prefira `clamp()`, `min()`, `max()` para valores responsivos no CSS geral

## Como modificar

| O que quer fazer | Onde mexer |
|------------------|------------|
| Mudar cor do tema | `--clr-neon` no `inner.css` |
| Ajustar espaçamento | `--max-w`, `--gap-md` |
| Estilo de uma página específica | `2-estilos/[pagina].css` |
| Navbar (cor, altura, mobile) | `navbar.css` |
| Footer | `inner.css` (linha ~150) |

## Sobre `inner.css`

Contém:
- `@font-face` da Supercharge
- Reset + variáveis CSS
- `.page-header` (banner com background image)
- `.page-content` + `.container`
- Footer completo
- Formulário de contato
- Media queries globais

## Adicionar nova página

1. Crie `2-estilos/nova-pagina.css`
2. No HTML, adicione após `inner.css` e `navbar.css`:
   ```html
   <link rel="stylesheet" href="../2-estilos/inner.css">
   <link rel="stylesheet" href="../2-estilos/navbar.css">
   <link rel="stylesheet" href="../2-estilos/nova-pagina.css">
   ```
