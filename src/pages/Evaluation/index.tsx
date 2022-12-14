import {
  Accordion as ChakraAccordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Image,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import {
  e_evaluation,
  e_evaluationTitle,
  i_evaluation,
  i_evaluationTitle,
  m_evaluation,
  m_evaluationTitle,
  r_evaluation,
  r_evaluationTitle,
  s_evaluation,
  s_evaluationTitle,
  t_evaluation,
  T_evaluationProps,
  t_evaluationTitle,
} from '../../Mock/evaluation';
import { themeFonts } from '../../styles/global';

export function EvaluationPage() {
  const [currentMock, setCurrentMock] = useState<T_evaluationProps[]>([]);
  const [currentTitle, setCurrentTitle] = useState<string>('');

  useEffect(() => {
    if (location.pathname.includes('Tecido')) {
      setCurrentMock(t_evaluation);
      setCurrentTitle(t_evaluationTitle);
    }
    if (location.pathname.includes('Inflam')) {
      setCurrentMock(i_evaluation);
      setCurrentTitle(i_evaluationTitle);
    }
    if (location.pathname.includes('Umidade')) {
      setCurrentMock(m_evaluation);
      setCurrentTitle(m_evaluationTitle);
    }
    if (location.pathname.includes('Bordas')) {
      setCurrentMock(e_evaluation);
      setCurrentTitle(e_evaluationTitle);
    }
    if (location.pathname.includes('Regene')) {
      setCurrentMock(r_evaluation);
      setCurrentTitle(r_evaluationTitle);
    }
    if (location.pathname.includes('Fatores')) {
      setCurrentMock(s_evaluation);
      setCurrentTitle(s_evaluationTitle);
    }
  }, []);

  return (
    <Stack display="flex" justifyContent="center" alignItems="center" width="100%">
      <Flex
        maxWidth="768px"
        flexDirection="column"
        padding="1rem"
        fontFamily={themeFonts.fonts.title}
        gap="1rem"
      >
        <Text>{currentTitle}</Text>
        {currentMock.map((evlt) => (
          <ChakraAccordion allowMultiple width="100%" key={evlt.title}>
            <AccordionItem boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px" padding="1rem">
              <Flex alignItems="center">
                <Box bgColor={evlt.color} height="35px" width="50px" />
                <Flex justifyContent="space-between" flex="2" paddingLeft="1rem">
                  <Flex flexDirection="column" width="90%">
                    <Text
                      fontSize={themeFonts.fontSizes.large}
                      fontWeight="600"
                      color="blue.400"
                    >
                      {evlt.title}
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
                pb={4}
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                gap="1rem"
              >
                {evlt?.description && (
                  <Text textAlign="justify">{evlt?.description}</Text>
                )}
                {evlt.children.length === 0 ? (
                  <UnorderedList width="100%">
                    {evlt?.points?.map((item) => (
                      <ListItem key={String(item)} marginY="1rem">
                        {String(item)}
                      </ListItem>
                    ))}
                  </UnorderedList>
                ) : (
                  <>
                    {evlt.children.map((child) => (
                      <AccordionItem
                        key={child.title}
                        w="100%"
                        boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
                        padding="1rem"
                      >
                        <Flex alignItems="center">
                          {child.srcImage !== '' && (
                            <Image
                              src={child.srcImage}
                              height="50px"
                              width="50px"
                              borderRadius="full"
                            />
                          )}
                          <Flex
                            justifyContent="space-between"
                            flex="2"
                            paddingLeft="1rem"
                          >
                            <Flex flexDirection="column" width="90%">
                              <Text
                                fontSize={themeFonts.fontSizes.large}
                                fontWeight="600"
                              >
                                {child.title}
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
                          pb={4}
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          flexDirection="column"
                          gap="1rem"
                        >
                          <Flex
                            key={child.title}
                            flexDirection="column"
                            justifyContent="space-between"
                            alignItems="center"
                          >
                            {child.srcImage !== '' && (
                              <Image
                                src={child.srcImage}
                                height="150px"
                                width="150px"
                                borderRadius="full"
                                marginY="1rem"
                              />
                            )}
                            <Text textAlign="justify">{child.description}</Text>
                          </Flex>
                        </AccordionPanel>
                      </AccordionItem>
                    ))}
                  </>
                )}
              </AccordionPanel>
            </AccordionItem>
          </ChakraAccordion>
        ))}
      </Flex>
    </Stack>
  );
}
