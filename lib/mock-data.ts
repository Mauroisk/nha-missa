export interface Parish {
  slug: string
  name: string
  city: string
  image: string
  massTime: string
  phone: string
  email: string
  address: string
  description: string
  socialFacebook?: string
  socialInstagram?: string
  massSchedule: MassSchedule[]
  events: ParishEvent[]
  weeklyInfo: string
}

export interface MassSchedule {
  day: string
  time: string
  type: string
}

export interface ParishEvent {
  id: string
  title: string
  date: string
  time: string
  description: string
}

export interface LiveStream {
  id: string
  title: string
  parish: string
  date: string
  time: string
  isLive: boolean
  thumbnailUrl: string
}

export interface NewsArticle {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  image: string
  date: string
  author: string
}

export const parishes: Parish[] = [
  {
    slug: "catedral-nossa-senhora-da-graca",
    name: "Catedral de Nossa Senhora da Graca",
    city: "Praia, Santiago",
    image: "/images/parish-1.jpg",
    massTime: "Dom. 08:00, 10:00, 18:00",
    phone: "+238 261 1234",
    email: "catedral@nhamissa.cv",
    address: "Largo da Igreja, Plateau, Praia",
    description: "A Catedral de Nossa Senhora da Graca e a principal igreja da Diocese de Santiago, situada no coracao historico da cidade da Praia. Construida no seculo XIX, e um marco da fe catolica em Cabo Verde, acolhendo milhares de fieis em celebracoes semanais e eventos especiais ao longo do ano.",
    socialFacebook: "https://facebook.com",
    socialInstagram: "https://instagram.com",
    massSchedule: [
      { day: "Domingo", time: "08:00", type: "Missa Matinal" },
      { day: "Domingo", time: "10:00", type: "Missa Solene" },
      { day: "Domingo", time: "18:00", type: "Missa Vespertina" },
      { day: "Segunda a Sexta", time: "07:00", type: "Missa Diaria" },
      { day: "Sabado", time: "18:00", type: "Missa Vespertina" },
    ],
    events: [
      { id: "1", title: "Via Sacra Quaresmal", date: "14 Mar 2026", time: "18:00", description: "Celebracao da Via Sacra durante o periodo da Quaresma." },
      { id: "2", title: "Retiro Espiritual de Pascoa", date: "28 Mar 2026", time: "09:00", description: "Retiro espiritual de preparacao para a Pascoa." },
      { id: "3", title: "Festa da Padroeira", date: "15 Ago 2026", time: "10:00", description: "Celebracao solene em honra de Nossa Senhora da Graca." },
    ],
    weeklyInfo: "Nesta semana, convidamos todos os paroquianos a participar na Via Sacra especial de sexta-feira. As confissoes estao disponiveis de quarta a sabado, das 16:00 as 17:30. O grupo de jovens reune-se no sabado as 15:00 na sala paroquial.",
  },
  {
    slug: "igreja-sao-lourenco-dos-orgaos",
    name: "Igreja de Sao Lourenco dos Orgaos",
    city: "Sao Lourenco dos Orgaos",
    image: "/images/parish-2.jpg",
    massTime: "Dom. 09:00, 17:00",
    phone: "+238 265 5678",
    email: "slourenco@nhamissa.cv",
    address: "Rua Principal, Sao Lourenco dos Orgaos",
    description: "Situada no interior verdejante de Santiago, a Igreja de Sao Lourenco dos Orgaos serve a comunidade local com dedicacao. Rodeada pela natureza exuberante da ilha, e um lugar de paz e recolhimento espiritual.",
    massSchedule: [
      { day: "Domingo", time: "09:00", type: "Missa Matinal" },
      { day: "Domingo", time: "17:00", type: "Missa Vespertina" },
      { day: "Quarta-feira", time: "18:00", type: "Missa Semanal" },
      { day: "Sabado", time: "17:00", type: "Missa Vespertina" },
    ],
    events: [
      { id: "4", title: "Catequese Infantil", date: "8 Mar 2026", time: "14:00", description: "Sessao de catequese para criancas dos 6 aos 12 anos." },
      { id: "5", title: "Romaria a Serra Malagueta", date: "22 Mar 2026", time: "07:00", description: "Peregrinacao comunitaria a Serra Malagueta." },
    ],
    weeklyInfo: "A catequese infantil retoma este sabado. Inscricoes abertas na secretaria paroquial.",
  },
  {
    slug: "paroquia-nossa-senhora-da-luz",
    name: "Paroquia de Nossa Senhora da Luz",
    city: "Tarrafal, Santiago",
    image: "/images/parish-3.jpg",
    massTime: "Dom. 08:30, 11:00",
    phone: "+238 266 9012",
    email: "tarrafal@nhamissa.cv",
    address: "Praca Central, Tarrafal",
    description: "A Paroquia de Nossa Senhora da Luz e a principal igreja do Tarrafal, servindo a comunidade no extremo norte de Santiago. Com vista para o oceano, e um lugar especial de devocao e encontro comunitario.",
    socialFacebook: "https://facebook.com",
    massSchedule: [
      { day: "Domingo", time: "08:30", type: "Missa Matinal" },
      { day: "Domingo", time: "11:00", type: "Missa Solene" },
      { day: "Terca-feira", time: "18:00", type: "Missa Semanal" },
      { day: "Quinta-feira", time: "18:00", type: "Missa Semanal" },
      { day: "Sabado", time: "18:00", type: "Missa Vespertina" },
    ],
    events: [
      { id: "6", title: "Festa de Santo Amaro", date: "15 Jan 2026", time: "10:00", description: "Celebracao festiva em honra de Santo Amaro." },
    ],
    weeklyInfo: "Preparacao para a Primeira Comunhao: encontro de pais neste domingo apos a missa das 11:00.",
  },
  {
    slug: "igreja-sao-salvador-do-mundo",
    name: "Igreja de Sao Salvador do Mundo",
    city: "Santa Cruz",
    image: "/images/parish-1.jpg",
    massTime: "Dom. 09:30, 18:00",
    phone: "+238 269 3456",
    email: "santacruz@nhamissa.cv",
    address: "Rua da Igreja, Santa Cruz",
    description: "A Igreja de Sao Salvador do Mundo e uma das paroquias mais antigas de Santiago, com uma rica historia e tradicao religiosa que remonta aos primeiros seculos da colonizacao.",
    massSchedule: [
      { day: "Domingo", time: "09:30", type: "Missa Matinal" },
      { day: "Domingo", time: "18:00", type: "Missa Vespertina" },
      { day: "Quarta-feira", time: "07:00", type: "Missa Diaria" },
      { day: "Sexta-feira", time: "18:00", type: "Missa Semanal" },
    ],
    events: [
      { id: "7", title: "Adoracao ao Santissimo", date: "6 Mar 2026", time: "17:00", description: "Hora de adoracao ao Santissimo Sacramento." },
      { id: "8", title: "Encontro de Casais", date: "20 Mar 2026", time: "19:00", description: "Encontro mensal para casais da paroquia." },
    ],
    weeklyInfo: "Adoracao ao Santissimo todas as sextas-feiras apos a missa das 18:00.",
  },
  {
    slug: "paroquia-santo-amaro-abade",
    name: "Paroquia de Santo Amaro Abade",
    city: "Santa Catarina",
    image: "/images/parish-2.jpg",
    massTime: "Dom. 08:00, 10:30",
    phone: "+238 265 7890",
    email: "santacatarina@nhamissa.cv",
    address: "Largo da Igreja, Assomada, Santa Catarina",
    description: "Localizada na cidade de Assomada, a Paroquia de Santo Amaro Abade e o centro religioso do interior de Santiago. E conhecida pelas suas celebracoes vibrantes e pela comunidade acolhedora.",
    socialInstagram: "https://instagram.com",
    massSchedule: [
      { day: "Domingo", time: "08:00", type: "Missa Matinal" },
      { day: "Domingo", time: "10:30", type: "Missa Solene" },
      { day: "Segunda a Sexta", time: "07:00", type: "Missa Diaria" },
      { day: "Sabado", time: "18:00", type: "Missa Vespertina" },
    ],
    events: [
      { id: "9", title: "Procissao de Cinzas", date: "18 Feb 2026", time: "18:00", description: "Procissao e celebracao da Quarta-feira de Cinzas." },
    ],
    weeklyInfo: "Grupo coral procura novos membros. Ensaios aos sabados as 16:00.",
  },
  {
    slug: "igreja-sao-joao-baptista",
    name: "Igreja de Sao Joao Baptista",
    city: "Porto Novo, Santo Antao",
    image: "/images/parish-3.jpg",
    massTime: "Dom. 09:00, 17:30",
    phone: "+238 222 1234",
    email: "portonovo@nhamissa.cv",
    address: "Rua de Sao Joao, Porto Novo, Santo Antao",
    description: "A Igreja de Sao Joao Baptista serve a comunidade de Porto Novo, na ilha de Santo Antao. Com a sua arquitectura simples e acolhedora, e um ponto de referencia espiritual para os fieis da ilha.",
    massSchedule: [
      { day: "Domingo", time: "09:00", type: "Missa Matinal" },
      { day: "Domingo", time: "17:30", type: "Missa Vespertina" },
      { day: "Quinta-feira", time: "18:00", type: "Missa Semanal" },
    ],
    events: [
      { id: "10", title: "Festa de Sao Joao", date: "24 Jun 2026", time: "10:00", description: "Celebracao solene do padroeiro da paroquia." },
    ],
    weeklyInfo: "As inscricoes para a catequese estao abertas ate final do mes.",
  },
  {
    slug: "paroquia-nossa-senhora-do-rosario",
    name: "Paroquia de Nossa Senhora do Rosario",
    city: "Ribeira Grande, Santo Antao",
    image: "/images/parish-1.jpg",
    massTime: "Dom. 08:00, 10:00",
    phone: "+238 221 5678",
    email: "ribeiragrande@nhamissa.cv",
    address: "Rua do Rosario, Ribeira Grande",
    description: "Situada na pitoresca cidade de Ribeira Grande, esta paroquia e uma das mais antigas de Santo Antao, com uma devocao especial a Nossa Senhora do Rosario.",
    massSchedule: [
      { day: "Domingo", time: "08:00", type: "Missa Matinal" },
      { day: "Domingo", time: "10:00", type: "Missa Solene" },
      { day: "Quarta-feira", time: "18:00", type: "Missa Semanal" },
      { day: "Sabado", time: "17:00", type: "Missa Vespertina" },
    ],
    events: [],
    weeklyInfo: "Terco comunitario todas as noites de maio as 19:00.",
  },
  {
    slug: "igreja-nossa-senhora-da-conceicao",
    name: "Igreja de Nossa Senhora da Conceicao",
    city: "Sao Filipe, Fogo",
    image: "/images/parish-2.jpg",
    massTime: "Dom. 09:00, 18:00",
    phone: "+238 281 1234",
    email: "saofilipe@nhamissa.cv",
    address: "Praca da Igreja, Sao Filipe, Fogo",
    description: "A Igreja de Nossa Senhora da Conceicao e o principal templo da ilha do Fogo, com uma historia rica e uma comunidade vibrante de fieis.",
    socialFacebook: "https://facebook.com",
    socialInstagram: "https://instagram.com",
    massSchedule: [
      { day: "Domingo", time: "09:00", type: "Missa Matinal" },
      { day: "Domingo", time: "18:00", type: "Missa Vespertina" },
      { day: "Segunda a Sexta", time: "07:30", type: "Missa Diaria" },
    ],
    events: [
      { id: "11", title: "Festa de Sao Filipe", date: "1 Mai 2026", time: "10:00", description: "Grande festa em honra do padroeiro da cidade." },
    ],
    weeklyInfo: "O coro paroquial convida todos para o ensaio especial de Pascoa neste sabado.",
  },
  {
    slug: "paroquia-sao-miguel-arcanjo",
    name: "Paroquia de Sao Miguel Arcanjo",
    city: "Calheta, Santiago",
    image: "/images/parish-3.jpg",
    massTime: "Dom. 09:00, 17:00",
    phone: "+238 273 4567",
    email: "calheta@nhamissa.cv",
    address: "Rua Central, Calheta de Sao Miguel",
    description: "A Paroquia de Sao Miguel Arcanjo serve a comunidade da Calheta com zelo pastoral, promovendo a fe e a vida comunitaria atraves de diversas actividades.",
    massSchedule: [
      { day: "Domingo", time: "09:00", type: "Missa Matinal" },
      { day: "Domingo", time: "17:00", type: "Missa Vespertina" },
      { day: "Sabado", time: "17:00", type: "Missa Vespertina" },
    ],
    events: [],
    weeklyInfo: "Visitas aos doentes nesta quarta-feira. Voluntarios contactar a secretaria.",
  },
]

export const liveStreams: LiveStream[] = [
  {
    id: "1",
    title: "Missa Dominical - Catedral de Nossa Senhora da Graca",
    parish: "Catedral de Nossa Senhora da Graca",
    date: "Domingo, 9 de Marco 2026",
    time: "10:00",
    isLive: true,
    thumbnailUrl: "/images/parish-1.jpg",
  },
  {
    id: "2",
    title: "Missa Vespertina - Paroquia de Sao Lourenco",
    parish: "Igreja de Sao Lourenco dos Orgaos",
    date: "Domingo, 9 Mar",
    time: "18:00",
    isLive: false,
    thumbnailUrl: "/images/parish-2.jpg",
  },
  {
    id: "3",
    title: "Adoracao ao Santissimo - Catedral",
    parish: "Catedral de Nossa Senhora da Graca",
    date: "Segunda, 10 Mar",
    time: "17:00",
    isLive: false,
    thumbnailUrl: "/images/parish-1.jpg",
  },
  {
    id: "4",
    title: "Celebracao da Quaresma - Igreja de Sao Jorge",
    parish: "Igreja de Sao Salvador do Mundo",
    date: "Terca, 11 Mar",
    time: "19:00",
    isLive: false,
    thumbnailUrl: "/images/parish-3.jpg",
  },
  {
    id: "5",
    title: "Terco Comunitario - Paroquia de Santo Amaro",
    parish: "Paroquia de Santo Amaro Abade",
    date: "Quarta, 12 Mar",
    time: "19:00",
    isLive: false,
    thumbnailUrl: "/images/parish-2.jpg",
  },
]

export const pastStreams: LiveStream[] = [
  {
    id: "p1",
    title: "Missa de Cinzas - Catedral",
    parish: "Catedral de Nossa Senhora da Graca",
    date: "18 Fev 2026",
    time: "18:00",
    isLive: false,
    thumbnailUrl: "/images/parish-1.jpg",
  },
  {
    id: "p2",
    title: "Missa Dominical - Tarrafal",
    parish: "Paroquia de Nossa Senhora da Luz",
    date: "2 Mar 2026",
    time: "11:00",
    isLive: false,
    thumbnailUrl: "/images/parish-3.jpg",
  },
  {
    id: "p3",
    title: "Missa do Primeiro Sabado - Assomada",
    parish: "Paroquia de Santo Amaro Abade",
    date: "1 Mar 2026",
    time: "18:00",
    isLive: false,
    thumbnailUrl: "/images/parish-2.jpg",
  },
  {
    id: "p4",
    title: "Celebracao do Carnaval Cristao",
    parish: "Catedral de Nossa Senhora da Graca",
    date: "15 Fev 2026",
    time: "10:00",
    isLive: false,
    thumbnailUrl: "/images/parish-1.jpg",
  },
  {
    id: "p5",
    title: "Adoracao Nocturna - Santa Cruz",
    parish: "Igreja de Sao Salvador do Mundo",
    date: "28 Fev 2026",
    time: "21:00",
    isLive: false,
    thumbnailUrl: "/images/parish-3.jpg",
  },
  {
    id: "p6",
    title: "Missa da Juventude - Praia",
    parish: "Catedral de Nossa Senhora da Graca",
    date: "23 Fev 2026",
    time: "17:00",
    isLive: false,
    thumbnailUrl: "/images/parish-1.jpg",
  },
]

export const newsArticles: NewsArticle[] = [
  {
    id: "1",
    slug: "diocese-lanca-plataforma-digital",
    title: "Diocese de Santiago Lanca Nova Plataforma Digital",
    excerpt: "A Diocese de Santiago apresenta o NHA MISSA, uma plataforma digital inovadora para acompanhar as actividades da igreja.",
    content: "A Diocese de Santiago apresentou oficialmente a plataforma NHA MISSA, um marco na evangelizacao digital em Cabo Verde...",
    category: "Institucional",
    image: "/images/parish-1.jpg",
    date: "5 Mar 2026",
    author: "Diocese de Santiago",
  },
  {
    id: "2",
    slug: "quaresma-2026-programa",
    title: "Programa Completo da Quaresma 2026",
    excerpt: "Confira o programa de actividades para o periodo da Quaresma em todas as paroquias da diocese.",
    content: "O periodo da Quaresma 2026 sera marcado por diversas actividades espirituais em todas as paroquias...",
    category: "Liturgia",
    image: "/images/parish-2.jpg",
    date: "1 Mar 2026",
    author: "Secretariado Diocesano",
  },
  {
    id: "3",
    slug: "encontro-jovens-praia",
    title: "Grande Encontro de Jovens na Cidade da Praia",
    excerpt: "Mais de 500 jovens participaram no encontro diocesano realizado no fim de semana passado.",
    content: "O encontro diocesano de jovens reuniu mais de 500 participantes de diversas paroquias...",
    category: "Juventude",
    image: "/images/parish-3.jpg",
    date: "28 Fev 2026",
    author: "Pastoral Juvenil",
  },
  {
    id: "4",
    slug: "nova-paroquia-inaugurada",
    title: "Nova Capela Inaugurada em Sao Domingos",
    excerpt: "A comunidade de Sao Domingos celebrou a inauguracao da nova capela com uma missa solene.",
    content: "Apos dois anos de construcao, a comunidade de Sao Domingos celebrou a inauguracao...",
    category: "Institucional",
    image: "/images/parish-1.jpg",
    date: "20 Fev 2026",
    author: "Diocese de Santiago",
  },
  {
    id: "5",
    slug: "campanha-solidariedade",
    title: "Campanha de Solidariedade Arrecada Toneladas de Alimentos",
    excerpt: "A campanha diocesana de solidariedade ultrapassou todas as expectativas com donativos recordes.",
    content: "A campanha anual de solidariedade da diocese arrecadou mais de 5 toneladas de alimentos...",
    category: "Solidariedade",
    image: "/images/parish-2.jpg",
    date: "15 Fev 2026",
    author: "Caritas Diocesana",
  },
  {
    id: "6",
    slug: "formacao-catequistas",
    title: "Jornada de Formacao para Catequistas",
    excerpt: "Mais de 200 catequistas participaram na jornada anual de formacao organizada pela diocese.",
    content: "A jornada anual de formacao para catequistas reuniu mais de 200 participantes...",
    category: "Formacao",
    image: "/images/parish-3.jpg",
    date: "10 Fev 2026",
    author: "Secretariado da Catequese",
  },
  {
    id: "7",
    slug: "missao-santo-antao",
    title: "Missao Pastoral em Santo Antao",
    excerpt: "Equipa missionaria visita comunidades rurais de Santo Antao durante uma semana.",
    content: "Uma equipa missionaria composta por sacerdotes e leigos visitou comunidades rurais...",
    category: "Missoes",
    image: "/images/parish-1.jpg",
    date: "5 Fev 2026",
    author: "Secretariado das Missoes",
  },
  {
    id: "8",
    slug: "concerto-sacro-catedral",
    title: "Concerto de Musica Sacra na Catedral",
    excerpt: "O coro diocesano apresentou um concerto especial de musica sacra na Catedral da Praia.",
    content: "O coro diocesano encantou os presentes com um repertorio de musica sacra...",
    category: "Cultura",
    image: "/images/parish-2.jpg",
    date: "1 Fev 2026",
    author: "Comissao de Arte Sacra",
  },
  {
    id: "9",
    slug: "dia-mundial-doente",
    title: "Diocese Celebra Dia Mundial do Doente",
    excerpt: "Celebracoes especiais em todas as paroquias marcaram o Dia Mundial do Doente.",
    content: "A diocese celebrou o Dia Mundial do Doente com missas especiais e visitas aos hospitais...",
    category: "Solidariedade",
    image: "/images/parish-3.jpg",
    date: "11 Fev 2026",
    author: "Pastoral da Saude",
  },
]

export const newsCategories = [
  "Todas",
  "Institucional",
  "Liturgia",
  "Juventude",
  "Solidariedade",
  "Formacao",
  "Missoes",
  "Cultura",
]

export const dashboardStats = {
  totalParishes: 9,
  totalEvents: 14,
  liveViews: 2847,
  subscribers: 1523,
}

export const recentActivity = [
  { action: "Nova paroquia adicionada", detail: "Paroquia de Sao Miguel Arcanjo", time: "Ha 2 horas" },
  { action: "Evento actualizado", detail: "Via Sacra Quaresmal - Catedral", time: "Ha 5 horas" },
  { action: "Transmissao ao vivo iniciada", detail: "Missa Dominical - Catedral", time: "Ha 1 dia" },
  { action: "Novo subscritor", detail: "joao.silva@email.cv", time: "Ha 1 dia" },
  { action: "Horario de missa actualizado", detail: "Igreja de Sao Lourenco", time: "Ha 2 dias" },
  { action: "Informacao semanal publicada", detail: "Paroquia de Santo Amaro", time: "Ha 3 dias" },
]
