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
          description="Objetivo: Limpar o leito da ferida, desbridar o tecido desvitilizado"
          srcImage="https://bit.ly/dan-abramov"
        />
        <Accordion
          title="T - Tecido"
          description="Objetivo: Limpar o leito da ferida, desbridar o tecido desvitilizado"
          srcImage="https://bit.ly/dan-abramov"
        />
        <Accordion
          title="T - Tecido"
          description="Objetivo: Limpar o leito da ferida, desbridar o tecido desvitilizado"
          srcImage="https://bit.ly/dan-abramov"
        />
        <Accordion
          title="T - Tecido"
          description="Objetivo: Limpar o leito da ferida, desbridar o tecido desvitilizado"
          srcImage="https://bit.ly/dan-abramov"
        />
        <Accordion
          title="T - Tecido"
          description="Objetivo: Limpar o leito da ferida, desbridar o tecido desvitilizado"
          srcImage="https://bit.ly/dan-abramov"
        />
        <Accordion
          title="T - Tecido"
          description="Objetivo: Limpar o leito da ferida, desbridar o tecido desvitilizado"
          srcImage="https://bit.ly/dan-abramov"
        />
        <Accordion
          title="T - Tecido"
          description="Objetivo: Limpar o leito da ferida, desbridar o tecido desvitilizado"
          srcImage="https://bit.ly/dan-abramov"
        />
      </Flex>
    </Box>
  );
}
