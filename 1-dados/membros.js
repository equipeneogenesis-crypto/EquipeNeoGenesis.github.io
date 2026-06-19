// ===== MEMBROS DA EQUIPE =====
// Para adicionar um novo membro, basta adicionar um objeto neste array.
// Campos obrigatórios: nome, foto, area, cargo, bio, status, dataIngresso
// status: "atual" para membros ativos, "anterior" para ex-membros
// Para usar foto real: coloque a imagem em 4-recursos/imagens/membros/ e coloque o caminho em 'foto'
// Se não tiver foto, coloque null que será gerado um placeholder com as iniciais.

const membros = [
  {
    id: 1,
    nome: 'Marcelo Sena Gomes de Araujo',
    nickname: 'Celim',
    foto: '../4-recursos/imagens/membros/celim.jpeg',
    area: 'Desenvolvimento Artístico',
    iconeArea: '\u{1F3A8}',
    cargo: 'Design, personalização e aparência dos robôs.',
    bio: '',
    dataIngresso: '',
    status: 'atual',
    email: null,
    instagram: null,
    github: null
  },
  {
    id: 2,
    nome: 'Arthur Guimarães Araújo',
    nickname: 'Paraense',
    foto: '../4-recursos/imagens/membros/arthur.jpeg',
    area: 'CAD e Mecânica Robótica',
    iconeArea: '\u{1F527}\u{1F4BB}',
    cargo: 'Líder da Neo Genesis',
    bio: 'Projetos em CAD e montagem de robôs.',
    dataIngresso: '',
    status: 'atual',
    email: null,
    instagram: null,
    github: null
  },
  {
    id: 3,
    nome: 'Hiarley Victor Carvalho Silva',
    nickname: 'Indiano',
    foto: '../4-recursos/imagens/membros/indiano.jpeg',
    area: 'Programação',
    iconeArea: '\u{1F4BB}',
    cargo: '',
    bio: 'Python e Visão Computacional',
    dataIngresso: '',
    status: 'anterior',
    email: null,
    instagram: null,
    github: null
  },
  {
    id: 4,
    nome: 'Laura Helena Furini',
    nickname: 'Branca',
    foto: '../4-recursos/imagens/membros/branca.jpeg',
    area: 'Mecânica Robótica',
    iconeArea: '\u{1F527}',
    cargo: '',
    bio: 'Montagem, solda e manutenção de robôs.',
    dataIngresso: '',
    status: 'atual',
    email: null,
    instagram: null,
    github: null
  },
  {
    id: 5,
    nome: 'Renan Franklin Nunes',
    nickname: 'Nanan',
    foto: '../4-recursos/imagens/membros/nanan.png',
    area: 'Desenvolvimento Robótico',
    iconeArea: '\u{1F916}',
    cargo: 'Fundador da Neo Genesis',
    bio: 'Programação, hardware e CAD mecânico.',
    dataIngresso: '',
    status: 'anterior',
    email: null,
    instagram: null,
    github: null
  },
  {
    id: 6,
    nome: 'Pedro Augusto Carneiro Gonçalves',
    nickname: 'Xebs',
    foto: '../4-recursos/imagens/membros/pedro-augusto.jpeg',
    area: 'Eletrônica',
    iconeArea: '\u{1F4BB}\u{1F527}',
    cargo: '',
    bio: 'Desenvolvimento de Firmware',
    dataIngresso: '',
    status: 'atual',
    email: null,
    instagram: null,
    github: null
  },
  {
    id: 8,
    nome: 'João Vitor Bonini de Alcântara',
    nickname: 'JV',
    foto: '../4-recursos/imagens/membros/joao-vitor.png',
    area: 'CAD e Mecânica Robótica',
    iconeArea: '\u{1F527}\u{1F4BB}',
    cargo: '',
    bio: 'Projetos em CAD e montagem de robôs.',
    dataIngresso: '',
    status: 'anterior',
    email: null,
    instagram: null,
    github: null
  },
  {
    id: 9,
    nome: 'Davi Severo Corado',
    nickname: 'Severo',
    foto: '../4-recursos/imagens/membros/severo.jpeg',
    area: 'Programação',
    iconeArea: '\u{1F4BB}',
    cargo: '',
    bio: 'Programação, Eletrônica e CAD.',
    dataIngresso: '',
    status: 'atual',
    email: null,
    instagram: null,
    github: null
  },
];
