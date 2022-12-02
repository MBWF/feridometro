import {
  Accordion as ChakraAccordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Flex,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import { IoNewspaperOutline } from 'react-icons/io5';

import { Header } from '../../Components/Header';
import { references } from '../../Mock/references';
import { theme, themeFonts } from '../../styles/global';

export function ReferencePage() {
  return (
    <>
      <Header
        redirectLink="/home"
        areaName="Referências"
        bgColor={theme.colors.blue_600}
        color={theme.colors.white_100}
      />
      <Stack display="flex" justifyContent="center" alignItems="center" width="100%">
        <Flex
          maxWidth="768px"
          flexDirection="column"
          padding="1rem"
          fontFamily={themeFonts.fonts.title}
          gap="1rem"
        >
          {references.map((reference) => (
            <ChakraAccordion allowMultiple width="100%" key={reference.title}>
              <AccordionItem boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px" padding="1rem">
                <Flex alignItems="center">
                  <Flex fontSize={35}>
                    <IoNewspaperOutline />
                  </Flex>
                  <Flex justifyContent="space-between" flex="2" paddingLeft="1rem">
                    <Flex flexDirection="column" width="90%">
                      <Text fontSize={themeFonts.fontSizes.large} fontWeight="600">
                        {reference.title}
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
                <AccordionPanel
                  pb={2}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flexDirection="column"
                  gap="1rem"
                >
                  <Text>{reference.description}</Text>

                  <Link>
                    <a href={reference.link}>
                      <Text color="blue.600">Clique para acessar</Text>
                    </a>
                  </Link>
                </AccordionPanel>
              </AccordionItem>
            </ChakraAccordion>
          ))}
        </Flex>
      </Stack>
    </>
  );
}
