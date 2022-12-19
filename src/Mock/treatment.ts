export const treatmentMock = [
  {
    title: 'Objetivos de desbridamento',
    items: [
      'Remover tecidos inviáveis',
      'Reduzir a carga bacteriana',
      'Preservar tecidos viáveis',
      'Prepararo o leito da lesão para cicatrização',
    ],
    color: 'blue.300',
    children: [],
  },
  {
    title: 'Tipos de Desbridamento',
    items: [],
    color: 'orange.400',
    children: [
      {
        title: 'Desbridamento Inicial',
        color: 'orange.400',
        description:
          'Consiste na retirada de tecidos inviáveis aderidos ao leito e/ou na área periferida, incluindo o tecido queratinizado, por meio de métodos autolíticos, enzimáticos, biológicos, mecânicos ou instrumentais, abrangendo as bordas da ferida e a pele.',
      },
      {
        title: 'Desbridamento de manutenção',
        color: 'orange.400',
        description:
          'Caracteriza-se pela contínua remoção da carga celular composta por fibroblastos envelhecidos, queratinócitos, materiais de matriz celular, não visíveis a olho nu e que necessitam ser permanentemente removidos para viabilizar a cicatrização. desbridamento de manutenção deve ser realizado, mesmo em face de um leito aparentemente saudável, se a ferida não está mostrando evidência de cicatrização.',
      },
    ],
  },
  {
    title: 'Métodos de desbridamento',
    items: [],
    color: 'green.400',
    children: [
      {
        title: 'Instrumental',
        color: 'orange.400',
        description:
          'É realizado com material cortante, como lâminas de bisturi e tesouras. Procedimento realizado exclusivamente por médicos e enfermeiros, exige dos profissionais competência, conhecimento das estruturas anatômicas e dos riscos, segurança e habilidade.',
      },
      {
        title: 'Contraindicação: ',
        color: 'orange.400',
        description: 'Insuficiência arterial e as coagulopatias.',
      },
      {
        title: 'Riscos: ',
        color: 'orange.400',
        description: 'Hemorragia, lesão de tendões e ossos',
      },
    ],
  },
  {
    title: 'Algoritmo',
    items: [],
    color: 'purple.400',
    children: [
      {
        title: 'Esfacelo seco aderido',
        color: 'orange.400',
        description: '',
        items: [
          'Desbridamento inicial: Fornecer umidade, desprender o esfacelo aderido ao leito.',
          'Coberturas indicadas: Hidrogel / exógenas',
        ],
      },
      {
        title: 'Esfacelo úmido',
        color: 'orange.400',
        description: '',
        items: [
          'Desbridamento Inicial: Controlar a umidade, remover esfacelo',
          'Coberturas recomendadas: Fibras hidro-desbridantes/ fibras poliabsorventes, hidrofibras, espumas e iodo cadexômero',
          'Desbridamento de manutenção: Controlar a umidade e remover tecidos inviáveis presentes no leito e na área periferida.',
        ],
      },
      {
        title: 'Necrose de coagulação ou escara',
        color: 'orange.400',
        description: '',
        items: [
          'Desbridamento Inicial: Remover o tecido necrótico seco e aderido ao leito da ferida.',
          'Coberturas recomendadas: Hidrogel, enzimas exógenas e instrumental cortante.',
          'Desbridamento de manutenção: Controlar a umidade e remover tecidos inviáveis presentes no leito e na área periferida',
        ],
      },
      {
        title: 'Hiperqueratose',
        color: 'orange.400',
        description: '',
        items: [
          'Objetivo: Manter a pele saudável.',
          'Medidas profiláticas: Umectação diária.',
          'Tecnologia: Retirar com delicadeza o tecido descamativo, após aplicação de creme emoliente.',
        ],
      },
      {
        title: 'Hiperqueratose periferida neuropática',
        color: 'orange.400',
        description: '',
        items: [
          'Desbridamento instrumental: Após aplicação de solução emoliente.',
          'Medidas profiláticas: Umectação diária.',
          'Tecnologia: Retirar com delicadeza o tecido descamativo, após aplicação de creme emoliente.',
        ],
      },
      {
        title: 'Tecido de granulação',
        color: 'orange.400',
        description: '',
        items: [
          'Objetivo: Manutenção do meio úmido.',
          'Coberturas recomendadas: Tela de silicone, Tela de acetato impregnada com soluções (AGE ou Rayon), AGE, Hidrogel(com ou sem alginato)',
          'Tecnologia: Retirar com delicadeza o tecido descamativo, após aplicação de creme emoliente.',
        ],
      },
      {
        title: 'Tecido de epitelização',
        color: 'orange.400',
        description: '',
        items: [
          'Objetivo: Proteção dos novos tecidos.',
          'Coberturas recomendadas: Hidrocoloide, AGE',
        ],
      },
    ],
  },
];

export const i_treatmentMock = [
  {
    color: 'red.400',
    title: 'Diagnóstico de biofilme',
    children: [],
    items: [
      'A biópsia do tecido é considerada padrão ouro para identificação do biofilme em feridas.',
      'O teste de cultura microbiológica não deve ser utilizado para diagnóstico de presença de biofilme, pois é apenas indicador de bactérias planctônicas presentes no exsudato/superfície da lesão. ',
    ],
  },
  {
    color: 'blue.600',
    title: 'Tratamento do biofilme',
    description:
      'O desbridamento regular, acompanhado de estratégias de não reaparecimento de biofilme, incluindo a utilização soluções antissépticas e coberturas antimicrobianas para uso tópico:',
    items: [
      'Polihexanida (PHMB)',
      'Coberturas com Prata',
      'Cadexômero de Iodo',
      'Cloreto de dialquil carbamoil (DACC)',
      'EDTA (ácido etilenodiamino tetra-acético)',
      'Terapia por pressão negativa',
      'Ozonioterapia',
      'Hidrocirurgia',
      'Não são recomendadas o uso de soluções altamente citotóxicas, como as que contêm iodopovidona e peróxido de hidrogénio para limpeza do leito da ferida e pele perilesional.',
      'O uso comum de irrigações com soro fisiológico ou água não removerá o biofilme, pois são ineficazes na redução da carga bacteriana.',
    ],
    children: [],
  },
];

export const m_treatmentMock = [
  {
    color: 'red.400',
    title: 'A ferida está muito seca?',
    children: [],
    items: ['AGE', 'Cobertura não aderente estéril', 'Hidrogel', 'Acido hialurônico'],
  },
  {
    color: 'blue.600',
    title: 'A ferida está muito úmida?',
    description: '',
    items: [
      'Alginato de Cálcio',
      'Espumas/Hidrofibras',
      'DACC',
      'Terapia compreensiva',
      'Terapia por pressão negativa',
    ],
    children: [],
  },
];

export const e_treatmentMock = [
  {
    color: 'red.400',
    title: 'Tratamentos específicos podem ser:',
    children: [],
    items: [
      'Desbridamento perilesão',
      'Laserterapia de baixa potência',
      'Creme barreira',
    ],
  },
];

export const r_treatmentMock = [
  {
    color: 'red.400',
    title: 'Algumas formas de tratamento:',
    children: [],
    items: [
      'Laserterapia de baixa potência',
      'Terapia por pressão negativa',
      'Oxigenoterapia hiperbárica',
      'Plasma Rico em Plaquetas (PRP)',
      'Terapia com células-tronco',
      'Enxerto autólogo de pele',
      'Membrana amniótica',
    ],
  },
];

export const s_treatmentMock = [
  {
    color: 'blue.400',
    title: 'Fatores familiares: ',
    children: [],
    items: ['Envolva paciente e família durante todo o plano de cuidados.'],
  },
  {
    color: 'red.400',
    title: 'Encaminhe o paciente para acompanhamento por equipe multiprofissional: ',
    children: [],
    items: [
      'Nutricionista, fisioterapeuta, cirurgião vascular, endocrinologista, dermatologista, psicológico, cirurgião plástico',
    ],
  },
];
