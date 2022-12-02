import { Box, Flex } from '@chakra-ui/react';

import eIcon from '../../assets/e_icon.png';
import iIcon from '../../assets/i_icon.png';
import mIcon from '../../assets/m_icon.png';
import tIcon from '../../assets/new_t_icon.jpg';
import rIcon from '../../assets/r_icon.png';
import sIcon from '../../assets/s_icon.png';
import { Accordion } from '../../Components/Accordion';
import { HomeHeader } from '../../Components/HomeHeader';
import { themeFonts } from '../../styles/global';

export function HomePage() {
  return (
    <Box>
      <HomeHeader />

      <Flex alignItems="center" justifyContent="center">
        <Flex
          bgColor="gray.200"
          borderTopRadius={themeFonts.borderRadius.xLarge}
          marginTop="-4.6rem"
          padding="2rem"
          flexDirection="column"
          gap="1rem"
          maxWidth="768px"
        >
          <Accordion
            title="T - Tecido"
            linkName="Tecido"
            description="Objetivo: Limpar o leito da ferida, desbridar o tecido desvitilizado."
            srcImage={tIcon}
          />
          <Accordion
            title="I - Inflamação"
            linkName="Inflamação"
            description="Objetivo: Controlar a inflamação, infecção, Biofilme."
            srcImage={iIcon}
          />
          <Accordion
            title="M - Umidade/Axsudato"
            linkName="Umidade"
            description="Objetivo: Controlar a umidade/exsudato da lesão."
            srcImage={mIcon}
          />
          <Accordion
            title="E - Bordas"
            linkName="Bordas"
            description="Objetivo: Redução do tamanho da ferida, epitelização."
            srcImage={eIcon}
          />
          <Accordion
            title="R - Regeneração/Reparação"
            linkName="Regeneração"
            description="Objetivo: Fechamento da ferida, reparo do tecido."
            srcImage={rIcon}
          />
          <Accordion
            title="S - Fatores sociais"
            linkName="FatoresSociais"
            description="Objetivo: Educação do paciente, familia e cuidador, escuta ativa; compreensão do sistema de crenças"
            srcImage={sIcon}
          />
        </Flex>
      </Flex>
    </Box>
  );
}
