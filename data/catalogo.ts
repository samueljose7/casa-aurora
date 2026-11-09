export const colecoes = [
  { slug: 'orquideas', nome: 'Orquídeas', chamada: 'BELEZA QUE PERMANECE', descricao: 'Orquídeas em vasos delicados, prontas para iluminar a casa de alguém.' },
  { slug: 'buques', nome: 'Buquês para presentear', chamada: 'FLORES PARA DIZER MAIS', descricao: 'Da primeira surpresa à grande declaração, um buquê para cada gesto.' },
  { slug: 'girassois', nome: 'Girassóis', chamada: 'UM POUCO DE SOL', descricao: 'Flores luminosas para celebrar boas notícias, recomeços e aniversários.' },
  { slug: 'caixas', nome: 'Flores em caixa', chamada: 'PRESENTES DE ABRIR DEVAGAR', descricao: 'Composições em caixas para surpreender desde o primeiro olhar.' },
  { slug: 'rosas', nome: 'Rosas', chamada: 'CLÁSSICOS DO AFETO', descricao: 'Do vermelho intenso aos tons mais suaves, rosas para todos os gestos de carinho.' },
  { slug: 'presentes', nome: 'Cestas e presentes', chamada: 'MAIS UM GESTO DE CARINHO', descricao: 'Flores, chocolates e mimos escolhidos para acompanhar o presente.' },
];

export const ocasioes = [
  { slug: 'aniversario', nome: 'Aniversário', descricao: 'Flores para celebrar mais um ano', foto: '/flores/prod-girassois-2.webp' },
  { slug: 'romance', nome: 'Amor e romance', descricao: 'Para dizer o que você sente', foto: '/flores/prod-rosas-1.webp' },
  { slug: 'agradecimento', nome: 'Agradecimento', descricao: 'Um gesto para quem fez diferença', foto: '/flores/prod-buques-3.webp' },
  { slug: 'surpresa', nome: 'Só porque sim', descricao: 'Porque um dia comum também merece flores', foto: '/flores/prod-caixas-1.webp' },
];

export const campanhas = [
  { chamada: 'COLEÇÃO DE ORQUÍDEAS', titulo: 'Beleza que dura além do momento.', descricao: 'Orquídeas escolhidas para presentear com delicadeza e deixar a casa mais bonita.', acao: 'Conhecer orquídeas', url: '/categoria/orquideas/', foto: '/flores/hero-orquideas.webp', alt: 'Florista segurando uma orquídea branca em vaso de cerâmica' },
  { chamada: 'COLEÇÃO DE BUQUÊS', titulo: 'Para tudo o que você quer dizer.', descricao: 'Buquês artesanais, do gesto mais simples à surpresa que fica na memória.', acao: 'Explorar buquês', url: '/categoria/buques/', foto: '/flores/hero-buques.webp', alt: 'Florista segurando um buquê de flores em tons rosados' },
  { chamada: 'COLEÇÃO DE GIRASSÓIS', titulo: 'Um pouco de sol para o dia de alguém.', descricao: 'Girassóis para comemorar, agradecer ou surpreender sem precisar de uma data.', acao: 'Ver girassóis', url: '/categoria/girassois/', foto: '/flores/hero-girassois.webp', alt: 'Buquê de girassóis nas mãos de uma florista' },
];

export type Produto = {
  slug: string;
  nome: string;
  preco: number; // Centavos.
  foto: string;
  fotosExtras?: string[];
  colecao: string;
  flor: string;
  ocasioes: string[];
  descricao: string;
  destaque?: boolean;
  disponivel: boolean;
};

export const produtos: Produto[] = [
  { slug: 'orquidea-branca-neve', nome: 'Orquídea Branca Neve', preco: 18990, foto: '/flores/prod-orquideas-1.webp', colecao: 'orquideas', flor: 'Orquídeas', ocasioes: ['agradecimento','surpresa'], descricao: 'Orquídea branca de duas hastes em vaso de cerâmica canelada. Uma escolha delicada para iluminar um aparador ou presentear em uma ocasião especial.', destaque: true, disponivel: true },
  { slug: 'mini-orquidea-rose', nome: 'Mini Orquídea Rosé', preco: 12990, foto: '/flores/prod-orquideas-2.webp', colecao: 'orquideas', flor: 'Orquídeas', ocasioes: ['aniversario','surpresa'], descricao: 'Mini orquídea rosada em cachepô de cerâmica fosca, ideal para um cantinho com luz indireta.', disponivel: true },
  { slug: 'orquidea-luz-da-manha', nome: 'Orquídea Luz da Manhã', preco: 21990, foto: '/flores/prod-orquideas-3.webp', colecao: 'orquideas', flor: 'Orquídeas', ocasioes: ['aniversario','agradecimento'], descricao: 'Orquídea amarela em recipiente de vidro. Os tons claros trazem um toque de cor à mesa ou à sala.', disponivel: true },
  { slug: 'orquidea-violeta', nome: 'Orquídea Violeta', preco: 15990, foto: '/flores/prod-orquideas-4.webp', colecao: 'orquideas', flor: 'Orquídeas', ocasioes: ['surpresa','agradecimento'], descricao: 'Dendróbio de flores violetas em cachepô de fibra natural, com contraste entre as pétalas intensas e o acabamento artesanal.', disponivel: true },

  { slug: 'buque-jardim-rose', nome: 'Buquê Jardim Rosé', preco: 15990, foto: '/flores/prod-buques-1.webp', colecao: 'buques', flor: 'Flores mistas', ocasioes: ['romance','aniversario'], descricao: 'Seleção de flores em tons rosados com folhagens leves e papel acetinado.', destaque: true, disponivel: true },
  { slug: 'buque-lirios-brancos', nome: 'Buquê de Lírios Brancos', preco: 17990, foto: '/flores/prod-buques-2.webp', colecao: 'buques', flor: 'Lírios', ocasioes: ['agradecimento'], descricao: 'Lírios brancos com hastes longas, reunidos em papel creme com laço discreto.', disponivel: true },
  { slug: 'buque-astromelias', nome: 'Buquê de Astromélias', preco: 10990, foto: '/flores/prod-buques-3.webp', colecao: 'buques', flor: 'Astromélias', ocasioes: ['agradecimento','surpresa'], descricao: 'Astromélias em tons lilás e rosa, em embalagem de papel kraft.', disponivel: true },
  { slug: 'buque-festa-no-jardim', nome: 'Buquê Festa no Jardim', preco: 13990, foto: '/flores/prod-buques-4.webp', colecao: 'buques', flor: 'Gérberas', ocasioes: ['aniversario','surpresa'], descricao: 'Gérberas coloridas em uma composição solta e alegre, envolvida em papel pêssego.', disponivel: true },

  { slug: 'buque-girassois-kraft', nome: 'Buquê de Girassóis no Kraft', preco: 10990, foto: '/flores/prod-girassois-1.webp', colecao: 'girassois', flor: 'Girassóis', ocasioes: ['agradecimento','surpresa'], descricao: 'Girassóis em papel kraft. Um presente alegre para agradecer ou levantar o dia de alguém.', disponivel: true },
  { slug: 'buque-dia-de-sol', nome: 'Buquê Dia de Sol', preco: 16990, foto: '/flores/prod-girassois-2.webp', colecao: 'girassois', flor: 'Girassóis', ocasioes: ['aniversario','surpresa'], descricao: 'Buquê de girassóis com eucalipto e embalagem creme. Uma composição luminosa para comemorar.', destaque: true, disponivel: true },
  { slug: 'vaso-tres-girassois', nome: 'Vaso com Três Girassóis', preco: 11990, foto: '/flores/prod-girassois-3.webp', colecao: 'girassois', flor: 'Girassóis', ocasioes: ['surpresa','agradecimento'], descricao: 'Três girassóis em vaso de vidro transparente. O presente já chega pronto para decorar.', disponivel: true },
  { slug: 'cesta-sol-e-margaridas', nome: 'Cesta Sol e Margaridas', preco: 20990, foto: '/flores/prod-girassois-4.webp', colecao: 'girassois', flor: 'Girassóis', ocasioes: ['aniversario','agradecimento'], descricao: 'Girassóis e margaridas brancas em uma cesta de fibra natural.', disponivel: true },

  { slug: 'caixa-rosa-suave', nome: 'Caixa Rosa Suave', preco: 19990, foto: '/flores/prod-caixas-1.webp', colecao: 'caixas', flor: 'Rosas', ocasioes: ['romance','surpresa'], descricao: 'Rosas em tons pastel acomodadas em uma caixa redonda rosada.', destaque: true, disponivel: true },
  { slug: 'caixa-brisa-branca', nome: 'Caixa Brisa Branca', preco: 22990, foto: '/flores/prod-caixas-2.webp', colecao: 'caixas', flor: 'Rosas', ocasioes: ['agradecimento'], descricao: 'Rosas brancas com folhagem em caixa cilíndrica cor de marfim.', disponivel: true },
  { slug: 'caixa-rosas-vinho', nome: 'Caixa Rosas ao Vinho', preco: 25990, foto: '/flores/prod-caixas-3.webp', colecao: 'caixas', flor: 'Rosas', ocasioes: ['romance'], descricao: 'Rosas vermelhas em caixa quadrada cor de ameixa, para uma declaração clássica.', disponivel: true },
  { slug: 'caixa-pessego-e-creme', nome: 'Caixa Pêssego e Creme', preco: 21990, foto: '/flores/prod-caixas-4.webp', colecao: 'caixas', flor: 'Flores mistas', ocasioes: ['aniversario','surpresa'], descricao: 'Flores da estação em pêssego e creme, reunidas em caixa de tom natural.', disponivel: true },

  { slug: 'buque-rosas-vermelhas', nome: 'Buquê de Rosas Vermelhas', preco: 14990, foto: '/flores/prod-rosas-1.webp', colecao: 'rosas', flor: 'Rosas', ocasioes: ['romance'], descricao: 'Rosas vermelhas em uma composição clássica, envolvidas em papel creme.', destaque: true, disponivel: true },
  { slug: 'buque-rosas-cor-de-rosa', nome: 'Buquê de Rosas Cor-de-Rosa', preco: 15990, foto: '/flores/prod-rosas-2.webp', colecao: 'rosas', flor: 'Rosas', ocasioes: ['aniversario','romance'], descricao: 'Rosas em tom rosa-claro com papel marfim e acabamento delicado.', disponivel: true },
  { slug: 'vaso-rosas-brancas', nome: 'Vaso de Rosas Brancas', preco: 18990, foto: '/flores/prod-rosas-3.webp', colecao: 'rosas', flor: 'Rosas', ocasioes: ['agradecimento','surpresa'], descricao: 'Rosas brancas e eucalipto, arranjados em um vaso transparente.', disponivel: true },
  { slug: 'buque-rosas-pessego', nome: 'Buquê de Rosas Pêssego', preco: 15990, foto: '/flores/prod-rosas-4.webp', colecao: 'rosas', flor: 'Rosas', ocasioes: ['aniversario','surpresa'], descricao: 'Rosas pêssego atadas à mão, em papel de tom quente.', disponivel: true },

  { slug: 'cesta-manha-especial', nome: 'Cesta Manhã Especial', preco: 23990, foto: '/flores/prod-presentes-1.webp', colecao: 'presentes', flor: 'Flores mistas', ocasioes: ['aniversario','surpresa'], descricao: 'Cesta de café com croissant, geleia e um pequeno ramalhete de flores.', destaque: true, disponivel: true },
  { slug: 'rosas-e-chocolate', nome: 'Rosas e Chocolate', preco: 17990, foto: '/flores/prod-presentes-2.webp', colecao: 'presentes', flor: 'Rosas', ocasioes: ['romance','surpresa'], descricao: 'Pequeno buquê de rosas cor-de-rosa acompanhado de uma caixa de chocolates.', disponivel: true },
  { slug: 'cesta-cha-e-margaridas', nome: 'Cesta Chá e Margaridas', preco: 19990, foto: '/flores/prod-presentes-3.webp', colecao: 'presentes', flor: 'Margaridas', ocasioes: ['agradecimento','surpresa'], descricao: 'Cesta de fibra natural com chá, mel e um ramalhete de margaridas brancas.', disponivel: true },
  { slug: 'arranjo-jardim-lilas', nome: 'Arranjo Jardim Lilás', preco: 18990, foto: '/flores/prod-presentes-4.webp', colecao: 'presentes', flor: 'Flores mistas', ocasioes: ['aniversario','agradecimento'], descricao: 'Flores mistas em tons de lilás montadas em um vaso de cerâmica esmaltada.', disponivel: true },
];
