import coagulacao from '../assets/LetraT_necrose-de-coagulacao.jpg';
import liquefacao from '../assets/LETRAT_Necrose-de-liquefaçao.jpg';
import gangrenosa from '../assets/LETRAT_NECROSE-GANGRENOSA.jpg';
import epitelizacao from '../assets/Tecido-de-epitelizacao.jpg';
import granulacao from '../assets/Tecido-de-granulação.jpg';

export interface T_evaluationChildrenProps {
  srcImage: string;
  title: string;
  description: string;
}

export interface T_evaluationProps {
  color: string;
  title: string;
  children: T_evaluationChildrenProps[];
  description?: string;
  points?: string[];
}

export const t_evaluationTitle =
  'AVALIE OS TIPOS DE TECIDOS PRESENTES NO LEITO DA FERIDA';
export const i_evaluationTitle = '';
export const m_evaluationTitle =
  'Avalie a características do exsudato: quantidade, cor, odor, possíveis constituintes e aparência.';
export const e_evaluationTitle =
  '- O que você pode fazer para acelerar o avanço da borda da ferida?';
export const r_evaluationTitle =
  'Avalie a necessidade de acelerar o fechamento da ferida usando terapias adjuvantes';
export const s_evaluationTitle = '';

export const t_evaluation: T_evaluationProps[] = [
  {
    color: 'orange.400',
    title: 'Tecidos Viáveis',
    children: [
      {
        srcImage: epitelizacao,
        title: 'Epitelização',
        description:
          'Tecido recém-cicatrizado, com coloração rosa clara ou avermelhada, brilhante, aparece no processo final da cicatrização',
      },
      {
        srcImage: granulacao,
        title: 'Granulação',
        description:
          'É composto por tecido conjuntivo e capilares recém- formados. Aparência rosada, úmida, granular (aspecto de framboesa). É um tecido vital para a cicatrização. É formado por fibroblastos e novos vasos sanguíneos. É indolor mas sangrante ao toque. Deve ser preservado durante a limpeza da lesão.',
      },
    ],
  },
  {
    color: 'blue.600',
    title: 'Tecidos desvitelizados ou inviável',
    description:
      'Tecido morto, que perdeu suas propriedades físicas e atividade biológica, atrasa a cicatrização, proporciona meio adequado para crescimento de microorganismos, prolonga a resposta inflamatória e cria barreira para formação do tecido de granulação e epitelização. Além de ser fator predisponente para formação de biofilmes.',
    children: [
      {
        srcImage: liquefacao,
        title: 'Necrose de liquefação ou esfacelo:',
        description:
          'Tecido necrótico/desvitalizado, úmido, avascular, amolecido; pode ser branco, amarelado, acastanhado ou verde; formado por bactérias, fibrina, elastina, colágeno e leucócitos, microorganismos e materiais proteicos. Pode estar frouxa ou firmemente aderido ao leito.',
      },
      {
        srcImage: coagulacao,
        title: 'Necrose de coagulação ou Escara:',
        description:
          'Tecido necrótico, preto ou marrom, pode estar frouxa ou firmemente aderido ao leito; pode apresentar consistência sólida ou amolecida.',
      },
      {
        srcImage: gangrenosa,
        title: 'Necrose gangrenosa:',
        description:
          'Resulta da necrose de coagulação. Afeta extremidades inferiores e tem como fatores a isquemia e a ação de microrganismos. Pode ser úmida ou seca, com forte odor ocasionado pela formação de bolhas gasosas. Não deve ser desbridada!! Requer avaliação de um cirurgião vascular.',
      },
    ],
  },
];

export const i_evaluation: T_evaluationProps[] = [
  {
    color: 'blue.600',
    title: 'Sintomas de inflamação:',
    children: [],
    points: ['Dor', 'Calor', 'Rubor', 'Edema'],
  },
  {
    color: 'orange.600',
    title: 'O que é BIOFILME?',
    description:
      'O biofilme é definido como um arranjo social de células microbianas envoltas por matriz de substâncias poliméricas extracelulares organizadas por meio do quorum sensing, formado pelo processo de adesão bacteriana. Podem ser formados por populações desenvolvidas a partir de uma única ou de múltiplas espécies de microorganismos, como fungos, protozoários e bactérias. O biofilme pode formar-se em poucas horas e pode atingir a maturidade em 48–72 horas.',
    children: [],
  },
  {
    color: 'orange.600',
    title: 'Algoritmo de diagnóstico da presença de biofilme em feridas',
    children: [],
    points: [
      'Falha terapêutica (tópica e sistêmica)',
      'Atraso na cicatrização Presença de tecido de granulação friável ou hiper granulação',
      'Aumento do tecido necrótico',
      'Odor fétido',
      'Aumento do exsudato e piora do seu aspecto',
      'Sinais de infecção > 30 dias',
      'Inflamação',
      'Material gelatinoso na superfície da ferida que se forma rapidamente apesar da limpeza/desbridamento, exsudato em grandes volumes',
      'Eritema de baixo grau',
    ],
  },
];

export const m_evaluation: T_evaluationProps[] = [
  {
    color: 'orange.200',
    title: 'Tipos de exsudato:',
    children: [
      {
        srcImage: '',
        title: 'Seroso',
        description:
          'Plasma claro, translúcido, fluido, sem sinais de infecção. Caracteriza-se pelo líquido de baixo conteúdo protéico.',
      },
      {
        srcImage: '',
        title: 'Sanguinolento ou hemático',
        description:
          'Cor de sangue vivo, avermelhado. Indica dano de vasos sanguíneos. Pode sinalizar infecção crônica, se presente em moderada a grande quantidade.',
      },
      {
        srcImage: '',
        title: 'Serossanguinolento',
        description:
          'Rosado ou avermelhado, fluído, típico da fase inflamatória e proliferativa.',
      },
      {
        srcImage: '',
        title: 'Purulento',
        description:
          'Amarelado, acastanhado ou esverdeado, opaco e denso. Composto por proteínas, leucócitos e restos celulares. Sinaliza infecção e pode estar associado a odor fétido.',
      },
    ],
  },
  {
    color: 'blue.400',
    title: 'Quantidade de exsudato:',
    children: [],
    points: ['Ausente', 'Pequena', 'Média', 'Grande'],
  },
  {
    color: 'red.400',
    title: 'ODOR:',
    children: [],
    points: ['Ausente', 'Característico', 'Fétido', 'Pútrido'],
  },
];

export const e_evaluation: T_evaluationProps[] = [
  {
    color: 'orange.200',
    title: 'Fibrose',
    description:
      'A borda se apresenta rígida, com excessiva proliferação fibrosa, semelhante ao tecido cicatricial, fortemente aderida ao leito da lesão, com coloração amarela ou rósea.',
    children: [],
  },
  {
    color: 'red.400',
    title: 'Macerada',
    description:
      'Tecido esbranquiçado que surge nas bordas das lesões, pregas cutâneas e fístulas, devido excesso de umidade.',
    children: [],
  },
  {
    color: 'blue.400',
    title: 'Hiperqueratose',
    description:
      'Ocorre sobreposição da camada córnea da epiderme, formando um tecido caloso, bem espesso, endurecido, de cor amarelada',
    children: [],
  },
  {
    color: 'green.400',
    title: 'Epibolia ou borda enrolada',
    description: 'Acontece quando as bordas de uma lesão se fecham prematuramente.',
    children: [],
  },
  {
    color: 'yellow.400',
    title: 'Descolamento ou solapamento',
    description:
      'É o descolamento do tecido subjacente da pele íntegra devido à destruição tecidual. Ocorre quando as bordas não estão aderidas ao leito.',
    children: [],
  },
];

export const r_evaluation: T_evaluationProps[] = [
  {
    color: 'orange.200',
    title: 'O que pode ser feito para estimular a regeneração e/ou reparo da ferida?',
    children: [],
    points: ['Determinar a terapia apropriada.'],
  },
];

export const s_evaluation: T_evaluationProps[] = [
  {
    color: 'blue.600',
    title: 'Informações importantes de avaliação:',
    children: [],
    points: [
      'Idade',
      'Queixa',
      'Do',
      'Exame físico complet',
      'Estado neurológic',
      'Mobilidad',
      'Condições vasculare',
      'Estado nutriciona',
      'Patologias associada',
      'Medicações em us',
      'Hábitos de vid',
      'Exames laboratoriai',
      'Qualidade de vid',
      'Adesão ao tratament',
      'Conhecimento do paciente, familiares e cuidadores sobre a etiologia e os cuidados com a lesão.',
      'Necessidade de encaminhamento do paciente para avaliação interprofissional',
    ],
  },
];
