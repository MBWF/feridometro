import { Flex, IconButton, Text, useDisclosure } from '@chakra-ui/react';
import { FiLogOut, FiMenu } from 'react-icons/fi';

import { useUser } from '../../providers/User/useUser';
import { theme, themeFonts } from '../../styles/global';
import { SidebarMenu } from '../SidebarMenu';
import { ButtonsContainer } from './styles';

export function HomeHeader() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { userData, logout } = useUser();

  return (
    <>
      <SidebarMenu isOpen={isOpen} onClose={onClose} />
      <Flex bgColor="blue.400" height="200px" width="100%" justifyContent="center">
        <Flex width="700px" flexDirection="column" alignItems="space-between">
          <ButtonsContainer>
            <IconButton aria-label="open-menu" icon={<FiMenu />} onClick={onOpen} />

            <IconButton aria-label="leave-app" icon={<FiLogOut />} onClick={logout} />
          </ButtonsContainer>

          <Text
            paddingX="1rem"
            color={theme.colors.white_100}
            fontSize={themeFonts.fontSizes.smLarge}
            marginTop="1rem"
          >
            Seja bem vindo ao Feridômetro
          </Text>

          <Text
            paddingX="1rem"
            color={theme.colors.white_100}
            fontSize={themeFonts.fontSizes.smLarge}
            marginTop="1rem"
            fontWeight={700}
          >
            {userData?.name}
          </Text>
        </Flex>
      </Flex>
    </>
  );
}
