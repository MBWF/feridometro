import Colagenase from 'asserts/tratamentos/Colagenase.jpg';

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
    color: 'orange.400',
    children: [
      {
        title: 'Instrumental',
        color: 'orange.400',
        description:
          'É realizado com material cortante, como lâminas de bisturi e tesouras. Procedimento realizado exclusivamente por médicos e enfermeiros, exige dos profissionais competência, conhecimento das estruturas anatômicas e dos riscos, segurança e habilidade.',
      },
      {
        title: 'Desbridamento de manutenção',
        color: 'orange.400',
        description:
          'Caracteriza-se pela contínua remoção da carga celular composta por fibroblastos envelhecidos, queratinócitos, materiais de matriz celular, não visíveis a olho nu e que necessitam ser permanentemente removidos para viabilizar a cicatrização. desbridamento de manutenção deve ser realizado, mesmo em face de um leito aparentemente saudável, se a ferida não está mostrando evidência de cicatrização.',
      },
    ],
  },
];
