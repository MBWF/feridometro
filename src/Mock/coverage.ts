import Colagenase from '../assets/tratamentos/Colagenase.jpg';
import espumas from '../assets/tratamentos/Espumas-de-poliuretano.jpg';
import hidrocoloide from '../assets/tratamentos/hidrocoloide.jpg';
import Hidrofibras from '../assets/tratamentos/Hidrofibras.jpg';
import solucoes from '../assets/tratamentos/Malha de acetato impregnada com soluções.jpg';
import Papaina from '../assets/tratamentos/Papaina.jpg';
import silicone from '../assets/tratamentos/tela de silicone.png';
import Cadexomero from '../assets/tratamentos_infeccao/Cadexomero de iodo.jpg';

export const coveragesMock = [
  {
    title: 'Hidrogel',
    srcImage:
      'https://cdn.awsli.com.br/1000x1000/518/518191/produto/79439722/9f1aa31806.jpg',
    children: [
      {
        title: 'Composição',
        description:
          '- Gel transparente incolor, composto por água (77,7%), carboximetilcelulose – CMC (2,3%) e propilenoglicol – PPG (20%)',
      },
      {
        title: 'Indicação',
        description: '- Remover crostas e tecidos desvitalizados de feridas abertas',
      },
      {
        title: 'Contraindicação',
        description: '- Utilizar em pele íntegra e incisões cirúrgicas fechadas.',
      },
      {
        title: 'Frequência de troca',
        description: 'Feridas infectadas (a cada 24 horas); necrose (a cada 72 horas).',
      },
    ],
  },
  {
    title: 'Papaína',
    srcImage: Papaina,
    children: [
      {
        title: 'Composição',
        description:
          '7 diferentes aminoácidos e por enzimas proteolíticas e peroxidases, extraídas do látex do mamão papaia (Carica papaya). Pode ser utilizada na forma de pó, gel ou pasta (creme). Em pó deve ser diluída imediatamente antes da execução do curativo e age por 20 minutos e, em gel ou pasta por 24 horas.',
      },
      {
        title: 'Indicação',
        description:
          '- Desbridamento enzimático; 2% a 4% feridas secas ou com tecido de granulação; 4% a 6% feridas com necrose de liquefação, exsudato purulento e/ou infecções; 8% a 10% feridas com necrose de coagulação após escarotomia;',
      },
      {
        title: 'Contraindicação',
        description:
          '- Pacientes alérgicos ao látex; Não aplicar em contato com metais, devido ao poder de oxidação.',
      },
      {
        title: 'Frequência de troca',
        description:
          'Sempre que o curativo secundário estiver saturado ou no máximo a cada 24h.',
      },
    ],
  },
  {
    title: 'Colagenase',
    srcImage: Colagenase,
    children: [
      {
        title: 'Composição',
        description: 'Colagenase, clostridiopeptidase A e enzimas proteolíticas.',
      },
      {
        title: 'Indicação',
        description: 'Desbridamento enzimático;',
      },
      {
        title: 'Contraindicação',
        description:
          'Feridas com cicatrização por primeira intenção; pacientes com hipersensibilidade à Colagenase ou a qualquer componente da formulação.',
      },
      {
        title: 'Frequência de troca',
        description: 'A cada 24 horas;',
      },
    ],
  },
  {
    title: 'Fibras poliabsorventes / Hidrofibras',
    srcImage: Hidrofibras,
    children: [
      {
        title: 'Composição',
        description:
          'Fibras de carboximetilcelulose hidrodesbridantes (ou fibras poliabsorventes); pode estar associado a 1,2% de prata iônica ou polímeros de poliacrilato de amônia envoltas em um núcleo acrílico.',
      },
      {
        title: 'Indicação',
        description:
          'Feridas exsudativas de diversas etiologias; desbridamento autolítico; Abrasões, lacerações e cortes; Queimaduras de 2º grau e 3º grau após desbridamento cirúrgico e com exsudato.',
      },
      {
        title: 'Contraindicação',
        description:
          'Não usar em necrose de coagulação; Feridas com pouca exsudação e uso limitado em feridas superficiais.',
      },
      {
        title: 'Frequência de troca',
        description:
          'Até 7 dias; Pode permanecer até 14 dias em casos de queimaduras; Trocar curativo secundário quando saturado ou em até 24 horas;;',
      },
    ],
  },
  {
    title: 'Espumas / Hidropolímeros',
    srcImage: espumas,
    children: [
      {
        title: 'Composição',
        description:
          'Almofada de espuma composta de camadas sobrepostas de não tecido e hidropolímero e revestida por poliuretano e silicone.',
      },
      {
        title: 'Indicação',
        description:
          'Controle da umidade no leito da ferida. Quando adicionadas a substancias surfactantes e umectantes promovem desbridamento autolítico. Quando impregnadas com Prata ou PHMB promovem tratamento da infecção ou biofilme.',
      },
      {
        title: 'Contraindicação',
        description:
          'Queimaduras de terceito grau; lesões com vasculite ativa; Necrose seca (Tecido desvitalizados), hipergranulação e feridas com pouca exsudação..',
      },
      {
        title: 'Periodicidade de troca',
        description:
          'A cada sete dias ou sempre que houver presença de fluído da ferida nas bordas da espuma; As trocas variam dependendo da saturação do curativo. Trocar o curativo secundário sempre que saturado.',
      },
    ],
  },
  {
    title: 'Cadexômero de Iodo',
    srcImage: Cadexomero,
    children: [
      {
        title: 'Composição',
        description:
          'Pomada castanho-escuro estéril, composto por cadexômero (microgrânulos de amido modificado), polietilenoglicol, poloxâmero e iodo',
      },
      {
        title: 'Indicação',
        description:
          'Tratamento tópico de feridas exsudativas crônicas. Pode ser usado sob terapia de compressão, pode ser utilizado em feridas infectadas. É ativo contra MRSA e atua prevenindo a formação do biofilme. Coberturas contendo cadexômero de iodo têm apresentado ação contra bactérias planctônicas e biofilmes bacterianos de S. aureus e P. aeureginosa.',
      },
      {
        title: 'Contraindicação',
        description:
          'Tecidos necróticos secos ou em doentes com sensibilidade conhecida ao iodo ou a qualquer um dos seus componentes. Crianças, mulheres grávidas ou que estejam amamentando, pessoas que sofram de insuficiência renal ou com distúrbios da tiroide (ex: tiroidite de Hashimoto ou bócio nodular não-tóxico).',
      },
      {
        title: 'Frequência de troca',
        description:
          'A cada duas a três vezes por semana. Trocas diárias podem ser necessárias caso a lesão libere grandes quantidades de exsudato.',
      },
    ],
  },
  {
    title: 'Tela de silicone:',
    srcImage: silicone,
    children: [
      {
        title: 'Composição',
        description: 'Tela de poliamida com silicone suave, transparente.',
      },
      {
        title: 'Mecanismo de ação:',
        description: [
          '- Não aderente ao leito da ferida',
          '- Não provoca dor a remoção',
          '- Proporciona meio úmido',
          '- Possibilita menor número de trocas de curativos',
          '- Adapta-se aos contornos do corpo',
        ],
      },
      {
        title: 'Indicação',
        description: [
          '- Epidermolise bolhosa',
          '- Lesão por fricção',
          '- Úlceras planas de diversas etiologias',
          '- Áreas doadoras de enxerto cutâneo',
          '- Áreas receptoras de enxerto cutâneo',
        ],
      },
      {
        title: 'Contraindicação',
        description: [
          '- Feridas cavitárias',
          '- Feridas infectadas',
          '- Feridas com grande quantidade de exsudato',
          '- Áreas doadoras de enxerto cutâneo',
          '- Áreas receptoras de enxerto cutâneo',
        ],
      },
      {
        title: 'Frequência de troca:',
        description: 'Pode permanecer por até 14 dias no leito da lesão.',
      },
    ],
  },
  {
    title: 'Tela de acetato impregnada com soluções (cobertura não-aderente):',
    srcImage: solucoes,
    children: [
      {
        title: 'Composição',
        description: [
          '- Compressa estéril, não aderente, constituída por um rolo ou cartela individual de malha de acetado de celulose (rayon)',
          '- Impregnada com soluções como: emulsão de petrolatum, parafina, ácidos graxos essenciais (AGE), óleo de melaleuca, prata.',
          '- Pode vir com interface de silico',
        ],
      },
      {
        title: 'Indicação',
        description:
          'Lesões na qual se objetiva evitar trauma no leito e preservar o tecido viável como queimaduras superficiais; úlceras; áreas doadoras e receptoras de enxerto; arasões; lacerações;',
      },
      {
        title: 'Benefícios:',
        description: [
          '- Mantém o meio úmido',
          '- Não adere ao leito da ferida',
          '- Promove o equilíbrio da umidade da lesão',
          '- Permite que o exsudato seja absorvido pelo curativo secundário',
        ],
      },
      {
        title: 'Contraindicação',
        description: [
          '- Feridas com tecido desvitalizado ou inviável',
          '- Feridas infectadas',
          '- Pacientes com hipersensibilidade a hidrocarbonetos saturados derivados de petróleo, pois pode causar irritação e reações granulomatosas',
        ],
      },
      {
        title: 'Frequência de troca:',
        description:
          'De acordo com o produto associado. Recomenda-se troca a cada 72 horas e/ou de acordo com a saturação do curativo secundário e a possível aderência da cobertura ao leito da lesão.',
      },
    ],
  },
  {
    title: 'Hidrocoloide/Placa:',
    srcImage: hidrocoloide,
    children: [
      {
        title: 'Composição',
        description: [
          '- Camada externa de poliuretano',
          '- Camada interna composta por gelatina pectina e carboximetilcelulose sódica',
        ],
      },
      {
        title: 'Indicação',
        description: [
          'Tratamento de feridas abertas não infectadas com leve a moderada exsudação',
          '- Feridas abertas não infectadas',
          '- Prevenção de lesões por pressao',
          '- Proteção da área perilesional e para efluentes de estomas',
        ],
      },
      {
        title: 'Benefícios:',
        description: [
          '- Mantém o meio úmido',
          '- Promove o desbridamento autolítico',
          '- Reduz o atrito e o microclima na prevenção de lesão por pressão',
          '- Estimula a angiogênese',
        ],
      },
      {
        title: 'Contraindicação',
        description: [
          '- Feridas muito exsudativas',
          '- Feridas infectadas',
          '- Feridas cavitárias',
          '- Feridas com tecido desvitalizado ou necrose',
          '- Queimaduras de terceiro grau',
          '- Pacientes com sensibilidade aos componentes do produto',
        ],
      },
      {
        title: 'Frequência de troca:',
        description: 'A cada sete dias e/ou sempre que houver saturação ou deslocar',
      },
    ],
  },
];
