import {
  Button,
  Flex,
  Image,
  Modal as ChakraModal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';

import logoFeridometro from '../../assets/logoFeridometro.png';

interface ModalProps {
  isModalOpen: boolean;
  onModalClose: () => void;
}

export function Modal({ isModalOpen, onModalClose }: ModalProps) {
  return (
    <>
      <ChakraModal isOpen={isModalOpen} onClose={onModalClose}>
        <ModalOverlay />
        <ModalContent margin="1rem">
          <ModalHeader textAlign="center">
            <Flex alignItems="center" justifyContent="center">
              <Image src={logoFeridometro} width={['15rem', '20rem', '25rem', '30rem']} />
            </Flex>
          </ModalHeader>
          <ModalBody>
            <Text textAlign="center">
              O app Feridômetro foi criado com base no acrônimo TIMERS que faz parte do
              conceito do “Preparo do Leito da Ferida - Wound Bed Preparation (WBP)”. Esse
              acrônimo foi desenvolvido por um grupo internacional de especialistas nas
              áreas de medicina e enfermagem, envolvidos no cuidado de feridas.
            </Text>
          </ModalBody>

          <ModalFooter display="flex" justifyContent="center">
            <Button colorScheme="blue" variant="ghost" mr={3} onClick={onModalClose}>
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </ChakraModal>
    </>
  );
}
