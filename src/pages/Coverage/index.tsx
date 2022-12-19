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
  coveragesMock,
  e_coveragesMock,
  i_coveragesMock,
  m_coveragesMock,
  r_coveragesMock,
} from '../../Mock/coverage';
import { themeFonts } from '../../styles/global';

export function CoveragePage() {
  const [currentMock, setCurrentMock] = useState<any[]>([]);

  useEffect(() => {
    if (location.pathname.includes('Tecido')) {
      setCurrentMock(coveragesMock);
    }
    if (location.pathname.includes('Inflam')) {
      setCurrentMock(i_coveragesMock);
    }
    if (location.pathname.includes('Umidade')) {
      setCurrentMock(m_coveragesMock);
    }
    if (location.pathname.includes('Borda')) {
      setCurrentMock(e_coveragesMock);
    }
    if (location.pathname.includes('Rege')) {
      setCurrentMock(r_coveragesMock);
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
        {currentMock.map((coverage) => (
          <ChakraAccordion allowMultiple width="100%" key={coverage.title}>
            <AccordionItem boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px" padding="1rem">
              <Flex alignItems="center">
                {coverage?.color ? (
                  <Box bgColor={coverage.color} height="35px" width="50px" />
                ) : (
                  <Image
                    src={coverage.srcImage}
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
                      color="blue.400"
                    >
                      {coverage.title}
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
                px={1}
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                gap="1rem"
              >
                {coverage?.color ? null : (
                  <Image
                    src={coverage.srcImage}
                    height="150px"
                    width="150px"
                    borderRadius="full"
                  />
                )}
                {coverage?.items?.length > 0 ? (
                  <UnorderedList width="100%">
                    {coverage.items.map((item: any) => (
                      <ListItem key={item} marginY="1rem">
                        {item}
                      </ListItem>
                    ))}
                  </UnorderedList>
                ) : (
                  <>
                    {coverage.children.map((child: any) => (
                      <AccordionItem
                        key={child.title}
                        w="100%"
                        padding="1rem"
                        boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
                      >
                        <Flex alignItems="center">
                          <Flex
                            justifyContent="space-between"
                            flex="2"
                            paddingLeft="1rem"
                          >
                            <Text fontSize={themeFonts.fontSizes.large} fontWeight="600">
                              {child.title}
                            </Text>
                            <Box>
                              <AccordionButton
                                flex="1"
                                p="0"
                                bgColor="transparent"
                                display="flex"
                                justifyContent="center"
                              >
                                <AccordionIcon fontSize={themeFonts.fontSizes.large} />
                              </AccordionButton>
                            </Box>
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
                          {typeof child.description === 'object' ? (
                            <UnorderedList>
                              {child.description.map((e: any) => (
                                <ListItem key={e}>{e}</ListItem>
                              ))}
                            </UnorderedList>
                          ) : (
                            <Text textAlign="justify">{child.description}</Text>
                          )}
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
