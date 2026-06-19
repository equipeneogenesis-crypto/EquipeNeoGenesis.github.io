# 3-scripts/ — JavaScript

Cada arquivo tem **uma responsabilidade**. A renderização segue o fluxo:

`1-dados/*.js` → `3-scripts/render-*.js` → HTML

---

## Arquivos

### Renderizadores (transformam dados em HTML)

| Arquivo | Função |
|---------|--------|
| `render-membros.js` | Lê `membros.js` → cria `.member-card` no `.membros-grid` |
| `render-robos.js` | Lê `robos.js` → cria `.robo-card` no `.robo-grid` |
| `render-projetos.js` | Lê `projetos.js` → cria `.projeto-card` no `.projetos-grid` |
| `render-3d.js` | Renderiza modelos 3D (GLB/OBJ) com Three.js + cards no `.viewer3d-grid` |

Como funciona: cada `render-*.js` itera sobre o array de dados, cria elementos DOM com `document.createElement` ou `innerHTML`, e insere no container. Para adicionar um card novo, edite o arquivo em `1-dados/`, não o renderizador.

### Navegação

| Arquivo | Função |
|---------|--------|
| `navbar.js` | Hamburger toggle em mobile, fecha menu ao clicar num link |
| `scroll-spy.js` | IntersectionObserver: marca `.nav-link.active` conforme a seção visível |
| `scroll-control.js` | Scroll vertical controlado no index (acumulador de 30px, touch suportado) |

`scroll-control.js` lógica:
- Acumula `deltaY` do wheel/touch até 30px → navega para próxima seção
- `transform: translate3d()` no `#scroll-container`
- `touchstart`/`touchmove` no container para capturar swipe
- Teclado (setas) e clique nos `.nav-link` também funcionam

### Interação

| Arquivo | Função |
|---------|--------|
| `slider.js` | Slider da seção Sobre (auto-play 5s, pause hover, **swipe touch**) |
| `form-contato.js` | Valida campos do formulário, mostra feedback visual |
| `animacoes.js` | IntersectionObserver: ativa `data-animate` (fade, left, right, scale) |

### Utilitários

| Arquivo | Função |
|---------|--------|
| `main.js` | Placeholder de inicialização |

---

## Como adicionar um script novo

1. Crie `3-scripts/meu-script.js`
2. Adicione no `<head>` do HTML: `<script defer src="../3-scripts/meu-script.js"></script>`
3. Se ele depende de dados de `1-dados/`, carregue o data script **antes**

## Ordem de carregamento (dentro de cada página)

1. `1-dados/*.js` — dados
2. `3-scripts/render-*.js` — renderizadores
3. Demais scripts na ordem de necessidade
