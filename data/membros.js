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
    foto: '../assets/images/membros/celim.jpeg',
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
    foto: '../assets/images/membros/arthur.jpeg',
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
    foto: '../assets/images/membros/indiano.jpeg',
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
    foto: '../assets/images/membros/branca.jpeg',
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
    foto: '../assets/images/membros/nanan.png',
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
    foto: '../assets/images/membros/pedro-augusto.jpeg',
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
    foto: '../assets/images/membros/joao-vitor.png',
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
    foto: '../assets/images/membros/severo.jpeg',
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
