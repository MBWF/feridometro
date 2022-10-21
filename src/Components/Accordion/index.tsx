import {
  Accordion as AccordionContainer,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Image,
  Text,
} from '@chakra-ui/react';

interface AccordionProps {
  title: string;
  description: string;
}

import { theme, themeFonts } from '../../styles/global';
import { ButtonRedirect } from '../Button';

export function Accordion({ title, description }: AccordionProps) {
  return (
    <AccordionContainer allowMultiple width="100%">
      <AccordionItem boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px" padding="1rem">
        <Flex alignItems="center">
          <Image
            src="https://avatars.githubusercontent.com/u/53956930?v=4"
            height="50px"
            width="50px"
            borderRadius="full"
          />
          <Flex justifyContent="space-between" flex="2" paddingLeft="1rem">
            <Flex flexDirection="column" width="90%">
              <Text fontSize={themeFonts.fontSizes.large} fontWeight="600">
                {title}
              </Text>

              <Text fontSize={themeFonts.fontSizes.small} fontWeight="400">
                {description}
              </Text>
            </Flex>

            <AccordionButton
              flex="1"
              p="0"
              bgColor="transparent"
              display="flex"
              justifyContent="center"
            >
              <AccordionIcon fontSize={themeFonts.fontSizes.large} />
            </AccordionButton>
          </Flex>
        </Flex>
        <AccordionPanel pb={4} display="flex" alignItems="center" justifyContent="center">
          <Flex
            flexDirection="column"
            gap="1rem"
            width="50%"
            alignItems="center"
            justifyContent="center"
          >
            <ButtonRedirect text="Avaliação" />
            <ButtonRedirect text="Tratamento" />
            <ButtonRedirect text="Cobertura" />
          </Flex>
        </AccordionPanel>
      </AccordionItem>
    </AccordionContainer>
  );
}
