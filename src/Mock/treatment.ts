import alginato from '../assets/alginato.png';
import esfaceloseco from '../assets/esfaceloseco.jpg';
import esfaceloumido from '../assets/esfaceloumido.jpg';
import fibrinolisina from '../assets/fibrinolisina.png';
import HIALURONICO from '../assets/HIALURONICO.jpg';
import Hiperqueratose from '../assets/Hiperqueratose.jpg';
import Hiperqueratoseperiferidaneuropatica from '../assets/Hiperqueratoseperiferidaneuropatica.jpg';
import larvaIcon from '../assets/larvaIcon.png';
import mecanico from '../assets/mecanico.jpg';
import papaina from '../assets/papaina.jpg';
import Tecidodeepitelizacao from '../assets/Tecidodeepitelizacao.jpg';

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
        title: 'Instrumental Conservador',
        color: 'brown',
        description:
          'É realizado com material cortante, como lâminas de bisturi e tesouras. Procedimento realizado exclusivamente por médicos e enfermeiros, exige dos profissionais competência, conhecimento das estruturas anatômicas e dos riscos, segurança e habilidade.',
      },
      {
        title: 'Mecânico',
        img: mecanico,
        color: 'red.400',
        description:
          'Método não seletivo, pois retira também o tecido viável. Pode ser realizado com a utilização das seguintes técnicas:',
        child: [
          'Fricção: realizada com gazes ou esponjas umedecidas em soluções de limpeza;',
          'Úmido-seco: consiste em cobrir a ferida com gaze seca, aguardar que esta fique aderida ao leito para retirá-la;',
          'Irrigação: realizada com soro morno em jato. Hidroterapia: realizada em tanques com turbilhonamento.',
        ],
      },
      {
        title: 'Autolítico: ',
        color: 'green.400',
        img: fibrinolisina,
        description:
          'Desbridamento natural, promovido pelo próprio organismo por meio da ação de enzimas endógenas e atividade macrofágica, favorecendo a degradação dos tecidos inviáveis. Pode ser realizado por curativos que promovam o meio úmido no leito da ferida. É um método de desbridamento mais lento e indicado para todos os tipos de necrose. As vantagens desse tipo de desbridamento são: fácil realização, seletivo e pouco doloroso',
        child: [
          'Coberturas: Ácidos graxos essenciais, Hidrogéis, Hidrocolóides, Hidrofibra, Iodo Cadexômero, Fibras hidrodesbridantes, Espumas, Hidrofibras, Coberturas antiaderentes',
          'Contraindicação: Não deve ser utilizado em feridas infectadas. Pode levar ao maceramento da lesão.',
        ],
      },
      {
        title: 'Enzimático:  ',
        color: 'red',
        img: papaina,
        description:
          'Escolha de enzimas exógenas para aplicação tópica baseada no tipo de tecido presente e pH da pele. Produtos:',
        child: ['Colagenase, (pH 6 a 8), fibrinolisina (pH 7 a 8), Papaína (pH 3 a 12)'],
      },
      {
        title: 'Biológico ou larval:  ',
        color: 'yellow',
        img: larvaIcon,
        description:
          'Conhecido como terapia larval, consiste na aplicação de larvas de moscas esterilizadas das espécies Lucilia sericata (mosca verde), Phaenicia sericata, Phormia regina, Lucila curpina e Chrysomya megacephala no leito da ferida. Essas larvas potentes que secretam enzimas proteolíticas que digerem o tecido necrótico para ingeri-lo e depois eliminá-lo, respeitando o tecido não danificado. A terapia requer um tempo prolongado para o desbridamento e exige a disponibilidade das larvas.',
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
        img: esfaceloseco,
        items: [
          'Desbridamento inicial: Fornecer umidade, desprender o esfacelo aderido ao leito.',
          'Coberturas indicadas: Hidrogel / exógenas',
        ],
      },
      {
        title: 'Esfacelo úmido',
        color: 'orange.400',
        description: '',
        img: esfaceloumido,
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
        img: Hiperqueratose,
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
        img: Hiperqueratoseperiferidaneuropatica,
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
        img: Tecidodeepitelizacao,
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
        img: Tecidodeepitelizacao,
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
    children: [
      {
        title: 'Cobertura não aderente estéril',
        color: 'orange.400',
        description: '',
        img: '',
        child: [
          'Composição: acetato de celulose ou polietileno; algumas contém soluções como: petrolatum, ácidos graxos essenciais (AGE), óleo de melaleuca, prata, outras são siliconizadas, vaselinadas ou parafinadas. Pode vir com interface de silicone suave de dupla face',
          'Indicação: proteger os tecidos do leito das feridas; baixa aderência ao leito da ferida, serve como camada de contato e permite transferência do exsudato para o curativo secundário. Pode ser removido com facilidade, sem provocar trauma e com o mínimo de dor. Pode ser usado em queimaduras superficiais de 2º grau, epidermólise bolhosa, lesão por fricção, feridas com formação de tecido de granulação, áreas doadoras e receptoras de enxertos dermo-cutâneos',
          'Contraindicação: feridas cavitárias, infectadas ou com grande quantidade  exsudato. Não deve ser utilizado por pacientes com história de alergia a qualquer um dos componentes da fórmula',
        ],
      },
      {
        title: 'Curativo úmido com solução de ringer simples',
        color: 'orange.400',
        description: '',
        img: '',
        child: [
          'Composição: poliacrilato superabsorvente integrado a fibras de celulose, ativado com solução de Ringer ligado à polihexametileno biguanida (PHMB). Coberto por uma malha de polipropileno e tiras de silicone.',
          'Ação: promove uma liberação sustentada de ringer no leito da ferida, interação simultânea de absorção e hidratação contínua, absorção de exsudato. Tratamento úmido de feridas, desbridamento autolítico. Desativa as metaloproteases (MMPs), que dificultam a cicatrização, possibilitando assim a reativação do processo cicatricial',
          'Indicação: feridas de qualquer etiologia secas ou com exsudato abundante.',
          'Contraindicação: hipersensibilidade a um dos seus componentes',
          'Periodicidade de troca: liberação sustentada por até 72 horas',
        ],
      },
    ],
    items: ['AGE', 'Hidrogel', 'Ácido Hialurônico'],
  },
  {
    color: 'blue.600',
    title: 'A ferida está muito úmida?',
    description: '',
    items: [
      'AGE',
      'Cadexômero iodo',
      'Espuma/hidropolímeros',
      'Cobertura com colágeno e alginato',
      'Curativo úmido com solução de ringer simples',
      'Fibra gelificante',
      'Polímero superabsorvente',
      'Terapia por pressão negativa',
    ],
    children: [],
  },
  {
    title: 'Hidrofibra',
    color: 'orange.400',
    description: '',
    img: '',
    items: [
      ' Composição: Curativo absorvente composto por fibras de carboximetilcelulose sódica com ou sem prata iônica',
      ' Indicação: Feridas com exsudado moderado a alto, feridas cavitárias. Desbridamento autolítico, induz hemostasia, possui alta capacidade de absorção de exsudato e sua retirada é atraumática preservando o tecido vitalizado',
      ' Contraindicação: Feridas com pouca exsudação e uso limitado em feridas superficiais. Feridas com necrose seca ou tecido inviável',
      ' Periodicidade de Troca: Trocar curativo secundário quando saturado ou em até 24 horas, a placa de hidrofibra poderá permanecer na ferida por até 7 dias',
    ],
  },
  {
    title: 'Ácido Hialurônico 0,2%',
    img: HIALURONICO,
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
    img: alginato,
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

export const e_treatmentMock = [
  {
    color: 'red.400',
    title: 'Tratamentos específicos podem ser:',
    children: [
      {
        title: 'Laserterapia de baixa potência',
        color: 'orange.400',
        description: '',
        img: '',
        child: [
          'Ação: gera aumento da atividade mitocondrial, com consequente aumento de adenosinatrifosfato (ATP), vasodilatação, síntese proteica, ação antiinflamatória, neoangiogênese, proliferação epitelial e de fibroblastos, síntese e deposição de colágeno, revascularização e contração da ferida.',
          'Indicação: feridas agudas (feridas cirúrgicas) em processos de reparação tecidual, tais como traumatismos musculares, articulares, nervosos, ósseos e cutâneos, fissuras mamilares.',
          'Contraindicação: em casos de tumor maligno localizado ou irradiado; epilepsia; sobre a glândula tireóide; sobre abdome gravídico; para pessoas com elevada hipersensibilidade e em casos de trombose em veia pélvica ou veias profundas das pernas.',
          'Periodicidade de troca: O tempo de duração do tratamento e número de sessões irá depender do caso clínico apresentado pelo paciente. Ainda não existem definições consensuais em relação à dose e ao comprimento de onda mais indicados para o tratamento de lesões',
        ],
      },
      {
        title: 'Creme barreira',
        color: 'green.400',
        description: '',
        img: '',
        child: [
          'Composição: Água, Parafina líquida, Petrolato, Cera microcristalina, Oleato de Glicerol, Álcool de Lanolina, Ácido Cítrico, Citrato de Magnésio, Ciclometicone, Glicerina, Metilparabeno, Propilparabeno e Propilenoglicol.',
          'Mecanismos de ação: Creme hidrofóbico que oferece proteção contra urina e fezes, ao mesmo tempo em que hidrata a pele. Não possui nenhuma ação terapêutica cicatrizante. Sua ação é puramente mecânica de formação de uma barreira, impedindo o acesso de água no local protegido pelo creme.',
          'Indicação: Hidratação da pele seca ou irritada, causada pelo exsudato oriundo da pele perilesional.',
          'Contraindicação: Não há contraindicações',
        ],
      },
    ],
    items: ['Desbridamento perilesão'],
  },
];

export const r_treatmentMock = [
  {
    color: 'red.400',
    title: 'TERAPIAS AVANÇADAS NO TRATAMENTO DE FERIDAS: ',
    children: [
      {
        title: 'Laserterapia de baixa potência',
        color: 'orange.400',
        description: '',
        img: '',
        child: [
          'Ação: gera aumento da atividade mitocondrial, com consequente aumento de adenosinatrifosfato (ATP), vasodilatação, síntese proteica, ação antiinflamatória, neoangiogênese, proliferação epitelial e de fibroblastos, síntese e deposição de colágeno, revascularização e contração da ferida.',
          'Indicação: feridas agudas (feridas cirúrgicas) em processos de reparação tecidual, tais como traumatismos musculares, articulares, nervosos, ósseos e cutâneos, fissuras mamilares.',
          'Contraindicação: em casos de tumor maligno localizado ou irradiado; epilepsia; sobre a glândula tireóide; sobre abdome gravídico; para pessoas com elevada hipersensibilidade e em casos de trombose em veia pélvica ou veias profundas das pernas.',
          'Periodicidade de troca: O tempo de duração do tratamento e número de sessões irá depender do caso clínico apresentado pelo paciente. Ainda não existem definições consensuais em relação à dose e ao comprimento de onda mais indicados para o tratamento de lesões',
        ],
      },
      {
        title: 'Terapia por pressão negativa',
        color: 'orange.400',
        description: '',
        img: '',
        child: [
          'Composição: fonte de vácuo (sistemas de terapia a vácuo); reservatório para drenagem de fluídos; Kits de espumas de poliuretano; filme transparente;',
          'Indicações: Redução do edema e controle de exsudato; feridas complexas: úlceras por pressão, feridas traumáticas, feridas cirúrgicas (deiscências), queimaduras, feridas necrotizantes, feridas diabéticas, úlceras venosas; enxertos de pele: para otimizar a integração do enxerto ao leito; abdome aberto; instilação de soluções: em feridas contaminadas ou infectadas',
          'Contraindicações: Fístulas ativa; tecido necrosado; osteomielite (sem tratamento); Artérias, veias, órgãos ou nervos expostos',
          'Periodicidade de troca: De acordo com o fabricante. Recomendase a troca a cada 48h e a duração da terapia deve ser avaliada caso a caso. Normalmente utiliza-se de 50 a 125 mmHg de pressão negativa, continuamente ou em ciclos',
        ],
      },
      {
        title: 'Oxigenoterapia hiperbárica',
        color: 'orange.400',
        description: '',
        img: '',
        child: [
          'Ação: é uma modalidade terapêutica na qual o paciente respira oxigênio puro (100%), enquanto é submetido a uma pressão 2 a 3 vezes a pressão atmosférica ao nível do mar, no interior de uma câmara hiperbárica. Ela provoca um aumento na quantidade de oxigênio transportado pelo sangue, na ordem de 20 vezes o volume que circula em indivíduos que estão respirando ar ao nível do mar.',
          'Indicação: feridas de difícil cicatrização; Feridas infectadas; Embolia gasosa; Doença descompressiva; Embolia traumática pelo ar; Gangrena gasosa; Síndrome de Fournier; Outras infecções necrotizantes de partes moles: celulites, fasceítes e miosites; Isquemias traumáticas agudas: lesão por esmagamento, síndrome compartimental, reimplante de extremidade amputada e outros; Osteomielite',
          'Contraindicação: gestação; pneumotórax não tratado e durante a administração dos quimioterápicos Doxorrubicina e Bleomicina e a medicação Sulfamylon',
          'Periodicidade do tratamento: Tratamentos agudos podem necessitar de apenas 1 ou 2 sessões, porém feridas crônicas podem precisar de mais de 30 sessões.',
        ],
      },
      {
        title: 'Ozonioterapia',
        color: 'orange.400',
        description: '',
        img: '',
        child: [
          'Definição: técnica terapêutica que utiliza a molécula de ozônio como principal componente, sua aplicação consiste em uma mistura de oxigênio medicinal com ozônio, (95% de oxigênio e 5% de ozônio) gerado por um dispositivo médico certificado.',
          'Ação: age ativando o sistema antioxidante e possui ação na remoção de radicais livres. Melhora a oxigenação sanguínea, promove o aumento da flexibilidade dos eritrócitos, facilitando a sua passagem pelos vasos capilares. Ação analgésica e anti-inflamatória estimulando o crescimento do tecido de granulação, facilitando o crescimento do tecido epitelial, inibindo crescimento bacteriano, além de promover o efeito antimicrobiano e fungicida.',
          'Vias de administração da ozônioterapia no tratamento de feridas: venosa, intramuscular, retal, vaginal, via tópica (água ozonizada, hidrooznioterapia, ozônio bag e óleo ozonizado).',
          'Contraindicação: deficiência da enzima Glicose-6-Fosfato Desidrogenase (G6PD), em função do risco de hemólise ser mediado pelo estresse oxidativo criado pelas radicais livres de oxigênio. Também não é indicada a pacientes em período gestacional ou em amamentação. E em situações anormais como: hipertireoidismo descompensado, trombocitopenia, anemia severa, hemorragia, e em portadores doença cardiovascular.',
        ],
      },
      {
        title: 'Plasma Rico em Plaquetas (PRP)',
        color: 'orange.400',
        description: '',
        img: '',
        child: [
          'Definição: É o produto da centrifugação do sangue do próprio paciente, a fim de alcançar maior concentração de plaquetas que liberarão fatores de crescimento, citocinas e moléculas de aderência celular.',
          'Preparo: Para chegar à separação celular devem ser realizadas as seguintes etapas: coleta de sangue, centrifugação, separação do plasma rico em plaquetas, ativação da coagulação adicionando cloreto de cálcio e aplicação tópica do PRP após a gelificação.',
          'Ação: as plaquetas contém diversos fatores de crescimento como: fator de crescimento derivado de plaquetas (PDGF), fator de crescimento transformador beta (TGF-β), fator endotelial de crescimento vascular (VEGF), fator de crescimento epidérmico (EGF) e fator de crescimento fibroblástico (FGF). Com ação em todas as fases de cicatrização, auxilia na inflamatória por meio da hemostasia, ativando a agregação plaquetária e a cascata de coagulação, favorece a formação do tecido de granulação e a angiogênese, estimulando a epitelização e a proliferação dos fibroblastos, está envolvido na contração da ferida e na deposição de colágeno.',
        ],
      },
    ],
    items: [],
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
