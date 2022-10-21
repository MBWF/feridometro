import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { FiSun } from 'react-icons/fi';
import { VscNotebook } from 'react-icons/vsc';

import logoFeridometro from '../../assets/logoFeridometro.png';

interface SidebarMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

import { themeFonts } from '../../styles/global';

export function SidebarMenu({ isOpen, onClose }: SidebarMenuProps) {
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth="1px" bgColor="blue.400">
          <Image src={logoFeridometro} />
        </DrawerHeader>

        <DrawerBody>
          <Stack spacing="24px">
            <Flex justifyContent="space-between" alignItems="center" my="1rem">
              <FiSun />

              <Flex flexDirection="column" w="70%">
                <Text fontSize={themeFonts.fontSizes.medium} fontWeight="700">
                  Instruções
                </Text>
                <Text fontSize={themeFonts.fontSizes.small}>
                  Ainda não conhece o App?{''}
                  Não se preocupe, comece por aqui!
                </Text>
              </Flex>

              <AiOutlineArrowRight fontSize={themeFonts.fontSizes.extraLarge} />
            </Flex>
            <Flex justifyContent="space-between" alignItems="center">
              <VscNotebook />

              <Flex flexDirection="column" w="70%">
                <Text fontSize={themeFonts.fontSizes.medium} fontWeight="700">
                  Instruções
                </Text>
                <Text fontSize={themeFonts.fontSizes.small}>
                  A base científica do aplicativo
                  <br />
                  está toda aqui, confira!
                </Text>
              </Flex>

              <AiOutlineArrowRight fontSize={themeFonts.fontSizes.extraLarge} />
            </Flex>
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
