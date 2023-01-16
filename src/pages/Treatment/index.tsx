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
  e_treatmentMock,
  i_treatmentMock,
  m_treatmentMock,
  r_treatmentMock,
  s_treatmentMock,
  treatmentMock,
} from '../../Mock/treatment';
import { themeFonts } from '../../styles/global';

export function TreatmentPage() {
  const [currentMock, setCurrentMock] = useState<any[]>([]);

  useEffect(() => {
    if (location.pathname.includes('Tecido')) {
      setCurrentMock(treatmentMock);
    }
    if (location.pathname.includes('Inflam')) {
      setCurrentMock(i_treatmentMock);
    }
    if (location.pathname.includes('Umidade')) {
      setCurrentMock(m_treatmentMock);
    }
    if (location.pathname.includes('Borda')) {
      setCurrentMock(e_treatmentMock);
    }
    if (location.pathname.includes('Rege')) {
      setCurrentMock(r_treatmentMock);
    }
    if (location.pathname.includes('Fato')) {
      setCurrentMock(s_treatmentMock);
    }
  }, []);

  return (
    <Stack
      padding="1rem"
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      <Flex maxWidth="768px" minWidth="360px" flexDirection="column" gap="1rem">
        {location.pathname.includes('Borda') && (
          <Text>O que você pode fazer para acelerar o avanço da borda da ferida?</Text>
        )}
        {currentMock?.map((treatment) => (
          <ChakraAccordion allowMultiple width="100%" key={treatment.title}>
            <AccordionItem boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px" padding="1rem">
              <Flex alignItems="center">
                {!treatment?.img ? (
                  <Box bgColor={treatment.color} height="35px" width="50px" />
                ) : (
                  <Image
                    src={treatment.img}
                    height="50px"
                    width="50px"
                    borderRadius="full"
                  />
                )}
                <Flex justifyContent="space-between" flex="2" paddingLeft="1rem">
                  <Flex flexDirection="column" width="90%">
                    <Text
                      fontSize={themeFonts.fontSizes.large}
                      fontWeight="600"
                      color={treatment.color}
                    >
                      {treatment.title}
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
                py={4}
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                gap="1rem"
              >
                {treatment?.items?.length > 0 && (
                  <UnorderedList width="100%">
                    {treatment.items.map((item: any) => (
                      <ListItem key={item} marginY="1rem">
                        {item}
                      </ListItem>
                    ))}
                  </UnorderedList>
                )}
                {treatment?.children?.length > 0 && (
                  <>
                    {treatment.children.map((child: any) => (
                      <AccordionItem
                        key={child.title}
                        w="100%"
                        boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
                        padding="1rem"
                      >
                        <Flex alignItems="center">
                          {!child?.img ? (
                            <Box bgColor={child.color} height="35px" width="50px" />
                          ) : (
                            <Image
                              src={child.img}
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
                                textAlign="left"
                              >
                                {child.title}
                              </Text>
                            </Flex>
                            {!(child?.items?.length > 0) && (
                              <AccordionButton
                                flex="1"
                                p="0"
                                bgColor="transparent"
                                display="flex"
                                justifyContent="center"
                              >
                                <AccordionIcon fontSize={themeFonts.fontSizes.large} />
                              </AccordionButton>
                            )}
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
                          <Text textAlign="left">{child.description}</Text>
                          <UnorderedList width="100%">
                            {child?.child?.map((item: string) => (
                              <ListItem key={item} marginY="1rem">
                                {item}
                              </ListItem>
                            ))}
                          </UnorderedList>
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
