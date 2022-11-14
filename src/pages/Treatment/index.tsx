import {
  Accordion as ChakraAccordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from '@chakra-ui/react';

import { treatmentMock } from '../../Mock/treatment';
import { themeFonts } from '../../styles/global';

export function TreatmentPage() {
  return (
    <Stack padding="1rem">
      {treatmentMock.map((treatment) => (
        <ChakraAccordion allowMultiple width="100%" key={treatment.title}>
          <AccordionItem boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px" padding="1rem">
            <Flex alignItems="center">
              <Box bgColor={treatment.color} height="35px" width="50px" />
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
              {treatment.items.length > 0 ? (
                <UnorderedList width="100%">
                  {treatment.items.map((item) => (
                    <ListItem key={item} marginY="1rem">
                      {item}
                    </ListItem>
                  ))}
                </UnorderedList>
              ) : (
                <>
                  {treatment.children.map((child) => (
                    <AccordionItem
                      key={child.title}
                      w="100%"
                      boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
                      padding="1rem"
                    >
                      <Flex alignItems="center">
                        <Box bgColor={treatment.color} height="35px" width="50px" />
                        <Flex justifyContent="space-between" flex="2" paddingLeft="1rem">
                          <Flex flexDirection="column" width="90%">
                            <Text fontSize={themeFonts.fontSizes.large} fontWeight="600">
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
                        <Text textAlign="justify">{child.description}</Text>
                      </AccordionPanel>
                    </AccordionItem>
                  ))}
                </>
              )}
            </AccordionPanel>
          </AccordionItem>
        </ChakraAccordion>
      ))}
    </Stack>
  );
}
