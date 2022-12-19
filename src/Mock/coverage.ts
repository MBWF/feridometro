import AGE from '../assets/tratamentos/AGE.jpg';
import alginatoDeCalcio from '../assets/tratamentos/Alginato de calcio.jpg';
import Colagenase from '../assets/tratamentos/Colagenase.jpg';
import espumas from '../assets/tratamentos/Espumas-de-poliuretano.jpg';
import fibrinosilina from '../assets/tratamentos/Fibrinolisina.jpg';
import hidrocoloide from '../assets/tratamentos/hidrocoloide.jpg';
import Hidrofibras from '../assets/tratamentos/Hidrofibras.jpg';
import solucoes from '../assets/tratamentos/Malha de acetato impregnada com soluções.jpg';
import Papaina from '../assets/tratamentos/Papaina.jpg';
import sulfadiazinaDePrata from '../assets/tratamentos/Sufadiazina de prata.jpg';
import silicone from '../assets/tratamentos/tela de silicone.png';
import Cadexomero from '../assets/tratamentos_infeccao/Cadexomero de iodo.jpg';
import Cloreto from '../assets/tratamentos_infeccao/Cloreto de Diaquil Carmaboil_DACC.jpg';
import CurativoPrata from '../assets/tratamentos_infeccao/CurativoPrata.jpg';
import PHMB from '../assets/tratamentos_infeccao/Foto PHMB.jpg';

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
  {
    title: 'Ácidos Graxos Essenciais (AGE): ',
    srcImage: AGE,
    children: [
      {
        title: 'Composição',
        description: [
          'Óleo de origem vegetal composto pelos ácidos linoleico, linolenico, caprílico, caprico; vitaminaA, E + lectina de soja',
        ],
      },
      {
        title: 'Indicação',
        description: [
          'Queimaduras superficiais',
          'Úlceras de qualquer etiologia com ou sem infeção',
        ],
      },
      {
        title: 'Benefícios:',
        description: [
          'Mantém o meio úmido',
          'Promove o desbridamento autolítico',
          'Acelera o processo de granulação tecidual',
          'Auxilia o desbridamento autolitico',
          'Pode ser utilizado em qualquer fase de cicatrização',
        ],
      },
      {
        title: 'Contraindicação',
        description: [' Hipergranulação em casos de hipersensibilidade'],
      },
      {
        title: 'Frequência de troca:',
        description:
          'Recomenda-se trocar no máximo a cada 24 horas ou sempre que o curativo secundário estiver saturado.',
      },
    ],
  },
  {
    title: 'Alginato de cálcio:',
    srcImage: alginatoDeCalcio,
    children: [
      {
        title: 'Composição',
        description: [
          'Fibras de não tecido, derivado de algas marinhas, composto pelos ácidos gulurônico e manurônico, com íons de cálcio e sódio incorporado às fibras. Pode ser associado a prata.',
        ],
      },
      {
        title: 'Indicação',
        description: [
          'Feridas abertas, com perda de tecido, lesões cavitárias ou profundas, sangrantes, altamente exsudativas, com ou sem infecção.',
        ],
      },
      {
        title: 'Contraindicação',
        description: [
          'Feridas superficiais ou com pouca quantidade de exsudato e lesões por queimaduras.',
        ],
      },
      {
        title: 'Frequência de troca:',
        description:
          'Trocar sempre que estiver saturado; em feridas infectadas a cada 24 horas; feridas limpas e com sangramento a cada 48 ou 72h ou de acordo com a saturação;',
      },
    ],
  },
  {
    title: 'Fibrinosilina: ',
    srcImage: fibrinosilina,
    children: [
      {
        title: 'Composição',
        description: [
          'Emoliente de origem bovina, composto de fibrolisina desoxirribonuclease a 1% de carafenicol.',
        ],
      },
      {
        title: 'Indicação',
        description: ['Desbridamento enzimático'],
      },

      {
        title: 'Contraindicação',
        description: [
          'Feridas com cicatrização por primeira intenção e reação alérgica em pessoas bovinas a substâncias bovinas.',
        ],
      },
      {
        title: 'Frequência de troca:',
        description: 'A cada 24 horas',
      },
    ],
  },
  {
    title: 'Sulfadiazina de prata: ',
    srcImage: sulfadiazinaDePrata,
    children: [
      {
        title: 'Composição',
        description: ['Sulfadiazina de prata a 1% hidrofílico.'],
      },
      {
        title: 'Indicação',
        description: [
          'Prevenção e tratamento de feridas com grande potencial de infecção generalizada (sepse): queimaduras, úlceras venosas, lesões por pressão e feridas cirúrgicas infectadas.',
        ],
      },

      {
        title: 'Contraindicação',
        description: [
          'Mulheres grávidas nos últimos três meses de gestação (tem ação teratogênica), crianças menores de 2 meses de idade e prematuros.',
        ],
      },
      {
        title: 'Frequência de troca:',
        description:
          'No máximo a cada 12 horas ou quando a cobertura secundária estiver saturada.',
      },
    ],
  },
];

export const i_coveragesMock = [
  {
    title: 'Polihexanida (PHMB)',
    srcImage: PHMB,
    children: [
      {
        title: 'Composição',
        description:
          'Solução - Água purificada e polihexanida a 0,1% e/ou 0,2%; Gel 0,1% de Betaina, carboximetilcelulose, Cocoamidopropilbetaína, glicerina e água purificada. Algumas fórmulas também contêm uma substância antimicrobiana e um agente tensioativo.',
      },
      {
        title: 'Indicação',
        description:
          'Limpeza e hidratação de feridas agudas ou crônicas; Desbridamento de crostas e necroses; Remoção de biofilme. Amplo espectro de atividade contra microrganismos sem evidências de resistência.',
      },
      {
        title: 'Contraindicação',
        description:
          'Pessoas com hipersensibilidade a algum componente do produto; uso em cartilagem hialina e queimaduras de 3º grau.',
      },
      {
        title: 'Frequência de troca',
        description:
          'solução troca a cada 24 horas; gel pode permanecer até 72 horas ou quando necessário',
      },
    ],
  },
  {
    title: 'Curativos impregnados com prata',
    srcImage: CurativoPrata,
    children: [
      {
        title: 'Composição',
        description:
          'Espumas ou compressas não-aderentes impregnadas com prata; hidrofibras ou fibras hidrodesbridantes, associação com hidrocolóides e alginato.',
      },
      {
        title: 'Mecanismo de ação',
        description:
          'Controle de bactérias presentes no leito da lesão; age pela liberação da prata em contato com o exsudato; a bactéria tem tropismo pela prata e, ao entrar em contato com a mesma impede de multiplicar-se',
      },
      {
        title: 'Indicação',
        description:
          'Desbridamento de lesões com esfacelos e muito exsudativas; redução da multiplicação bacteriana no leito da ferida',
      },
      {
        title: 'Contraindicação',
        description: 'Feridas secas e em fase de granulação; exposição óssea',
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
    title: 'Cloreto de dialquil carbamoil (DACC)',
    srcImage: Cloreto,
    children: [
      {
        title: 'Composição',
        description:
          'Curativo antimicrobiano composto de tecido acetato impregnado com Cloreto de Dialquil Carbamoil (DACC);',
      },
      {
        title: 'Indicação',
        description:
          'Todos os tipos de feridas exsudativas contaminadas, colonizadas ou infectadas, independentemente da sua etiologia. É considerado um antimicrobiano passivo com atividade antibiofilme, visto que atrai a carga microbiana do leito da lesão para o curativo.',
      },
      {
        title: 'Contraindicação',
        description:
          'Não são conhecidas contraindicações específicas até o presente momento',
      },
      {
        title: 'Frequência de troca',
        description:
          'Diariamente ou permanecer no local por até 7 dias em feridas úmidas sob compressão, porém em média ele permanece no local de 1 a 3 dias, devendo ser observado a quantidade de drenagem e saturação do curativo.',
      },
    ],
  },
];

export const m_coveragesMock = [
  {
    title: 'Algumas coberturas possíveis:',
    srcImage: '',
    color: 'red.400',
    children: [],
    items: [
      'AGE',
      'Cobertura não aderente estéril',
      'Hidrogel',
      'Ácido hialurônico',
      'Alginato de cálcio',
      'Espumas/Hidrofibras',
      'DACC',
      'Terapia compressiva',
      'Terapia por pressão negativa',
    ],
  },
  {
    title: 'Ácido Hialurônico 0,2%',
    srcImage: '',
    color: 'blue.600',
    children: [
      {
        title: 'Composição',
        description: 'Creme contendo 2mg de ácido hialurônico (sal sódico) por grama',
      },
      {
        title: 'Indicação',
        description:
          'Acelera a cicatrização e a renovação epitelial do tecido comprometido de feridas abertas de diversas etiologias.',
      },
      {
        title: 'Contraindicação',
        description:
          'Não deve ser utilizado por pacientes com história de alergia a qualquer um dos componentes da fórmula. não possui atividade antibacteriana, não deve ser utilizado isoladamente em feridas infectada',
      },
      {
        title: 'Frequência de troca',
        description: 'Realizar 1 a 3 aplicações tópicas ao dia.',
      },
    ],
  },
  {
    title: 'Alginato de cálcio:',
    srcImage: '',
    color: 'blue.400',
    children: [
      {
        title: 'Composição',
        description: [
          'Fibras de não tecido, derivado de algas marinhas, composto pelos ácidos gulurônico e manurônico, com íons de cálcio e sódio incorporado às fibras. Pode ser associado a prata.',
        ],
      },
      {
        title: 'Indicação',
        description: [
          'Feridas abertas, com perda de tecido, lesões cavitárias ou profundas, sangrantes, altamente exsudativas, com ou sem infecção.',
        ],
      },
      {
        title: 'Contraindicação',
        description: [
          'Feridas superficiais ou com pouca quantidade de exsudato e lesões por queimaduras.',
        ],
      },
      {
        title: 'Frequência de troca:',
        description:
          'Trocar sempre que estiver saturado; em feridas infectadas a cada 24 horas; feridas limpas e com sangramento a cada 48 ou 72h ou de acordo com a saturação;',
      },
    ],
  },
];

export const e_coveragesMock = [
  {
    title: 'Fotobiomodulação (laserterapia):',
    srcImage: '',
    color: 'blue.600',
    children: [
      {
        title: 'Indicação',
        description:
          'Tratamento de úlceras, feridas, deiscências, inflamações, edemas, micose de unha, herpes, pé-diabético e fissuras mamilares.',
      },
      {
        title: 'Contraindicação',
        description:
          'Em casos de tumor maligno localizado ou irradiado; epilepsia; sobre a glândula tireóide; sobre abdome gravídico; para pessoas com elevada hipersensibilidade e em casos de trombose em veia pélvica ou veias profundas das pernas.',
      },
      {
        title: 'Tratamento: ',
        description:
          'O tempo de duração do tratamento e número de sessões irá depender do caso clínico apresentado pelo paciente.',
      },
    ],
  },
  {
    title: 'Terapia de oxigênio hiperbárica:',
    srcImage: '',
    color: 'blue.600',
    children: [
      {
        title: 'Composição',
        description: 'Creme contendo 2mg de ácido hialurônico (sal sódico) por grama',
      },
      {
        title: 'Indicações',
        description:
          'Feridas infectadas, Necrose gangrenosa, Pés-diabéticos, Celulites e abscessos, Úlceras venosas e arteriais',
      },
      {
        title: 'Contraindicação',
        description:
          'Gestação, Pneumotórax não tratado, Durante a administração dos quimioterápicos, Doxorrubicina e Bleomicina, Medicação Sulfamylon',
      },
      {
        title: 'Frequência de troca',
        description:
          'ratamentos agudos podem necessitar de apenas 1 ou 2 sessões, porém  feridas crônicas podem precisar de mais de 30 sessões',
      },
    ],
  },
  {
    title: 'Creme barreira:',
    srcImage: '',
    color: 'green.400',
    children: [
      {
        title: 'Composição',
        description: [
          'Água, Parafina líquida, Petrolato, Cera microcristalina, Oleato de Glicerol, Álcool de Lanolina, Ácido Cítrico, Citrato de Magnésio, Ciclometicone, Glicerina, Metilparabeno, Propilparabeno e Propilenoglicol.',
        ],
      },
      {
        title: 'Mecanismos de ação: ',
        description: [
          'Creme hidrofóbico que oferece proteção contra urina e fezes, ao mesmo tempo em que hidrata a pele. Não possui nenhuma ação terapêutica cicatrizante. Sua ação é puramente mecânica de formação de uma barreira, impedindo o acesso de água no local protegido pelo creme.',
        ],
      },
      {
        title: 'Indicação:',
        description:
          'Hidratação da pele seca ou irritada, causada pelo exsudato oriundo da pele perilesional.',
      },
      {
        title: 'Contraindicação',
        description: ['Não há contraindicações'],
      },
    ],
  },
];

export const r_coveragesMock = [
  {
    title: 'Laserterapia de baixa potencia: ',
    srcImage: '',
    color: 'green.600',
    children: [
      {
        title: 'Mecanismo de ação',
        description:
          'Gera aumento da atividade mitocondrial, com consequente aumento de adenosinatrifosfato (ATP), vasodilatação, síntese proteica, ação antiinflamatória, neoangiogênese, proliferação epitelial e de fibroblastos, síntese e deposição de colágeno, revascularização e contração da ferida.',
      },
      {
        title: 'Indicação',
        description:
          'Feridas agudas (feridas cirúrgicas) em processos de reparação tecidual, tais como traumatismos musculares, articulares, nervosos, ósseos e cutâneos.',
      },
      {
        title: 'Contraindicações: ',
        description:
          'Em casos de tumor maligno localizado ou irradiado; epilepsia; sobre a glândula tireóide; sobre abdome gravídico; para pessoas com elevada hipersensibilidade e em casos de trombose em veia pélvica ou veias profundas das pernas.',
      },
      {
        title: 'Periodicidade do Tratamento: ',
        description:
          'O tempo de duração do tratamento e número de sessões irá depender do caso clínico apresentado pelo paciente. Ainda não existem definições consensuais em relação à dose e ao comprimento de onda mais indicados para o tratamento de lesões.',
      },
    ],
  },
  {
    title: 'Terapia por pressão negativa: ',
    srcImage: '',
    color: 'red.600',
    children: [
      {
        title: 'Mecanismo de ação',
        description:
          'Tratamento não invasivo que promove a cicatrização da ferida por meio de uma pressão subatmosférica entre 50 mmHg e 150 mmHg, localizada e controlada. Estimula a proliferação celular , redução do edema e controle do exsudato.',
      },
      {
        title: 'Indicação',
        description:
          'Feridas infectadas após desbridamento inicial, feridas infectadas em pós-operatório, osteíte e osteomielite. Síndrome compartimental, deiscência abdominal e peritonite, úlceras do pé diabético, lesão por pressão estágio 3 e 4; úlceras venosas; feridas traumáticas; enxerto de pele e retalho miocutâneo',
      },
      {
        title: 'Contraindicações: ',
        description:
          'Feridas oncológicas, osteomielite não tratada ou fístulas não exploradas, lesões com tecido necrótico, distúrbios de Coagulação- sangramentos agudos moderados a severos na região da ferida.',
      },
      {
        title: 'Periodicidade do Tratamento: ',
        description:
          'Troca dos curativos é de aproximadamente 48h e a duração da terapia deverá ser avaliada caso a caso.',
      },
    ],
  },
  {
    title: 'Oxigenoterapia hiperbárica: ',
    srcImage: '',
    color: 'blue.600',
    children: [
      {
        title: 'Mecanismo de ação',
        description:
          'Gera aumento da atividade mitocondrial, com consequente aumento de adenosinatrifosfato (ATP), vasodilatação, síntese proteica, ação antiinflamatória, neoangiogênese, proliferação epitelial e de fibroblastos, síntese e deposição de colágeno, revascularização e contração da ferida.',
      },
      {
        title: 'Indicação',
        description:
          'Feridas de difícil cicatrização; Feridas infectadas; Embolia gasosa; Doença descompressiva; Embolia traumática pelo ar; Gangrena gasosa; Síndrome de Fournier; Outras infecções necrotizantes de partes moles: celulites, fasceítes e miosites; Isquemias traumáticas agudas: lesão por esmagamento, síndrome compartimental, reimplante de extremidadeamputada e outros; Osteomielite.',
      },
      {
        title: 'Contraindicações: ',
        description:
          'Gestação; pneumotórax não tratado e durante a administração dos quimioterápicos Doxorrubicina e Bleomicina e a medicação Sulfamylon.',
      },
      {
        title: 'Periodicidade do Tratamento: ',
        description:
          'Tratamentos agudos podem necessitar de apenas 1 ou 2 sessões, porém feridas crônicas podem precisar de mais de 30 sessões.',
      },
    ],
  },
];
