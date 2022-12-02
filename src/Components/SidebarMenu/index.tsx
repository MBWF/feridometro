import {
  Button,
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
  useDisclosure,
} from '@chakra-ui/react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { FiSun } from 'react-icons/fi';
import { VscNotebook } from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom';

import logoFeridometro from '../../assets/logoFeridometro.png';

interface SidebarMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

import { themeFonts } from '../../styles/global';
import { Modal } from '../Modal';

export function SidebarMenu({ isOpen, onClose }: SidebarMenuProps) {
  const navigate = useNavigate();
  const { isOpen: isModalOpen, onOpen, onClose: onModalClose } = useDisclosure();

  return (
    <>
      <Modal isModalOpen={isModalOpen} onModalClose={onModalClose} />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px" bgColor="blue.400">
            <Image src={logoFeridometro} />
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <Flex
                justifyContent="space-between"
                alignItems="center"
                my="1rem"
                onClick={onOpen}
              >
                <FiSun />

                <Flex flexDirection="column" w="70%">
                  <Text fontSize={themeFonts.fontSizes.medium} fontWeight="700">
                    Instruções
                  </Text>
                  <Text fontSize={themeFonts.fontSizes.small}>
                    Ainda não conhece o App?
                    <br />
                    Não se preocupe, comece por aqui!
                  </Text>
                </Flex>

                <AiOutlineArrowRight fontSize={themeFonts.fontSizes.extraLarge} />
              </Flex>
              <Flex
                justifyContent="space-between"
                alignItems="center"
                onClick={() => navigate('/references')}
              >
                <VscNotebook />

                <Flex flexDirection="column" w="70%">
                  <Text fontSize={themeFonts.fontSizes.medium} fontWeight="700">
                    Referências
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
    </>
  );
}
