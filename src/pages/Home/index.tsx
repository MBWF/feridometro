import { Box, Flex } from '@chakra-ui/react';

import { Accordion } from '../../Components/Accordion';
import { HomeHeader } from '../../Components/HomeHeader';
import { themeFonts } from '../../styles/global';

export function HomePage() {
  return (
    <Box>
      <HomeHeader />

      <Flex
        bgColor="gray.200"
        borderRadius={themeFonts.borderRadius.xLarge}
        marginTop="-4.6rem"
        padding="2rem"
        flexDirection="column"
        gap="1rem"
      >
        <Accordion
          title="T - Tecido"
          linkName="Tecido"
          description="Objetivo: Limpar o leito da ferida, desbridar o tecido desvitilizado."
          srcImage="https://bit.ly/dan-abramov"
        />
        <Accordion
          title="I - Inflamação"
          linkName="Inflamação"
          description="Objetivo: Controlar a inflamação, infecção, Biofilme."
          srcImage="https://bit.ly/dan-abramov"
        />
        <Accordion
          title="M - Umidade/Axsudato"
          linkName="Umidade"
          description="Objetivo: Controlar a umidade/exsudato da lesão."
          srcImage="https://bit.ly/dan-abramov"
        />
        <Accordion
          title="E - Bordas"
          linkName="Bordas"
          description="Objetivo: Redução do tamanho da ferida, epitelização."
          srcImage="https://bit.ly/dan-abramov"
        />
        <Accordion
          title="R - Regeneração/Reparação"
          linkName="Regeneração"
          description="Objetivo: Fechamento da ferida, reparo do tecido."
          srcImage="https://bit.ly/dan-abramov"
        />
        <Accordion
          title="S - Fatores sociais"
          linkName="FatoresSociais"
          description="Objetivo: Educação do paciente, familia e cuidador, escuta ativa; compreensão do sistema de crenças"
          srcImage="https://bit.ly/dan-abramov"
        />
      </Flex>
    </Box>
  );
}
