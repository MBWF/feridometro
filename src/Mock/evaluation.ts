import coagulacao from '../assets/LetraT_necrose-de-coagulacao.jpg';
import liquefacao from '../assets/LETRAT_Necrose-de-liquefaçao.jpg';
import gangrenosa from '../assets/LETRAT_NECROSE-GANGRENOSA.jpg';
import epitelizacao from '../assets/Tecido-de-epitelizacao.jpg';
import granulacao from '../assets/Tecido-de-granulação.jpg';

export const evaluation = [
  {
    srcImage: 'https://imgcentauro-a.akamaihd.net/98x98/97029451.jpg',
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
    srcImage: 'https://imgcentauro-a.akamaihd.net/98x98/97029451.jpg',
    title: 'Tecidos desvitelizados ou inviável',
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
