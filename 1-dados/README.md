# 1-dados/ — Dados Editáveis

**É aqui que futuros integrantes devem editar** para adicionar/alterar conteúdo sem mexer em HTML, CSS ou JS.

## Arquivos

| Arquivo | Conteúdo | Como adicionar |
|---------|----------|----------------|
| `membros.js` | Array de objetos com dados dos integrantes | Adicione um objeto com `{ id, nome, nickname, foto, area, iconeArea, cargo, bio, linkedin, github }` |
| `robos.js` | Array de objetos com dados dos robôs | Adicione um objeto com `{ id, nome, imagem, categoria, status, descricao, tecnologias }` |
| `projetos.js` | Array de objetos com dados dos projetos | Adicione um objeto com `{ id, titulo, descricao, imagem, status, categoria, tags }` |

## Regras

- Mantenha a sintaxe JavaScript válida (vírgulas entre objetos, **sem vírgula no último**)
- `status` em `robos.js`: use `'ativo'` ou outro valor (será exibido como "Inativo")
- `imagem: null` = sem foto (mostra placeholder com iniciais)
- Para usar foto: coloque a imagem em `4-recursos/imagens/` e preencha o caminho
- `nickname` é opcional; se preenchido, aparece como nome principal no card e o `nome` fica pequeno embaixo

## Campos de membros.js

```js
{
  id: 5,                          // número sequencial
  nome: 'Fulano',                 // nome completo (mostrado pequeno se tiver nickname)
  nickname: 'Ful',                // apelido (opcional, vira o título do card)
  foto: null,                     // ou '4-recursos/imagens/membros/fulano.jpg'
  area: 'Mecânica',               // Software | Elétrica | Mecânica | Gestão
  iconeArea: '\u{1F527}',         // emoji da área
  cargo: 'Cargo na equipe',
  bio: 'Descrição curta.',
  linkedin: '#',
  github: '#'
}
```

## Exemplo de adição

Copie o bloco abaixo e cole dentro do array, antes do `];`:

```js
{
  id: 99,
  nome: 'Novo Integrante',
  nickname: 'Nick',
  foto: null,
  area: 'Software',
  iconeArea: '\u{1F4BB}',
  cargo: 'Desenvolvedor',
  bio: 'Descrição aqui.',
  linkedin: '#',
  github: '#'
}
```
